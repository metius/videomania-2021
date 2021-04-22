import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './SignIn.styles.scss';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      error: null,
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    const {name, value} = e.currentTarget;

    
    this.setState({[name]: value})
  }

  render() {
  return(
    <div className="sign-in-page">
      <div className="login-form">
        <h3 className="login-form__title">Sign In</h3>
        {/* need to add an extra piece for shows errors */}
        <form className="login-form__wrapper">
          <input 
            type="email" 
            className="login-form__input" 
            placeholder="Email" 
            name="email"
            value={this.state.email}
            id="userEmail"
            onChange={(event) => this.onChangeHandler(event)}  
          />
          <input 
            type="password" 
            className="login-form__input" 
            placeholder="Password" 
            name="password"
            id="userPassword"
            onChange={(event) => this.onChangeHandler(event)}  
          />

          <div className="login-form__links">
            <label className="chkbox-wrapper">Remember me
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
  
            <Link to="/passwordReset" className="login-form__new-pswd">
              Forgot Password?
            </Link>
          </div>

          <div className="login-form__signup">
            <span>Don't have an account? Register </span>
            <Link to="/signUp" >
              here
            </Link>
          </div>

          <button className="login-form__btn">Sign In</button>

          <div className="login-form__socials">
            <p className="login-form_socials--title">Or Sing In Using</p>
            <div className="login-form__socials_btns">
              <a href="">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faTwitter} />              
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )}
}

export default SignIn;