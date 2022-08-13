import React from 'react';
import { Products } from './Products';
import { Swiper } from '../components/Swiper';
import { ProductList } from '../components/ProductList';
import { Container } from 'react-bootstrap';

export const Main: React.FC = () => {
  return (
    <>
      <Swiper />

      <Container fluid className="mt-0">
        <h2 className="fs-2" style={{ color: '#af0e0e', margin: '2rem 0' }}>
          Least Products
        </h2>
        <ProductList />
      </Container>
    </>
  );
};