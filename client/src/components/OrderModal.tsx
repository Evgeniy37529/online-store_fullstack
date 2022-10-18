import React from 'react';
import { Modal } from 'react-bootstrap';
export const OrderModal: React.FC<{ show: boolean; onHide: () => void }> = React.memo(
  ({ show, onHide }) => {
    onHide();
    return (
      <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Спасибо, что выбрали нас!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal>Ваш заказ принят</Modal>
        </Modal.Body>
      </Modal>
    );
  }
);
