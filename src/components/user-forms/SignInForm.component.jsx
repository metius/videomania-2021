import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import SignInWithSocials from './SignInWithSocials.component';
import {signInWithEmailAndPassword, setPersistence} from '../../firebase/authMethods';

import './UserForms.styles.scss';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      rememberMe: false,
      error: false,
      errMessage: null,
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.signInWithEmailAndPasswordHandler = this.signInWithEmailAndPasswordHandler.bind(this);
  }

  onChangeHandler(e) {
    // const {name, value} = e.currentTarget;
    const target = e.currentTarget;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
        
    this.setState({[name]: value})
  }

  signInWithEmailAndPasswordHandler(event) {
    event.preventDefault();

    const {email, password, rememberMe} = this.state;
    const {payload} = this.props;

    setPersistence(rememberMe)
      .catch(err => {
        console.log(err.message);
      });

    signInWithEmailAndPassword(email, password, rememberMe)
      .then(() => {
        if(!(payload === undefined)) {
          this.props.history.push(payload.from);
        }
      })
      .catch(err => {
        console.log('Error hanlder in sign in:', err.message);
        this.setState({
          email: '',
          password: '',
          error: true,
          errMessage: err.message, 
          rememberMe: false,
        })
      });
  }

  render() {
    const {email, password, error, errMessage, rememberMe} = this.state;

    return(
      <div className="sign-in-page">
        <div className="login-form">
          <h3 className="login-form__title">Sign In</h3>
          {/* need to add an extra piece for shows errors */}
          {error && 
            <div className="login-form__errors">{errMessage}</div>
          }
          <form 
            className="login-form__wrapper"
            onSubmit={this.signInWithEmailAndPasswordHandler}
          >
            <input 
              type="email" 
              className="login-form__input" 
              placeholder="Email" 
              name="email"
              value={email}
              id="userEmail"
              onChange={(event) => this.onChangeHandler(event)}  
            />
            <input 
              type="password" 
              className="login-form__input" 
              placeholder="Password" 
              name="password"
              value={password}
              id="userPassword"
              onChange={(event) => this.onChangeHandler(event)}  
            />

            <div className="login-form__links">
              <label className="chkbox-wrapper">Remember me
                <input 
                  type="checkbox" 
                  name="rememberMe"
                  value={rememberMe}
                  onChange={(event) => this.onChangeHandler(event)}  
                />
                <span className="checkmark"></span>
              </label>
    
              <Link to="/pass-reset" className="login-form__new-pswd">
                Forgot Password?
              </Link>
            </div>
            <button 
              className="login-form__btn"
            >
              Sign In
            </button>
          </form>


          <div className="login-form__signup">
            <span>Don't have an account? Register </span>
            <Link 
              to={{
                pathname: "/profile",
                state:{
                  ...this.props.payload,
                  signup: true,
                  signin: false
                }
              }}>
              here
            </Link>
          </div>

          <SignInWithSocials />
          
        </div>
      </div>
    )
  }
}

export default withRouter(SignInForm);