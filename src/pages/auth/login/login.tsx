import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserLoginData } from 'src/common/types/user-login-data';
import { AuthDal } from 'src/data-access-logic/auth/auth.dal';
import styles from 'src/pages/auth/login/login.module.scss';
import { setUser } from 'src/store/slices/user';

const Login = () => {
  const [userAuthData, setUserAuthData] = useState<UserLoginData>({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setUserAuthData({
      ...userAuthData,
      password,
    });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setUserAuthData({
      ...userAuthData,
      email,
    });
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const currentUser = await AuthDal.login(userAuthData);
    dispatch(setUser(currentUser));
  };

  return (
    <div>
      <h1>Login</h1>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={userAuthData.email}
          onChange={handleEmailChange}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={userAuthData.password}
          onChange={handlePasswordChange}
        />
        <button className={styles.button} type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div>
        Or <Link to="/registration">create an account</Link>
      </div>
    </div>
  );
};

export default Login;
