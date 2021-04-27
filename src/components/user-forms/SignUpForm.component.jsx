import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './UserForms.styles.scss';
import SignInWithSocials from './SignInWithSocials.component';

class SignUpForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: null,
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    const {name, value} = e.currentTarget;
    console.log(e.currentTarget)
        
    this.setState({[name]: value})
  }

  render() {
  return(
    <div className="sign-in-page">
      <div className="login-form">
        <h3 className="login-form__title">Sign Up</h3>
        {/* need to add an extra piece for shows errors */}
        {this.state.error !== null && 
          <div className="login-form__errors">{this.state.error}</div>
        }
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
          <input 
            type="password" 
            className="login-form__input" 
            placeholder="Confirm Password" 
            name="confirmPassword"
            id="userConfirmPassword"
            onChange={(event) => this.onChangeHandler(event)}  
          />
          
          <button className="login-form__btn">Register</button>

        </form>
          
        <SignInWithSocials />

      </div>
    </div>
  )}
}

export default SignUpForm;