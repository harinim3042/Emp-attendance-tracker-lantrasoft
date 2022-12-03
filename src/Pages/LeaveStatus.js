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
  const [waiting_list_item, set_waiting_list_Item] = useState([]);
  const [approved_list_item, set_approved_list_Item] = useState([]);
  const [rejected_list_item, set_rejected_list_Item] = useState([]);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const EmpId = userData["emp_id"];
  React.useEffect(() => {
    let waiting_list_url =
      "http://127.0.0.1:8000/getWaitingListLeave?emp_id=" + EmpId;
    let approved_list_url =
      "http://127.0.0.1:8000/getApprovedLeave?emp_id=" + EmpId;
    let rejected_list_url =
      "http://127.0.0.1:8000/getRejectedLeave?emp_id=" + EmpId;
    fetch(waiting_list_url)
      .then((res) => res.json())
      .then((res) => set_waiting_list_Item(res))
      .catch((err) => console.log(err));
    fetch(approved_list_url)
      .then((res) => res.json())
      .then((res) => set_approved_list_Item(res))
      .catch((err) => console.log(err));
    fetch(rejected_list_url)
      .then((res) => res.json())
      .then((res) => set_rejected_list_Item(res))
      .catch((err) => console.log(err));
  }, []);
  // console.log(setItem);

  // if (!item) return null;
  return (
    <div>
      <SideBarNavigation />
      <div>
        <div className="px-5 pt-2">
          <h1 className="form-center white-font">EMPLOYEE LEAVE STATUS</h1>
          <h2> WAITING LEAVE APPLICATION</h2>
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
              {waiting_list_item.length > 0 ? (
                waiting_list_item.map((x, i) => (
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
          <h2> APPROVED LEAVE APPLICATION</h2>

          <Table responsive hover className="py-5 pe-5 ps-5 ">
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
                <th>VERIFIED BY</th>
                <th>VERIFIED ON</th>
              </tr>
              {approved_list_item.length > 0 ? (
                approved_list_item.map((x, i) => (
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
                    <td> {x.verified_by}</td>
                    <td> {x.verified_on}</td>
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

          <h2> REJECTED LEAVE APPLICATION</h2>

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
                <th>VERIFIED BY</th>
                <th>VERIFIED ON</th>
              </tr>
              {rejected_list_item.length > 0 ? (
                rejected_list_item.map((x, i) => (
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
                    <td> {x.verified_by}</td>
                    <td> {x.verified_on}</td>
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
