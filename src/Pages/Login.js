import React from 'react';
import '../style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Login() {
  return (
    <div className="chart-align my-10">
      <div className="container-bg pt-8 py-2 pb-5">
        <Form responsive className="mx-13" onSubmit={handleLogin}>
          <h1 className="form-center"> LOGIN </h1>
          <h1 className="form-center ms-4">
            <img
              src="https://github.com/harinim3042/images/blob/main/Attendance.gif?raw=true"
              width="250px"
              height="250px"
            />
          </h1>
          <Row className="mb-3 ">
            <Form.Group as={Col}>
              <Form.Label>
                <b>EMPLOYEE EMAIL ID</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Employee EMAIL ID"
                controlId="Email"
                
              />
            </Form.Group>
          </Row>
          <Row className="mb-3  ">
            <Form.Group as={Col}>
              <Form.Label>
                <b>PASSWORD</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Employee Name"
                controlId="Password"
              />
            </Form.Group>
          </Row>
          <div className="form-center">
            <Button variant="primary" type="submit">
              LOGIN
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
