import {withRouter} from 'react-router-dom';
import SignInForm from '../../components/user-forms/SignInForm.component';
import SignUpForm from '../../components/user-forms/SignUpForm.component';

const SignInSignUpPage = (props) => {
  const {state} = props.location;
  let redirect;
  if(state === undefined || state.signin === true) {
    redirect = <SignInForm payload={state} />;
  } else {
    redirect = <SignUpForm payload={state} />
  }
  return(
    <>
      {
        redirect
      }
    </>
  )
}

export default withRouter(SignInSignUpPage);