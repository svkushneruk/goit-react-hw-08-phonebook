import useForm from 'shared/hooks/useForm';

import { initialState } from '../RegisterForm/initialState';

import { Group, Label, Input, Button } from './register-form.styled';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <Group>
        <Label htmlFor="">User name:</Label>
        <Input
          value={name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Enter User name"
          required
        />
      </Group>
      <Group>
        <Label htmlFor="">User email:</Label>
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
        <Button type="submit">Sign up</Button>
      </Group>
    </form>
  );
};

export default RegisterForm;
