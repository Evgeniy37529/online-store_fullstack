import React, { useCallback, useMemo } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { typesDevice } from '../typesApp/device';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDevices } from '../hooks/useDevices';
import { useOneDevice } from '../hooks/useOneDevice';
import { ProductCard } from './ProductCard';

export const ProductList: React.FC = React.memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const { devices } = useDevices();
  const { setDevice } = useOneDevice();

  const showDevice = useCallback(
    (id: number) => {
      setDevice(id)
        .then(() =>
          navigate(`/device/${id}`, { replace: true, state: { from: location.pathname } })
        )
        .then(() => localStorage.setItem('idDevice', `${id}`));
    },
    [setDevice]
  );

  const deviceElements = useMemo(() => {
    return devices?.map((device: typesDevice) => {
      return (
        <Col key={device.id} md={6} lg={4} className="mt-3" onClick={() => showDevice(device.id)}>
          <ProductCard key={device.id} device={device} />
        </Col>
      );
    });
  }, [devices]);

  return (
    <Container className="product__list">
      <h2 className="fs-2 mt-3 mt-md-0 product__title">Список продуктов</h2>
      <Row>
        {deviceElements.length ? (
          deviceElements
        ) : (
          <h2
            className="d-flex align-items-center justify-content-center"
            style={{ height: '50vh' }}
          >
            Устройства не найдены
          </h2>
        )}
      </Row>
    </Container>
  );
});
