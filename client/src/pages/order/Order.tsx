import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useBasket } from '../../hooks/useBasket';
import { OrderModal } from '../../components/OrderModal';
import React from 'react';

export const Order = React.memo(() => {
  const { userBasket } = useBasket();
  const [showOrderModal, setshowOrderModal] = useState(false);
  useEffect(() => console.log(userBasket), []);
  const navigate = useNavigate();
  return (
    <Container className=" mt-4 container-t">
      <Row className="justify-content-md-center mt-4">
        <Col md={7} className="d-flex flex-column justify-content-center align-items-center">
          <Card style={{ width: '100%' }}>
            <Card.Header>
              <Card.Title>Подтверждение заказа</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Наименование</th>
                    <th>Цена</th>
                  </tr>
                </thead>
                <tbody>
                  {userBasket.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.device.name}</td>
                        <td>{item.device.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Col className="d-flex justify-content-between">
                <Button variant="primary" onClick={() => setshowOrderModal(true)}>
                  Заказать
                </Button>
                <Button variant="primary" onClick={() => navigate(-1)}>
                  Корзина
                </Button>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <OrderModal
        show={showOrderModal}
        onHide={() =>
          setTimeout(() => {
            setshowOrderModal(false);
          }, 1500)
        }
      />
    </Container>
  );
});
