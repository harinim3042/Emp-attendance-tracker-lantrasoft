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
      <div className=" container-bg form-center pg-center mt-5 ">
        <div className=" pt-6 pe-5 ps-5 mx-12">
          <Form >
            <h1 className="mb-4 form-center "> LEAVE APPLICATION </h1>
            <Row className="mb-3 form-center " sm={3}>
              <Form.Group as={Col} controlId="EmpId" >
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

            <Row className="mb-3" sm={5}>
              <Form.Group as={Col} controlId="Leave-type" sm={3}>
                <Form.Label className="mb-2">
                  <b>LEAVE TYPE</b>
                </Form.Label>

                <Form.Select
                  defaultValue="HALF DAY"
                  className="px-4 py-1  "
                  style={{ width: '15vw' }}
                >
                  <option>HALF DAY</option>
                  <option>FULL DAY</option>
                  <option>CONTINOUS DAY</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="Leave-category" sm={3}>
                <Form.Label className="mb-2 ">
                  <b>LEAVE CATEGORY</b>
                </Form.Label>

                <Form.Select
                  defaultValue="PERSONAL LEAVE"
                  className="px-4 py-1"
                  style={{ width: '15vw' }}
                >
                  <option>PERSONAL LEAVE</option>
                  <option>SICK LEAVE</option>
                  <option>LOSS OF PAY</option>
                </Form.Select>
              </Form.Group>

           
            <Form.Group as={Col} controlId="fromDate" sm={3}>
                <Form.Label className="mb-2 ">
                  <b>FROM DATE</b>
                </Form.Label>
                <Form.Control type="date"   className="px-4 py-1"/>
              </Form.Group>

              <Form.Group as={Col} controlId="toDate" sm={3}>
                <Form.Label className="mb-2 ">
                  <b>TO DATE</b>
                </Form.Label>
                <Form.Control type="date" className="px-4 py-1 " />
              </Form.Group>
              
            </Row>
            <Row className="mb-3" sm={3}>
              <Form.Group as={Col} controlId="Reason">
                <Form.Label>
                  <b>REASON</b>
                </Form.Label>

                <Form.Control
                  as="textarea"
                  placeholder="Specify Reason for leave applied"
                  style={({ height: '15vh' }, { width: '70vw' })}
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
