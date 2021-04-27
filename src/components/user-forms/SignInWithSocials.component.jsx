import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {signInWithGoogle, signInWithFacebook, signInWithTwitter} from '../../firebase/authMethods';
import './UserForms.styles.scss';

const SignInWithSocials = () => {
  return(
    <div className="login-form__socials">
      <p className="login-form_socials--title">Or Sing In Using</p>
      <div className="login-form__socials_btns">
        <button onClick={() => {signInWithGoogle();}}>
          <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button onClick={() => {signInWithFacebook();}}>
          <FontAwesomeIcon icon={faFacebook} />
        </button>
        <button onClick={() => {signInWithTwitter();}}>
          <FontAwesomeIcon icon={faTwitter} />              
        </button>
      </div>
    </div>
  )
}

export default SignInWithSocials;