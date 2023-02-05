import React from "react";
import Form from 'react-bootstrap/Form';


export default function ({ toggle, select }) {
  return (
    <Form>
      <Form.Check
        className="mb-3"
        type="switch"
        label="Show number of lines"
        {...toggle}
      />
      <Form.Select className="mb-3" aria-label="Default select example" {...select}
      >
        {select.options}
      </Form.Select>
    </Form>
  );
}
