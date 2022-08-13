import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/esm/Form';
import { postUser } from '../store/actionCreators/actionCreator';
import { useAppDispatch, useAppSelector } from '../store/hooksStore';
import { AuthModal } from '../components/AuthModal';
import { setError } from '../store/reducers/userSlice';
import { useNavigate } from 'react-router-dom';

export const SignUp: React.FC = () => {
  const [emailEntered, setEmailEntered] = useState<string>('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const { id, email, role, error, isAuth } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const isValidValue = (typeInput: string, value: string) => {
    switch (typeInput) {
      case 'email':
        const isValidEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (isValidEmail) {
          setEmailEntered(value);
          setErrors((prev) => {
            return {
              ...prev,
              [typeInput]: '',
            };
          });
        } else {
          setErrors((prev) => {
            return {
              ...prev,
              [typeInput]: `${typeInput} invalid`,
            };
          });
        }
        break;
      case 'password':
        const isValidPassword = value.length >= 8;
        if (isValidPassword) {
          setPassword(value);
          setErrors((prev) => {
            return {
              ...prev,
              [typeInput]: '',
            };
          });
        } else {
          setErrors((prev) => {
            return {
              ...prev,
              [typeInput]: `the ${typeInput} is too short`,
            };
          });
        }
        break;
      default:
        break;
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const name = e.target.type;
    const value = e.target.value;
    isValidValue(name, value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !errors.email &&
      !errors.password &&
      !error &&
      emailEntered &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      dispatch(postUser({ email: emailEntered, password }));
    }
    if (password !== confirmPassword) {
      dispatch(setError('password confirmation does not match'));
    }
    if (error) {
      setShowModal(true);
    }
  };

  useEffect(() => console.log(id, email, role, error), [id, email, role, error]);
  useEffect(() => {
    error && setShowModal(true);
  }, [error]);

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth]);

  return (
    <Container>
      <Row
        style={{ height: 'calc(100vh - 55px)' }}
        className="d-flex justify-content-center align-items-center"
      >
        <AuthModal text={error} show={showModal} onHide={() => setShowModal(false)} />
        <Card className="p-4" style={{ width: '500px' }}>
          <Card.Title>Registration</Card.Title>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onBlur={handleBlur} />
              <Form.Text className="" style={{ color: 'red' }}>
                {errors.email}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onBlur={handleBlur} />
              <Form.Text className="" style={{ color: 'red' }}>
                {errors.password}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repeat password"
                onBlur={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Зарегистрироваться
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};
