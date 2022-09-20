import useForm from 'shared/hooks/useForm';

import styles from './register-form.module.css';

import { initialState } from '../RegisterForm/initialState';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          Имя пользователя:
        </label>
        <input
          value={name}
          name="name"
          onChange={handleChange}
          className={styles.input}
          type="text"
          placeholder="Введите имя пользователя"
          required
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          Email пользователя:
        </label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          className={styles.input}
          type="email"
          placeholder="Введите email пользователя"
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          Пароль пользователя:
        </label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          className={styles.input}
          type="password"
          placeholder="Введите пароль пользователя"
        />
      </div>
      <div className={styles.group}>
        <button type="submit">Регистрация</button>
      </div>
    </form>
  );
};

export default RegisterForm;
