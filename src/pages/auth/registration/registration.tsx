import React from 'react';
import { Link } from 'react-router-dom';
import Form from '@/components/form';

const Registration = () => {
  return (
    <div>
      <h1>Registration</h1>
      <Form onFinishChange={() => {}} />
      <div>
        Or <Link to="/login">login</Link>
      </div>
    </div>
  );
};

export default Registration;
