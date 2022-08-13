import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getBrands, getDevices } from '../store/actionCreators/actionCreator';
import { useAppDispatch, useAppSelector } from '../store/hooksStore';
import { AsideFilerDevices } from '../components/AsideFilerDevices';
import { SelectDevicePanel } from './SelectDevicePanel';
import { ProductList } from '../components/ProductList';

export const Products: React.FC = () => {
  //   const { devices } = useAppSelector((state) => state.devices);
  //   const dispatch = useAppDispatch();

  //   useEffect(() => {
  //     dispatch(getBrands());
  //     dispatch(getDevices({}));
  //   }, []);

  //   useEffect(() => console.log(devices), [devices]);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={3}>
          <AsideFilerDevices />
        </Col>
        <Col md={9}>
          <SelectDevicePanel />
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};
