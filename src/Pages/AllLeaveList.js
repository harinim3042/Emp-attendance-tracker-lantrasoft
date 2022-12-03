import React, { useState } from "react";
import "../style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import EMP from '../Assets/empData.json';
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import SideBarNavigation from "../Components/Navbar.js";

// const baseURL = '/Assets/empfullDetails.json';

export default function LeaveStatus() {
  const [item, setItem] = useState([]);
 

 
  React.useEffect(() => {
    let leave_list_url ='http://127.0.0.1:8000/getAllLeaves';

    fetch(leave_list_url)
      .then((res) => res.json())
      .then((res) => setItem(res))
      .catch((err) => console.log(err));
  }, []);
  // console.log(setItem);

  // if (!item) return null;
  return (
    <div>
      <SideBarNavigation />
      <div>
        <div className="px-5 pt-2">
          <h1 className="form-center white-font">EMPLOYEE LEAVE LOG</h1>
       
          <Table responsive hover variant="dark" className="py-5 pe-5 ps-5 ">
            <tbody>
              <tr>
                <th>#</th>
                <th>LEAVE ID</th>
                <th>LEAVE APPLIED DATE</th>
                <th>LEAVE TYPE</th>
                <th>LEAVE CATEGORY</th>
                <th>FROM DATE</th>
                <th>TO DATE</th>
                <th>REASON</th>
                <th>STATUS</th>
              </tr>
              {item.length > 0 ? (
                item.map((x, i) => (
                  <tr key={x.leave_id}>
                    <td>{i + 1}</td>
                    <td>{x.leave_id}</td>
                    <td>{x.applied_on_date}</td>
                    <td> {x.leave_type} </td>
                    <td> {x.leave_category} </td>
                    <td> {x.from_date} </td>
                    <td> {x.to_date} </td>
                    <td> {x.reason}</td>
                    <td> {x.leave_status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="11" style={{ textAlign: "center" }}>
                    NO RECORD
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
