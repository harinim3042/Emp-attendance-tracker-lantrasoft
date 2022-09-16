import React, { useState } from 'react';
import '../style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import EMP from '../Assets/empData.json';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import SideBarNavigation from '../Components/Navbar.js';

const baseURL = '/Assets/empfullDetails.json';

export default function LeaveApproval() {
  const [item, setItem] = useState([]);

  React.useEffect(() => {
    setItem([
      {
        EmpId: 1,
        LeaveId: 1,
        Email: 'harinim@123.com',
        Password: 'Harini123',
        EmpName: 'Harini M',
        EmpPosition: { Role: 'Employee', Position: 'Front-end Dev' },
        Date: '18/08/2022',
        Working_hours: 8,
        Leisure_hours: 1,
        Time_In: '9:00 AM',
        Time_Out: '6:00 PM',
        Leave_type: 'Half-day',
        Leave_from: '19/08/2022',
        Leave_to: '19/08/2022',
        Leave_reason: 'Family function',
        Leave_status: true,
      },
    ]);
    // fetch(baseURL)
    //   .then((res) => res.json())
    //   .then((res) => alert(JSON.stringify(res)))
    //   .catch((err) => console.log(err));
    // axios.get(baseURL).then((response) => {
    //   alert(JSON.stringify(response));
    //   setItem(response.data);
    // });
  }, []);
  console.log(Array.isArray(item));

  // if (!item) return null;
  return (
    <div>
       <SideBarNavigation />
      <div>
        <div className="px-5 pt-2">
          <Card body>
            <h1 className="form-center">EMPLOYEE LEAVE APPROVAL</h1>
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
                {item.map((x) => (
                  <tr key={x.LeaveId}>
                    <td>{x.LeaveId}</td>
                    <td>{x.EmpId}</td>
                    <td>{x.EmpName}</td>
                    <td> {x.EmpPosition.Position} </td>
                    <td> {x.Leave_type} </td>
                    <td> {x.Leave_from} </td>
                    <td> {x.Leave_to} </td>
                    <td> {x.Leave_reason}</td>

                    <td>
                      {' '}
                      <Form.Check
                        inline
                        label="APPROVED"
                        type="radio"
                        id={x.LeaveId + '_approved'}
                        name={x.LeaveId}
                      />
                      <Form.Check
                        inline
                        label="NOT APPROVED"
                        type="radio"
                        id={x.LeaveId + '_not_approved'}
                        name={x.LeaveId}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="py-1 pe-5 ps-5 form-center">
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
