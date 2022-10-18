import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { useBrand } from '../../../hooks/useBrand';
import { useTypesDevice } from '../../../hooks/useTypesDevice';
import { kindOfData } from './AsideFilerDevices';

interface IFormSelectDevice {
  name: kindOfData;
  options: any[];
}

export const FormSelectDevice: React.FC<IFormSelectDevice> = React.memo(({ name, options }) => {
  const { selectType } = useTypesDevice();
  const { selectBrand } = useBrand();
  const onChangeValue = (e: React.FocusEvent<HTMLSelectElement>) => {
    switch (name) {
      case kindOfData.type: {
        selectType(JSON.parse(e.target.value));
        break;
      }
      case kindOfData.brand: {
        selectBrand(JSON.parse(e.target.value));
        break;
      }
      default: {
        break;
      }
    }
  };
  return (
    <Col className="mt-3">
      <h4 className="fs-5 fw-bolder">{name === kindOfData.type ? 'Категория' : 'Бренд'}</h4>
      <Form.Select onChange={onChangeValue} className="fw-bolder">
        <option value={JSON.stringify(null)}>Все</option>
        {options.map((option) => {
          return (
            <option key={option.id} value={JSON.stringify(option)}>
              {option.name}
            </option>
          );
        })}
      </Form.Select>
    </Col>
  );
});
