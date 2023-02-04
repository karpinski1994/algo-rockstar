import React from "react";
import Form from 'react-bootstrap/Form';


export default function ({ toggle, select }) {
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Check this switch"
        {...toggle}
      />
      <Form.Select aria-label="Default select example" {...select}
      >
        {select.options}
      </Form.Select>
    </Form>
  );
}
