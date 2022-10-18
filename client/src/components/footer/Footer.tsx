import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer mt-4 d-flex align-items-center">
      <Container className="">
        <Row className="d-flex flex-column flex-md-row align-items-center justify-content-center">
          <Col className="text-center">
            <Link to={''}>Online shop</Link>
          </Col>
          <Col className="text-center">
            <Link to={''}>Контакты</Link>
          </Col>
          <Col className="text-center">
            <Link to={''}>GitHub</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
