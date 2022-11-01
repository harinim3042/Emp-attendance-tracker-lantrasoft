import React, { useState } from 'react';
import '../style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import EMP from '../Assets/empData.json';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import SideBarNavigation from '../Components/Navbar.js';

const baseURL = '/Assets/empfullDetails.json';

export default function LeaveStatus() {
  const [item, setItem] = useState([]);

  React.useEffect(() => {
    setItem([
      {
        
        LeaveId: 1,
        Leave_type: 'Half-day',
        Leave_category: 'Personal Leave',
        Leave_from: '19/08/2022',
        Leave_to: '19/08/2022',
        Leave_reason: 'Family function',
        Leave_status: 'APPROVED',
        Approval_reason: 'Approved',
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
  console.log(setItem);

  // if (!item) return null;
  return (
    <div>
      <SideBarNavigation />
      <div>
        <div className="px-5 pt-2">
       
            <h1 className="form-center white-font">EMPLOYEE LEAVE STATUS</h1>
            <Table
              responsive
              hover
              variant="dark"
              className="py-5 pe-5 ps-5 "
              
            >
              <tbody>
                <tr>
                  <th>#</th>
                  <th>LEAVE ID</th>
                  <th>LEAVE TYPE</th>
                  <th>LEAVE CATEGORY</th>
                  <th>FROM DATE</th>
                  <th>TO DATE</th>
                  <th>REASON</th>
                  <th>APPROVAL STATUS</th>
                  <th>APPROVAL REASON</th>

                </tr>
                {item.map((x) => (
                  <tr key={x.LeaveId}>
                    <td>{x.LeaveId}</td>
                    <td>{x.LeaveId}</td>
                    <td> {x.Leave_type} </td>
                    <td> {x.Leave_category} </td>
                    <td> {x.Leave_from} </td>
                    <td> {x.Leave_to} </td>
                    <td> {x.Leave_reason}</td>
                    <td> {x.Leave_status}</td>
                    <td> {x.Approval_reason}</td>

                  </tr>
                ))}
              </tbody>
            </Table>
         
        </div>
      </div>
    </div>
  );
}
