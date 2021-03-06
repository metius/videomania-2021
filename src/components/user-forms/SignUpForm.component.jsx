import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './UserForms.styles.scss';
import SignInWithSocials from './SignInWithSocials.component';
import { auth, generateUserDocument } from '../../firebase/firebase';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: false,
      errMessage: ''
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.createUserWithEmailAndPasswordHandler = this.createUserWithEmailAndPasswordHandler.bind(this);
  }

  async createUserWithEmailAndPasswordHandler(event) {
    event.preventDefault();

    const {email, password, displayName} = this.state;
    const {payload} = this.props;

    try {      
      const {user} = await auth.createUserWithEmailAndPassword(email, password);      
      await generateUserDocument(user, {displayName: displayName});     
      if(!(payload === undefined)) {
        this.props.history.push(payload.from);              
      }
    } catch(err) {
      this.setState({        
        error: true,
        errMessage: err.message,
      })
    }

    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }
  
  onChangeHandler(e) {
    const {name, value} = e.currentTarget;
        
    this.setState({[name]: value})
  }

  render() {
    const {email, password, confirmPassword, displayName, error} = this.state;
    const {payload} = this.props;

    return(
      <div className="sign-in-page">
        <div className="login-form">
          <h3 className="login-form__title">Sign Up</h3>
          {/* need to add an extra piece for shows errors */}
          {error !== null && 
            <div className="login-form__errors">{error}</div>
          }
          <form 
            className="login-form__wrapper"
            onSubmit={this.createUserWithEmailAndPasswordHandler}
          >
            <input 
              type="text" 
              className="login-form__input" 
              placeholder="Display name" 
              name="displayName"
              value={displayName}
              id="userDisplayName"
              onChange={(event) => this.onChangeHandler(event)}  
            />
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
            <input 
              type="password" 
              className="login-form__input" 
              placeholder="Confirm Password" 
              name="confirmPassword"
              value={confirmPassword}
              id="userConfirmPassword"
              onChange={(event) => this.onChangeHandler(event)}  
            />
            
            <button 
              className={'login-form__btn ' + (password !== confirmPassword || password.length === 0 ? 'btn__disable' : '')}
              // onClick={event => {this.createUserWithEmailAndPasswordHandler(event, email, password, displayName)}}
              disabled={
                password !== confirmPassword || password.length === 0 ? true : false
              }
            >
              Register
            </button>

          </form>
            
          <SignInWithSocials payload={payload} />

          <Link 
              to={{
                pathname: "/profile",
                state:{
                  ...payload,
                  signin: true,
                  signup: false
                }
              }}>

            <p className="login-form__socials--title">Back to Sign In page</p>
          </Link>

        </div>
      </div>
    )
  }
}

export default withRouter(SignUpForm);