import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {signInWithGoogle, signInWithFacebook, signInWithTwitter} from '../../firebase/authMethods';
import {generateUserDocument} from '../../firebase/firebase';
import './UserForms.styles.scss';


class SignInWithSocials extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }    

  }

  handleSocialSignIn (e, socialSignIn) {

    e.preventDefault();

    socialSignIn()
      .then((result) => {
        generateUserDocument(result.user);
      })
      .catch(err => console.log(err.message))
  }

  render() {
    return(
      <div className="login-form__socials">
        <p className="login-form__socials--title">Or Sing In Using</p>
        <div className="login-form__socials_btns">
          <button onClick={event => this.handleSocialSignIn(event, signInWithGoogle)}>
            <FontAwesomeIcon icon={faGoogle} />
          </button>
          <button onClick={event => {this.handleSocialSignIn(event, signInWithFacebook)}}>
            <FontAwesomeIcon icon={faFacebook} />
          </button>
          <button onClick={event => {this.handleSocialSignIn(event, signInWithTwitter)}}>
            <FontAwesomeIcon icon={faTwitter} />              
          </button>
        </div>
      </div>
    )
  }
}

export default SignInWithSocials;