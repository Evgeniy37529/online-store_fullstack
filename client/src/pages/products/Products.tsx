import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AsideFilerDevices } from './components/AsideFilerDevices';
import { ProductList } from '../../components/ProductList';
import './products.scss';
import { useTypesDevice } from '../../hooks/useTypesDevice';
import { useBrand } from '../../hooks/useBrand';

export const Products: React.FC = React.memo(() => {
  const { selectType, getTypesDevices } = useTypesDevice();
  const { selectBrand, getBrandsAll } = useBrand();

  useEffect(() => {
    getTypesDevices().then(() => getBrandsAll());
    return () => {
      selectType(null);
      selectBrand(null);
    };
  }, []);

  return (
    <Container className="mt-5 container-t">
      <Row>
        <Col md={3} className="aside">
          <h3 className="fs-2 product__title">Фильтр поиска</h3>
          <AsideFilerDevices />
        </Col>
        <Col md={9}>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
});
