import React, { useEffect } from 'react';
import { Swiper } from '../components/swiper/Swiper';
import { ProductList } from '../components/ProductList';
import { Container, Row } from 'react-bootstrap';
import { useBasket } from '../hooks/useBasket';
import { useUser } from '../hooks/useUser';

export const Main: React.FC = React.memo(() => {
  const { idUser } = useUser();
  const { setBasket, writeIdBasket } = useBasket();

  useEffect(() => {
    idUser && setBasket(idUser).then(() => writeIdBasket(idUser));
  }, []);
  console.log(idUser);

  return (
    <Row className="container-t">
      <Swiper />
      <Container>
        <ProductList />
      </Container>
    </Row>
  );
});
