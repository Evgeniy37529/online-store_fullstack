import React from 'react';
import { Card } from 'react-bootstrap';
import { useTypesDevice } from '../../../hooks/useTypesDevice';
import { useBrand } from '../../../hooks/useBrand';
import { FormSelectDevice } from './FormSelectDevice';

export enum kindOfData {
  type = 'type',
  brand = 'brand',
}

export const AsideFilerDevices: React.FC = React.memo(() => {
  const { types } = useTypesDevice();
  const { brands } = useBrand();

  return (
    <Card className="p-3 mt-4 aside__filter">
      <FormSelectDevice name={kindOfData.type} options={types} />
      <FormSelectDevice name={kindOfData.brand} options={brands} />
    </Card>
  );
});
