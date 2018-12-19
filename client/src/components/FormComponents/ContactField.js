import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const ContactField = ({
  input,
  label,
  type,
  id,
  placeholder,
  rows,
  meta: { touched, error }
}) => (
  <FormGroup>
    <Label for={input.name} className="sr-only">
      {label}
    </Label>
    <Input
      {...input}
      type={type}
      id={id}
      placeholder={placeholder}
      rows={rows}
      required
    />
    {touched &&
      (error && (
        <div className="text-danger text-left mt-1 small">{error}</div>
      ))}
  </FormGroup>
);

export default ContactField;
