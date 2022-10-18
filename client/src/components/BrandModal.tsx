import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useBrand } from '../hooks/useBrand';

export const BrandModal: React.FC<{ show: boolean; onHide: () => void }> = React.memo(
  ({ show, onHide }) => {
    const [nameBrand, setNameBrand] = useState('');
    const { postBrand } = useBrand();
    const handleChangeBrand = (e: React.FocusEvent<HTMLInputElement>) => {
      setNameBrand(e.target.value);
    };
    const onSubmitBrand = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      postBrand(nameBrand)
        .then((data) => setNameBrand(''))
        .then(() => onHide());
    };
    return (
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Введите новый брэнд</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmitBrand}>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={handleChangeBrand}
                type="text"
                placeholder="Введите новый брэнд"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Добавить
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
);
