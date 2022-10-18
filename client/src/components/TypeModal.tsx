import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useTypesDevice } from '../hooks/useTypesDevice';

export const TypeModal: React.FC<{ show: boolean; onHide: () => void }> = React.memo(
  ({ show, onHide }) => {
    const { postType } = useTypesDevice();
    const [nameType, setNameType] = useState('');

    const handleChangeType = (e: React.FocusEvent<HTMLInputElement>) => {
      setNameType(e.target.value);
    };

    const onSubmitType = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      postType(nameType)
        .then(() => setNameType(''))
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
          <Modal.Title id="contained-modal-title-vcenter">Введите тип устройства</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmitType}>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={handleChangeType}
                type="text"
                placeholder="Введите новый тип устройства"
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
