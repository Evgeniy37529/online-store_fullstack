import React, { useCallback, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useTypesDevice } from '../hooks/useTypesDevice';
import { useBrand } from '../hooks/useBrand';
import { useDevices } from '../hooks/useDevices';
import { FormSelectDevice } from '../pages/products/components/FormSelectDevice';
import { kindOfData } from '../pages/products/components/AsideFilerDevices';

export const DeviceModal: React.FC<{ show: boolean; onHide: () => void }> = React.memo(
  ({ show, onHide }) => {
    const { createDevice } = useDevices();
    const { types, selectedType } = useTypesDevice();
    const { brands, selectedBrand } = useBrand();
    const [info, setInfo] = useState<{ title: string; description: string; idInfo: number }[]>([]);
    const [nameDevice, setNameDevice] = useState('');
    const [priceDevice, setPriceDevice] = useState(0);
    const [fileDevice, setFileDevice] = useState<any>(null);

    const handleChangeNameDevice = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
      setNameDevice(e.target.value);
    }, []);

    const handleChangePriceDevice = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
      setPriceDevice(+e.target.value);
    }, []);

    const handleChangeFileDevice = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
      return e.target?.files?.length && setFileDevice(e.target.files[0]);
    }, []);

    const addInfo = () =>
      setInfo((prev) => [...prev, { title: '', description: '', idInfo: Date.now() }]);

    const changeInfo = (key: string, value: string, idInfo: number) => {
      return setInfo(
        info.map((item) => (item.idInfo === idInfo ? { ...item, [key]: value } : item))
      );
    };

    const deleteInfo = (idInfo: number) => {
      setInfo((prev) => prev.filter((item) => item.idInfo !== idInfo));
    };

    const handleSubmit = () => {
      const formData: any = new FormData();
      formData.append('name', nameDevice);
      formData.append('price', `${priceDevice}`);
      formData.append('img', fileDevice);
      formData.append('typeId', `${selectedType!.id}`);
      formData.append('brandId', `${selectedBrand!.id}`);
      formData.append('info', JSON.stringify(info));
      createDevice(formData).then(() => onHide());
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
          <Modal.Title id="contained-modal-title-vcenter">Добавьте новое устройство</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <FormSelectDevice name={kindOfData.type} options={types} />
          <FormSelectDevice name={kindOfData.brand} options={brands} />
          <Form.Control
            className="mt-2"
            type="text"
            placeholder="Введите название устройства"
            value={nameDevice}
            onChange={handleChangeNameDevice}
          />
          <Form.Control
            className="mt-2"
            type="text"
            placeholder="Введите значение стоимости"
            value={priceDevice}
            onChange={handleChangePriceDevice}
          />
          <br />
          <Form.Control type="file" onChange={handleChangeFileDevice} />
          <Button className="mt-2 mb-2" onClick={() => addInfo()}>
            Добавить свойство
          </Button>

          {info?.map(({ title, description, idInfo }) => {
            return (
              <Form.Group key={idInfo} className="d-flex mb-3 mt-2">
                <Form.Control
                  className="me-2"
                  type="text"
                  placeholder="Введите свойство"
                  value={title}
                  onChange={(e) => changeInfo('title', e.target.value, idInfo)}
                />
                <Form.Control
                  type="text"
                  placeholder="Введите значение"
                  value={description}
                  onChange={(e) => changeInfo('description', e.target.value, idInfo)}
                />
                <Button onClick={() => deleteInfo(idInfo)} className="ms-2" variant="danger">
                  Удалить
                </Button>
              </Form.Group>
            );
          })}
          <Button variant="success" onClick={handleSubmit}>
            Отправить
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
);
