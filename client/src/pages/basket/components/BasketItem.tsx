import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useBasket } from '../../../hooks/useBasket';
import { useUser } from '../../../hooks/useUser';

interface IPropsBasketItem {
  id: number;
  name: string;
  img: string;
  price: number;
  changeTotal: (price: number) => void;
}

export const BasketItem: React.FC<IPropsBasketItem> = ({ id, name, img, price, changeTotal }) => {
  const [count, setCount] = useState(1);
  const { idUser } = useUser();

  const { deleteItemFromBasket, setBasket } = useBasket();
  const plusCount = () => {
    setCount((prev) => prev + 1);
    changeTotal(price);
  };
  const onChangeCount = (e: React.FocusEvent<HTMLInputElement>) => {
    setCount(+e.target.value);
  };
  const minusCount = () => {
    setCount((prev) => (prev <= 1 ? 1 : prev - 1));
    count > 1 && changeTotal(-price);
  };

  return (
    <Card className="basket__item mt-2">
      <span
        className="basket__item__delete"
        onClick={() => {
          console.log('grkld');
          deleteItemFromBasket(id).then(() => {
            idUser && setBasket(idUser);
          });
        }}
      >
        &times;
      </span>
      <Card.Body className="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
        <div className="basket__item__img">
          <img src={`http://localhost:5000/${img}`} alt="" className="src" />
        </div>
        <div className="basket__item__title">{name}</div>
        <span className="basket__item__price flex-grow-1 text-end pe-md-3 mt-2 mb-2 mt-md-0 mb-md-0">
          {price} $
        </span>

        <div className="basket__item__count">
          <Button
            className="basket__item__btn"
            onClick={() => minusCount()}
            variant="danger"
            size="sm"
          >
            &ndash;
          </Button>
          <input type="number" onChange={onChangeCount} value={count} step="1" min="0" />
          <Button
            className="basket__item__btn"
            onClick={() => plusCount()}
            variant="danger"
            size="sm"
          >
            <span>+</span>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
