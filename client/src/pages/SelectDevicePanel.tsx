import React, { useEffect } from 'react';
import { Card, Row } from 'react-bootstrap';
import { getBrands } from '../store/actionCreators/actionCreator';
import { useAppDispatch, useAppSelector } from '../store/hooksStore';
import { setSelectedBrand } from '../store/reducers/brandsSlice';

export const SelectDevicePanel: React.FC = () => {
  const { brands, selectedBrand } = useAppSelector((state) => state.brands);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  return (
    <Row className="d-flex ms-2">
      {brands?.map(({ id, name }) => (
        <Card
          bg={id === selectedBrand ? 'info' : 'light'}
          className="w-auto p-1 me-2"
          key={id}
          onClick={() => dispatch(setSelectedBrand({ id, name }))}
        >
          {name}
        </Card>
      ))}
    </Row>
  );
};
