import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useOneDevice } from '../hooks/useOneDevice';
import { ProductCard } from '../components/ProductCard';

export const Device: React.FC = () => {
  let { device } = useOneDevice();

  return (
    <Container fluid className="container-t mt-4">
      <Row className="mt-4">
        <Col md={5}>
          <ProductCard device={device} />
        </Col>
        <Col className="mt-3 mt-lg-0">
          <ListGroup>
            {device?.info.map(({ title, description }: { title: string; description: string }) => {
              return (
                <ListGroup.Item key={title}>
                  <h5 className="d-flex justify-content-between fs-6 fs-md-5 fs-lg-3">
                    <span>{title}</span>
                    <span>{description}</span>
                  </h5>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
