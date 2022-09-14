import React from 'react';
import '../style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import EMP from '../Components/empData.json'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
export default function LeaveApproval() {
  return (
    <div>
      <div>
        <h1 className="form-center">EMPLOYEE LEAVE APPROVAL</h1>
        <div className="px-5 pt-2">
          <Card body>
          <Table
            responsive
            hover
            variant="dark"
            className="py-5 pe-5 ps-5 "
            bordered
          >
       

            <tbody>
            <tr>
              <th>#</th>
              <th>EMPLOYEE ID</th>
              <th>EMPLOYEE NAME</th>
              <th>EMPLOYEE POSITION</th>
              <th>LEAVE TYPE</th>
              <th>FROM DATE</th>
              <th>TO DATE</th>
              <th>REASON</th>
              <th>APPROVAL STATUS</th>
            </tr>
              {EMP.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.id}</td>
                  <td>
                    {item.first_name} {item.last_name}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>

                  <td>
                    {' '}
                    <Form.Check
                      inline
                      label="APPROVED"
                      name="group1"
                      type="radio"
                      id="approved"
                    />
                    <Form.Check
                      inline
                      label="NOT APPROVED"
                      name="group1"
                      type="radio"
                      id="not_approved"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          </Card>
        </div>
      </div>
      <div className="py-1 pe-5 ps-5 form-center">
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
}
