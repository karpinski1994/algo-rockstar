import React from "react";
import Form from 'react-bootstrap/Form';

interface Select {
  value: string; onChange: (e: React.ChangeEvent) => void; options: JSX.Element[]; 
}

interface Props {
  toggle: Object;
  select: Select;
}


export default function TopBar ({ toggle, select }: Props) {
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
TopBar.displayName = 'TopBar';