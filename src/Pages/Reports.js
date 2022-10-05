import React, { useState } from 'react';
import '../style.css';
import Table from 'react-bootstrap/Table';
// import Card from 'react-bootstrap/Card';
import SideBarNavigation from '../Components/Navbar.js';

const baseURL = 'http://localhost:4000/Dashboard/Time_in_out_logs';

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
      <h1 className="form-center">EMPLOYEE LEAVE APPROVAL</h1>
        <div className="px-5 pt-2 ">
          {/* <Card body> */}
          
            <Table
              responsive
              hover
              variant="dark"
              className="py-5 pe-5 ps-5"
              
        
            >
              <tbody>
                <tr>
                  <th>#</th>
                  <th>ENTRY ID</th>
                  <th>FLOOR</th>
                  <th>IN TIME</th>
                  <th>OUT TIME</th>
                  <th>DURATION</th>
                 
                </tr>
                {item.map((x) => (
                  <tr key={x.EntryId}>
                     <td>{x.EntryId}</td>
                     <td>{x.EntryId}</td>
                    <td>{x.Floor}</td>
                    <td>{x.inTime}</td>
                    <td>{x.outTime}</td>
                    <td>{x.Duration}</td>
                        </tr>
                ))}
              </tbody>
            </Table>
          
          {/* </Card> */}
        </div>
      </div>
    </div>
  );
}
