import { useLocation } from 'react-router-dom';
import { SignUp } from './signUp/SignUp';
import { SignIn } from './SignIn';

export const Auth = () => {
  const location = useLocation();
  return <>{location.pathname === '/signup' ? <SignUp /> : <SignIn />}</>;
};
