import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/esm/Form';
import { useAppDispatch, useAppSelector } from '../store/hooksStore';
import { loginUser } from '../store/actionCreators/actionCreator';
import { AuthModal } from '../components/AuthModal';
import { useNavigate } from 'react-router-dom';

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { isAuth, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!error) {
      dispatch(loginUser({ email, password }));
    }
  };

  useEffect(() => {
    isAuth && navigate('/');
  });

  useEffect(() => {
    if (error) {
      setShowModal(true);
    }
  }, [error]);

  return (
    <Container>
      <AuthModal text={error} show={showModal} onHide={() => setShowModal(false)} />

      <Row
        style={{ height: 'calc(100vh - 55px)' }}
        className="d-flex justify-content-center align-items-center"
      >
        <Card className="p-4" style={{ width: '500px' }}>
          <Card.Title>Authentication</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onBlur={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onBlur={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Войти
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};
