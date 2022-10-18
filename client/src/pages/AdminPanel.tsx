import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { BrandModal } from '../components/BrandModal';
import { DeviceModal } from '../components/DeviceModal';
import { TypeModal } from '../components/TypeModal';

export const AdminPanel: React.FC = React.memo(() => {
  const [showTypeModal, setshowTypeModal] = useState(false);
  const [showBrandModal, setshowBrandModal] = useState(false);
  const [showDeviceModal, setshowDeviceModal] = useState(false);

  const handleClick = (nameValue: string) => {
    switch (nameValue) {
      case 'type':
        setshowTypeModal(true);
        break;
      case 'brand':
        setshowBrandModal(true);
        break;
      case 'device':
        setshowDeviceModal(true);
        break;
      default:
        break;
    }
  };

  return (
    <Container className="d-flex flex-column mt-4 container-t">
      <Button className="mt-2 p-2" variant={'outline-dark'} onClick={() => handleClick('type')}>
        Добавить тип
      </Button>
      <Button className="mt-2 p-2" variant={'outline-dark'} onClick={() => handleClick('brand')}>
        Добавить брэнд
      </Button>
      <Button className="mt-2 p-2" variant={'outline-dark'} onClick={() => handleClick('device')}>
        Добавить устройство
      </Button>

      <TypeModal show={showTypeModal} onHide={() => setshowTypeModal(false)} />
      <BrandModal show={showBrandModal} onHide={() => setshowBrandModal(false)} />
      <DeviceModal show={showDeviceModal} onHide={() => setshowDeviceModal(false)} />
    </Container>
  );
});
