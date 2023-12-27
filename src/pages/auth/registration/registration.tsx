import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from 'src/common/hooks/use-auth';
import { useMessage } from 'src/common/hooks/use-message';
import { UserRegistrationData } from 'src/common/types/user-registration-data';
import { AuthDal } from 'src/data-access-logic/auth/auth.dal';
import styles from 'src/pages/auth/login/login.module.scss';
import { setUser } from 'src/store/slices/user';

const PASSWORD = 'password';
const USERNAME = 'name';
const EMAIL = 'email';

const Registration = () => {
  const user = useUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useMessage();
  const [userAuthData, setUserAuthData] = useState<UserRegistrationData>({
    email: '',
    password: '',
    name: '',
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
  const handleNameChange = handleInputChange(USERNAME);

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const currentUser = await AuthDal.register(userAuthData, message);
    dispatch(setUser(currentUser));
  };

  return (
    <div>
      <h1>Registration</h1>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          value={userAuthData.name}
          onChange={handleNameChange}
        />
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
        Or <Link to="/login">login</Link>
      </div>
    </div>
  );
};

export default Registration;
