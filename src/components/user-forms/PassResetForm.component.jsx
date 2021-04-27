import React from 'react';
import {Link} from 'react-router-dom';
import './UserForms.styles.scss';

class PassResetForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      emailBeenSent: 'false',
      error: null,
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    const {name, value} = e.currentTarget;
    console.log(name,value)
        
    this.setState({[name]: value})
  }

  render() {
  return(
    <div className="sign-in-page">
      <div className="login-form">
        <h3 className="login-form__title">Reset your Password</h3>
        {/* need to add an extra piece for shows errors */}
        {this.state.error !== null && 
          <div className="login-form__errors">{this.state.error}</div>
        }
        {/* confirmation message that the email has been sent */}
        {this.state.emailBeenSent && 
          <div className="login-form__errors">An email has been sent!</div>
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
          
          <button className="login-form__btn">Send link</button>

          <div className="login-form__signup">
            <span></span>
            <Link to="/profile" >
              Back to Sign In page
            </Link>
          </div>
        </form>
      </div>
    </div>
  )}
}

export default PassResetForm;