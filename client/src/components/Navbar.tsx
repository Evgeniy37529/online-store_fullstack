import React from 'react';
import { Button, Col, Container, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hooksStore';
import { unLogin } from '../store/reducers/userSlice';

export const NavPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const exit = () => {
    dispatch(unLogin());
    navigate('/');
  };

  return (
    <>
      <Navbar
        variant="light"
        style={{ backgroundColor: '#fff' }}
        expand={'md'}
        className="container-fluid navshadow"
      >
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
                <Link to="/">Contacts</Link>
              </Nav>
              {isAuth ? (
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Button variant="outline-primary" onClick={() => navigate('/admin')}>
                    Админ панель
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="ms-md-2 me-md-2"
                    onClick={() => navigate('/basket')}
                  >
                    Корзина
                  </Button>
                  <Button variant="outline-danger" onClick={exit}>
                    Выйти
                  </Button>
                </Nav>
              ) : (
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Button variant="outline-primary" onClick={() => navigate('/signin')}>
                    Войти
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="ms-md-2 me-md-2"
                    onClick={() => navigate('/signup')}
                  >
                    Регистрация
                  </Button>
                </Nav>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
