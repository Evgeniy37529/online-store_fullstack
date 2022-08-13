import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooksStore';
import { getDevices } from '../store/actionCreators/actionCreator';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { typesDevice } from '../typesApp/device';

export const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { devices } = useAppSelector((status) => status.devices);

  useEffect(() => {
    dispatch(getDevices({}));
  }, []);

  useEffect(() => console.log(devices), [devices]);

  return (
    <Row>
      {devices.map(({ id, name, price, rating, img }: typesDevice) => {
        return (
          <Col key={id} md={6} lg={4} className="mt-2">
            <Link to="#">
              <Card>
                <Card.Img
                  src={`http://localhost:5000/${img}`}
                  style={{ height: '300px', width: '100%', objectFit: 'contain' }}
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <span>{name}</span>
                    <span>$ {price}</span>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
};
