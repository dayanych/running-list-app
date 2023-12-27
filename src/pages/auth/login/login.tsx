import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from 'src/common/hooks/use-auth';
import { useMessage } from 'src/common/hooks/use-message';
import { UserLoginData } from 'src/common/types/user-login-data';
import { AuthDal } from 'src/data-access-logic/auth/auth.dal';
import styles from 'src/pages/auth/login/login.module.scss';
import { setUser } from 'src/store/slices/user';

const PASSWORD = 'password';
const EMAIL = 'email';

const Login = () => {
  const user = useUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useMessage();
  const [userAuthData, setUserAuthData] = useState<UserLoginData>({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setUserAuthData((prevUserAuthData) => ({
        ...prevUserAuthData,
        [field]: value,
      }));
    };

  const handlePasswordChange = handleInputChange(PASSWORD);
  const handleEmailChange = handleInputChange(EMAIL);

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const currentUser = await AuthDal.login(userAuthData, message);
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
