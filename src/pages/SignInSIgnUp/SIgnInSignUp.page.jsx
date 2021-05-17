import {withRouter} from 'react-router-dom';
import SignInForm from '../../components/user-forms/SignInForm.component';
import SignUpForm from '../../components/user-forms/SignUpForm.component';

const SignInSignUpPage = (props) => {
  const {state} = props.location;
  let redirect;
  if(state === undefined || state.signin === true) {
    redirect = <SignInForm />;
  } else {
    redirect = <SignUpForm />
  }
  return(
    <main>
      {
        redirect
      }
    </main>
  )
}

export default withRouter(SignInSignUpPage);