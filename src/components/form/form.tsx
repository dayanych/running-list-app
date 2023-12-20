import React, { useState } from 'react';
import styles from './form.module.scss';

interface FormProps {
  onFinishChange: () => void;
}

const Form = ({ onFinishChange }: FormProps) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setUserData({
      ...userData,
      password,
    });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setUserData({
      ...userData,
      password,
    });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onFinishChange();
  };

  return (
    <div>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleEmailChange}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={userData.password}
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
