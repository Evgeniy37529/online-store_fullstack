import React from 'react';
import { useLocation } from 'react-router-dom';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';

export const Auth = () => {
  const location = useLocation();
  //console.log(location);

  return <>{location.pathname === '/signup' ? <SignUp /> : <SignIn />}</>;
};
