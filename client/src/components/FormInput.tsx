import React from 'react';
import { Form } from 'react-bootstrap';

export const FormInput: React.FC<{
  typeInput: string;
  label: string;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error: string;
}> = ({ typeInput, label, handleBlur, error }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control type={typeInput} placeholder={`Enter ${label}`} onBlur={handleBlur} required />
      <Form.Text style={{ color: 'red' }}>{error}</Form.Text>
    </Form.Group>
  );
};
