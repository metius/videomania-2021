import {withRouter} from 'react-router-dom';
import SignInForm from '../../components/user-forms/SignInForm.component';
import SignUpForm from '../../components/user-forms/SignUpForm.component';

const SignInSignUpPage = (props) => {
  const {state} = props.location;
  console.log("State", props)
  let redirect;
  if(state === undefined || state === null || state.signin === true) {
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