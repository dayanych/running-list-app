import React, { useState } from 'react';
import styles from 'src/components/form/form.module.scss';
import { AuthService } from 'src/firebase/auth/auth.service';

interface UserAuthDataInterface {
  email: string;
  password: string;
}

interface FormProps {
  onFinishChange: (userData: UserAuthDataInterface) => void;
}

const Form = ({ onFinishChange }: FormProps) => {
  const [userAuthData, setUserAuthData] = useState<UserAuthDataInterface>({
    email: '',
    password: '',
  });

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

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onFinishChange(userAuthData);
    AuthService.listenAuthStateChange();
  };

  return (
    <div>
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
    </div>
  );
};

export default Form;
