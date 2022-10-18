import React, { useEffect, useMemo, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './basket.scss';
import { useBasket } from '../../hooks/useBasket';
import { useUser } from '../../hooks/useUser';
import { BasketItem } from './components/BasketItem';
import { ResultOrder } from './components/ResultOrder';

export const Basket: React.FC = () => {
  const { userBasket, quantityInBasket, setBasket, writeIdBasket } = useBasket();
  const { idUser } = useUser();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      userBasket?.reduce((acc, item) => {
        return acc + item.device.price;
      }, 0)
    );
  }, [setTotal, userBasket]);

  const changeTotal = (price: number) => {
    setTotal((prev) => prev + price);
  };

  const basketItemComponents = useMemo(() => {
    return userBasket?.map((item) => {
      return (
        <BasketItem
          key={item.id}
          name={item.device.name}
          img={item.device.img}
          price={item.device.price}
          changeTotal={changeTotal}
          id={item.id}
        />
      );
    });
  }, [userBasket]);

  useEffect(() => {
    idUser && setBasket(idUser).then(() => writeIdBasket(idUser));
  }, [idUser]);

  return (
    <Container className="container-t basket mt-4">
      <Row className="">
        <Col className="p-3 basket__list" lg={8}>
          {basketItemComponents}
        </Col>
        <Col className="p-3 basket__total" lg={4}>
          <ResultOrder total={total} totalCount={quantityInBasket!} />
        </Col>
      </Row>
    </Container>
  );
};
