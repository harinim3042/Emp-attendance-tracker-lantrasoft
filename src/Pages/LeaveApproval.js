import React, { useState } from 'react';
import '../style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import EMP from '../Assets/empData.json';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import SideBarNavigation from '../Components/Navbar.js';

const baseURL = 'http://localhost:4000/empfullDetails';

export default function LeaveApproval() {
  const [item, setItem] = useState([]);

  React.useEffect(() => {

    fetch(baseURL)
      .then((res) => res.json())
      .then((res) => setItem(res))
      .catch((err) => console.log(err));
      
  }, []);


  // if (!item) return null;
  return (
    <div>
       <SideBarNavigation />
      <div>
        <div className="px-5 pt-2">
         
            <h1 className="form-center white-font">EMPLOYEE LEAVE APPROVAL</h1>
            <Table
              responsive
              striped 
              variant="dark"
              className="py-5 pe-5 ps-5 "
              
            >
         <thead>
                <tr>
                  <th>#</th>
                  <th>EMPLOYEE ID</th>
                  <th>EMPLOYEE NAME</th>
                  <th>EMPLOYEE POSITION</th>
                  <th>LEAVE TYPE</th>
                  <th>LEAVE CATEGORY</th>
                  <th>FROM DATE</th>
                  <th>TO DATE</th>
                  <th>REASON</th>
                  <th>APPROVAL STATUS</th>
                </tr>
                </thead>
                <tbody>
                {item.length > 0 ? (
                item.map((x) => (
                  <tr key={x.LeaveId}>
                    <td>{x.LeaveId}</td>
                    <td>{x.EmpId}</td>
                    <td>{x.EmpName}</td>
                    <td> {x.EmpPosition.Position} </td>
                    <td> {x.Leave_type} </td>
                    <td> {x.Leave_category} </td>
                    <td> {x.Leave_from} </td>
                    <td> {x.Leave_to} </td>
                    <td> {x.Leave_reason}</td>

                    <td>
                 
                      <Form.Check
                        inline
                        label="APPROVED"
                        type="radio"
                        id={x.LeaveId + '_approved'}
                        name={x.LeaveId}
                        value="boolean"
                        required
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
                ))
                ) : (
                  <tr>
                    <td colSpan="10" style={{textAlign: 'center'}}>
                      NO RECORD
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            <div className="py-1 pe-5 ps-5 form-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
       
        </div>
      </div>
    </div>
  );
}
