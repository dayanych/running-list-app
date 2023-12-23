import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div>
      <h1>Registration</h1>
      <div>
        Or <Link to="/login">login</Link>
      </div>
    </div>
  );
};

export default Registration;
