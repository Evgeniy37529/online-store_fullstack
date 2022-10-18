import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/esm/Form';
import { AuthModal } from '../components/AuthModal';
import { useNavigate } from 'react-router-dom';
import { useErrorAuth } from '../hooks/useErrorAuth';
import { useIsAuth } from '../hooks/useIsAuth';
import { useUser } from '../hooks/useUser';

export const SignIn: React.FC = () => {
  const { error } = useErrorAuth();

  const navigate = useNavigate();
  const { isAuth } = useIsAuth();
  const { entryUser } = useUser();
  const [dataUser, setDataUser] = useState({ email: '', password: '' });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!error) {
      entryUser(dataUser);
    }
  };

  const onChangedataUser = (e: React.FocusEvent<HTMLInputElement>) => {
    const type = e.target.type;
    const value = e.target.value;
    setDataUser((prev) => ({ ...prev, [type]: value }));
  };

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth]);

  useEffect(() => {
    error && setShowModal(true);
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
              <Form.Control type="email" placeholder="Enter email" onBlur={onChangedataUser} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onBlur={onChangedataUser} />
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
