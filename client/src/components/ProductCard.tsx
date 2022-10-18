import { Button, Card, Image } from 'react-bootstrap';
import { typesDevice } from '../typesApp/device';
import star from '../assets/svg/star.svg';
import { useParams } from 'react-router-dom';
import { useBasket } from '../hooks/useBasket';
import { useEffect, useState } from 'react';
import React from 'react';
import { useUser } from '../hooks/useUser';

export const ProductCard = React.memo(({ device }: { device: typesDevice }) => {
  const [isToBasket, setIsToBasket] = useState(false);
  const { idUser } = useUser();
  const { id } = useParams();
  const {
    deleteItemFromBasket,
    idBasket,
    selectedItem,
    addToBasket,
    writeIdBasket,
    setBasket,
    hasItemInBasket,
    resetSelectedBasketItem,
  } = useBasket();

  const addDeviceToBasket = (deviceId: number, basketId: number) => {
    addToBasket({ deviceId, basketId }).then(() => setIsToBasket(true));
  };
  useEffect(() => {
    idUser && setBasket(idUser).then(() => writeIdBasket(idUser));
  }, []);
  useEffect(() => {
    id && console.log('deviceID:', device.id, 'basketID:', idBasket);
  }, []);
  const removeItem = () => {
    deleteItemFromBasket(selectedItem!.id)
      .then(() => setIsToBasket(false))
      .then(() => resetSelectedBasketItem());
  };

  useEffect(() => hasItemInBasket({ basketId: idBasket!, deviceId: +id! }), []);
  useEffect(() => hasItemInBasket({ basketId: idBasket!, deviceId: +id! }), [isToBasket]);

  return (
    <Card className="text-center p-3 product__card">
      <Card.Img
        className="product__img"
        src={device?.img && `http://localhost:5000/${device.img}`}
      />

      <Card.Title
        className={`d-flex flex-column align-items-center justify-content-between fs-6 mt-2 ${
          id && 'fs-4'
        }`}
      >
        <span>{device?.name}</span>
        <span className="mt-2">$ {device?.price}</span>
      </Card.Title>

      <div className="d-flex justify-content-center align-items-center">
        {device?.rating}
        <Image width={20} src={star} className="ms-1" />
      </div>
      {id && (
        <Card.Title>
          {!selectedItem ? (
            <Button
              variant="danger"
              onClick={() => {
                addDeviceToBasket(device.id, idBasket!);
              }}
            >
              Добавить в корзину
            </Button>
          ) : (
            <Button
              variant="danger"
              onClick={() => {
                removeItem();
              }}
            >
              Удалить из корзины
            </Button>
          )}
        </Card.Title>
      )}
    </Card>
  );
});
