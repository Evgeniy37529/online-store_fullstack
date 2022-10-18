import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FormCard } from './FormCard/FromCard';

export const SignUp: React.FC = () => {
  return (
    <Container>
      <Row
        style={{ height: 'calc(100vh - 55px)' }}
        className="d-flex justify-content-center align-items-center"
      >
        <FormCard />
      </Row>
    </Container>
  );
};
