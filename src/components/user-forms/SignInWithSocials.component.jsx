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

  handleSocialSignIn(e, socialSignIn) {
    e.preventDefault();

    socialSignIn()
      .then(result => {
        console.log("social auth object(user):", result.user);
        console.log("social auth object(token):", result.credential.accessToken);
        const {displayName} = result.user;        
        generateUserDocument(result.user, {displayName: displayName});
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
// const SignInWithSocials = () => {
//   return(
    // <div className="login-form__socials">
    //   <p className="login-form__socials--title">Or Sing In Using</p>
    //   <div className="login-form__socials_btns">
    //     <button onClick={() => {signInWithGoogle();}}>
    //       <FontAwesomeIcon icon={faGoogle} />
    //     </button>
    //     <button onClick={() => {signInWithFacebook();}}>
    //       <FontAwesomeIcon icon={faFacebook} />
    //     </button>
    //     <button onClick={() => {signInWithTwitter();}}>
    //       <FontAwesomeIcon icon={faTwitter} />              
    //     </button>
    //   </div>
    // </div>
//   )
// }

export default SignInWithSocials;