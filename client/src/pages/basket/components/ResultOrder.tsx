import { ListGroup, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
interface IpropsResultOrder {
  total: number;
  totalCount: number;
}

export const ResultOrder: React.FC<IpropsResultOrder> = ({ total, totalCount }) => {
  const navigate = useNavigate();
  return (
    <Card className="p-2 pt-5 basket__result">
      <Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="fs-5 fw-bold basket__total__count">
            Количество - ({totalCount})
          </ListGroup.Item>
          <ListGroup.Item className="fw-bold basket__total__count">
            <span>Итоговая цена:</span>
            <span>{total} $</span>
          </ListGroup.Item>
          <ListGroup.Item className="basket__total__btn">
            <Button className="me-2" onClick={() => navigate('/order')}>
              Перейти к заказу
            </Button>
            <Button onClick={() => navigate('/products')}>Продолжить покупки</Button>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
