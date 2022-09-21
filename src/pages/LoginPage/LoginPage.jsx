import { useDispatch, useSelector } from 'react-redux';

import { getAuthError } from './../../redux/auth/auth-selectors';
import { login } from 'redux/auth/auth-operations';
import LoginForm from 'components/LoginForm/LoginForm';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

import { Section, PageTitle } from './LoginPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <Section>
      <PageTitle>Login Page</PageTitle>
      <LoginForm onSubmit={onLogin} />
      {status && <ErrorMessage message={message} />}
    </Section>
  );
};

export default LoginPage;
