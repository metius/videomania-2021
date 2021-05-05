import React from 'react';
import {Link} from 'react-router-dom';
import './UserForms.styles.scss';
import SignInWithSocials from './SignInWithSocials.component';
import { auth, generateUserDocument } from '../../firebase/firebase';

class SignUpForm extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null,
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.createUserWithEmailAndPasswordHandler = this.createUserWithEmailAndPasswordHandler.bind(this);
  }

  async createUserWithEmailAndPasswordHandler(event, email, password) {
    event.preventDefault();

    try {
      console.log(`in the try`);
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      console.log(`User from auth: `);
      Object.entries(user).forEach(keyValuePair => {console.log("  ",...keyValuePair)})
       //generateUserDocument(user, user.displayName);             
      
    } catch(err) {
      this.setState({
        error: err
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
    //console.log(e.currentTarget)
        
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
            type="text" 
            className="login-form__input" 
            placeholder="Display name" 
            name="displayName"
            value={this.state.displayName}
            id="userDisplayName"
            onChange={(event) => this.onChangeHandler(event)}  
          />
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
            value={this.state.password}
            id="userPassword"
            onChange={(event) => this.onChangeHandler(event)}  
          />
          <input 
            type="password" 
            className="login-form__input" 
            placeholder="Confirm Password" 
            name="confirmPassword"
            value={this.state.confirmPassword}
            id="userConfirmPassword"
            onChange={(event) => this.onChangeHandler(event)}  
          />
          
          <button 
            className={'login-form__btn ' + (this.state.password !== this.state.confirmPassword || this.state.password.length === 0 ? 'btn__disable' : '')}
            onClick={event => {this.createUserWithEmailAndPasswordHandler(event, this.state.email, this.state.password)}}
            disabled={
              this.state.password !== this.state.confirmPassword || this.state.password.length === 0 ? true : false
            }
          >
            Register
          </button>

        </form>
          
        <SignInWithSocials />

      </div>
    </div>
  )}
}

export default SignUpForm;