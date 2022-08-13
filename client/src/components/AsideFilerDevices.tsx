import React, { useEffect } from 'react';
import { Card, Col, Container, ListGroup, Tab } from 'react-bootstrap';
import { getTypes, getBrands, getDevices } from '../store/actionCreators/actionCreator';
import { useAppDispatch, useAppSelector } from '../store/hooksStore';
import { setSelectedBrand } from '../store/reducers/brandsSlice';

export const AsideFilerDevices: React.FC = () => {
  const typesDevice = useAppSelector((state) => state.types.types);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <ListGroup>
        {typesDevice?.map(({ id, name }) => (
          <ListGroup.Item key={id} action>
            {name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Tab.Container>
  );
};
