import React from 'react';
import { Link } from 'react-router-dom';
import Form from '@/components/form';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Form onFinishChange={() => {}} />
      <div>
        Or <Link to="/registration">create an account</Link>
      </div>
    </div>
  );
};

export default Login;
