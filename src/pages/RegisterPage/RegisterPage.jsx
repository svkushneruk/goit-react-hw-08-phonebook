import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { getAuthError } from './../../redux/auth/auth-selectors';

import { Section, PageTitle } from './RegisterPage.styled';

import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

export default function RegisterView() {
  const dispatch = useDispatch();
  const { status } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <Section>
      <PageTitle>Registration page</PageTitle>
      <RegisterForm onSubmit={onRegister} />
      {status && (
        <ErrorMessage message="Sign up... Enter your name, email and password." />
      )}
    </Section>
  );
}
