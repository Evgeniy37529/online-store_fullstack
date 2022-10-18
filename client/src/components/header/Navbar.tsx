import React, { useEffect } from 'react';
import { Badge, Button, Container, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useBasket } from '../../hooks/useBasket';
import { useIsAuth } from '../../hooks/useIsAuth';
import { useUser } from '../../hooks/useUser';
import './header.scss';

export const NavPanel: React.FC = React.memo(() => {
  const { logOutUser, idUser } = useUser();
  const { quantityInBasket, setBasket, selectedItem } = useBasket();
  const { isAuth } = useIsAuth();
  const navigate = useNavigate();
  const exit = () => {
    logOutUser();
    navigate('/');
  };

  useEffect(() => {
    idUser && setBasket(idUser);
  }, [selectedItem]);
  return (
    <header className="header">
      <Navbar variant="light" expand={'md'} className="container-fluid navshadow header__nav">
        <Container>
          <Link to="/">
            <Navbar.Brand style={{ color: '#7b8be6' }}>Online Shop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>Online Shop</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="align-items-center me-6">
                <Link className="flex-grow-1 pe-3" to="/products">
                  Product
                </Link>
              </Nav>
              {isAuth ? (
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Button
                    className="fw-bold"
                    variant="outline-primary"
                    onClick={() => navigate('/admin')}
                  >
                    Админ панель
                  </Button>
                  <Link className="basket ms-md-2 me-md-2" to={`/basket/${idUser}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="#26198d"
                      className="bi bi-cart-plus-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                    </svg>
                    <Badge className="basket__badge" bg="danger">
                      {quantityInBasket || 0}
                    </Badge>
                  </Link>
                  <Button className="fw-bold" variant="outline-danger" onClick={exit}>
                    Выйти
                  </Button>
                </Nav>
              ) : (
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Button variant="outline-primary" onClick={() => navigate('/signin')}>
                    Войти
                  </Button>
                  <Button
                    variant="outline-secondary fw-bold"
                    className="ms-md-2 me-md-2"
                    onClick={() => navigate('/signup')}
                    style={{ backgroundColor: 'rgb(224, 58, 60)' }}
                  >
                    Регистрация
                  </Button>
                </Nav>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
});
