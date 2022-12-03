import React, { useState } from 'react';
import '../style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import EMP from '../Assets/empData.json';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import SideBarNavigation from '../Components/Navbar.js';

// const baseURL = 'http://localhost:4000/empfullDetails';

export default function LeaveApproval() {
  const [waiting_list_item, set_waiting_list_Item] = useState([]);


  React.useEffect(() => {
    let waiting_list_url =    'http://127.0.0.1:8000/getWaitingListLeave';
    fetch(waiting_list_url)
    .then((res) => res.json())
    .then((res) => set_waiting_list_Item(res))
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
              className="py-5 pe-5 ps-5 "
              
            >
         <thead >
                <tr className="white-font">
                  <th>#</th>
                <th>LEAVE ID</th>
                  <th>EMPLOYEE ID</th>
                  <th> NAME</th>
                  <th> POSITION</th>
                <th>LEAVE APPLIED ON</th>
                  <th>LEAVE TYPE</th>
                  <th>LEAVE CATEGORY</th>
                  <th>FROM DATE</th>
                  <th>TO DATE</th>
                  <th>REASON</th>
                  <th>APPROVAL STATUS</th>
                </tr>
                </thead>
                <tbody>
                {waiting_list_item.length > 0 ? (
                waiting_list_item.map((x,i) => (
                  <tr key={x.leave_id}>
                     <td>{i + 1}</td>
                    <td>{x.leave_id}</td>
                    <td>{x.emp_id}</td>
                    <td>{x.name}</td>
                    <td> {x.role}</td>
                    <td>{x.applied_on_date}</td>
                    <td> {x.leave_type} </td>
                    <td> {x.leave_category} </td>
                    <td> {x.from_date} </td>
                    <td> {x.to_date} </td>
                    <td> {x.reason}</td>

                    <td>
                 
                      <Form.Check
                        inline
                        label="APPROVED"
                        type="radio"
                        id={x.leave_status_id + '_approved'}
                        name={x.leave_status_id}
                        value="2"
                        required
                      />
                      <Form.Check
                        inline
                        label="REJECTED"
                        type="radio"
                        id={x.leave_status_id + '_not_approved'}
                        name={x.leave_status_id}
                        value="3"
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
