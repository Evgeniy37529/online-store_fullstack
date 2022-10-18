import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthModal } from '../../../components/AuthModal';
import { FormInput } from '../../../components/FormInput';
import { useErrorAuth } from '../../../hooks/useErrorAuth';
import { useIsAuth } from '../../../hooks/useIsAuth';
import { useUser } from '../../../hooks/useUser';

export const FormCard: React.FC = () => {
  const [emailEntered, setEmailEntered] = useState<string>('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showModal, setShowModal] = useState(false);
  const { error, fetchError } = useErrorAuth();
  const { isAuth } = useIsAuth();
  const { createUser } = useUser();
  const navigate = useNavigate();
  const onHideModal = () => {
    setShowModal(false);
    fetchError('');
  };

  const inputError = (typeInput: string, textError: string) => {
    setErrors((prev) => ({ ...prev, [typeInput]: textError }));
  };

  const validValue = (typeInput: string, value: string) => {
    switch (typeInput) {
      case 'email':
        const isValidEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (isValidEmail) {
          inputError(typeInput, '');
          setEmailEntered(value);
        } else {
          inputError(typeInput, `${typeInput} invalid`);
        }
        break;
      case 'password':
        const isValidPassword = value.length >= 8;
        if (isValidPassword) {
          inputError(typeInput, '');
          setPassword(value);
        } else {
          inputError(typeInput, `the ${typeInput} is too short`);
        }
        break;
      default:
        break;
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const name = e.target.type;
    const value = e.target.value;
    validValue(name, value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validValue('email', emailEntered);
    validValue('password', password);
    if (emailEntered && password && password === confirmPassword) {
      createUser({ email: emailEntered, password });
    }
    if (password !== confirmPassword) {
      fetchError('password confirmation does not match');
    }
  };

  useEffect(() => {
    error && setShowModal(true);
  }, [error]);

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth]);

  return (
    <Card className="p-4" style={{ width: '500px' }}>
      <AuthModal text={error} show={showModal} onHide={() => onHideModal()} />

      <Card.Title>Registration</Card.Title>
      <Form onSubmit={handleOnSubmit}>
        <FormInput
          typeInput="email"
          label={'Email address'}
          handleBlur={handleBlur}
          error={errors.email}
        />
        <FormInput
          typeInput="password"
          label={'Password'}
          handleBlur={handleBlur}
          error={errors.password}
        />
        <FormInput
          typeInput="password"
          label={'Confirm password'}
          handleBlur={(e) => setConfirmPassword(e.target.value)}
          error={''}
        />
        <Button variant="primary" type="submit">
          Зарегистрироваться
        </Button>
      </Form>
    </Card>
  );
};
