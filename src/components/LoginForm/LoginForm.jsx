import useForm from 'shared/hooks/useForm';

import { Group, Label, Input, Button } from './Login-form.styled';

import { initialState } from '../LoginForm/initialState';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <Group>
        <Label htmlFor="">User Email:</Label>
        <Input
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Enter User email"
        />
      </Group>
      <Group>
        <Label htmlFor="">User password:</Label>
        <Input
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Enter User password"
        />
      </Group>
      <Group>
        <Button type="submit">LogIn</Button>
      </Group>
    </form>
  );
};

export default LoginForm;
