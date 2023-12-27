import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from 'src/common/hooks/use-auth';
import { useMessage } from 'src/common/hooks/use-message';
import { UserLoginData } from 'src/common/types/user-login-data';
import { Title } from 'src/components/title';
import { AuthDal } from 'src/data-access-logic/auth/auth.dal';
import styles from 'src/pages/auth/login/login.module.scss';
import { setUser } from 'src/store/slices/user';

const Login = () => {
  const user = useUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useMessage();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const handleSubmit = async (userAuthData: UserLoginData) => {
    const currentUser = await AuthDal.login(userAuthData, message);
    dispatch(setUser(currentUser));
  };

  return (
    <div>
      <Title>Login</Title>

      <Form onFinish={handleSubmit} layout="vertical">
        <Form.Item<UserLoginData>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input className={styles.input} />
        </Form.Item>

        <Form.Item<UserLoginData>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className={styles.input} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div>
        Or <Link to="/registration">create an account</Link>
      </div>
    </div>
  );
};

export default Login;
