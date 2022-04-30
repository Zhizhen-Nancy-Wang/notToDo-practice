import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const initialState = {
  task: "",
  hr: "",
};

export const InputForm = ({ addToTaskList }) => {
  const [newInfo, setNewInfo] = useState(initialState);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    addToTaskList(newInfo);
    // console.log(event);
  };

  const handleOnChange = (event) => {
    // console.log(event.target.value);
    const value = event.target.value;
    const name = event.target.name;
    // console.log(newInfo);

    // const { name, value } = event.target;
    // console.log(event, name, value);
    setNewInfo({ ...newInfo, [name]: value });
  };
  console.log(newInfo);

  return (
    <div className="mt-5">
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-3">
          <Col md={7}>
            <Form.Control
              name="task"
              placeholder="Task..."
              onChange={handleOnChange}
            />
          </Col>

          <Col md={3}>
            <Form.Control
              name="hr"
              placeholder="hours"
              type="number"
              onChange={handleOnChange}
            />
          </Col>

          <Col md={2}>
            <Button variant="outline-dark" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
