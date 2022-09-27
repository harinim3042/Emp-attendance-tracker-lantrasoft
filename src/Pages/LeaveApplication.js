import React from 'react';
import '../style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SideBarNavigation from '../Components/Navbar.js';

export default function LeaveApplication() {
  
  return (
    <div>
      <SideBarNavigation />
      <div className=" container-bg pb-5 pt-2 form-center mx-14 my-13 ">
        <div className=" pt-8 pe-5 ps-5 mx-12">
          <Form responsive>
            <h1 className="mb-4 form-center "> LEAVE APPLICATION </h1>
            <Row className="mb-3 form-center ">
              <Form.Group as={Col} controlId="EmpId">
                <Form.Label>
                  <b>EMPLOYEE ID</b>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Employee ID" />
              </Form.Group>

              <Form.Group as={Col} controlId="EmpName">
                <Form.Label>
                  <b>EMPLOYEE NAME</b>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Employee Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="EmpPosition">
                <Form.Label>
                  <b>EMPLOYEE POSITION</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Employee Position"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="Leave-type">
                <Form.Label className="mb-2">
                  <b>LEAVE TYPE</b>
                </Form.Label>

                <Form.Select
                  defaultValue="HALF DAY"
                  className="px-4 py-1 "
                  style={{ width: '19vw' }}
                >
                  <option>HALF DAY</option>
                  <option>FULL DAY</option>
                  <option>CONTINOUS DAY</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="fromDate">
                <Form.Label>
                  <b>FROM DATE</b>
                </Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group as={Col} controlId="toDate">
                <Form.Label>
                  <b>TO DATE</b>
                </Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="Reason">
                <Form.Label>
                  <b>REASON</b>
                </Form.Label>

                <Form.Control
                  as="textarea"
                  placeholder="Specify Reason for leave applied"
                  style={({ height: '60em' }, { width: '60em' })}
                />
              </Form.Group>
            </Row>

            <div className="form-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
