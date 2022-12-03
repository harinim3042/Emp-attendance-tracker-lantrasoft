import React from "react";
import "../style.css";
import Table from "react-bootstrap/Table";
import logo from "../Assets/propic.png";
import SideBarNavigation from '../Components/Navbar.js';

const userData = JSON.parse(localStorage.getItem("userData"));
const user_Name = userData["name"];
const userRole = userData["role"];
const user_emp_id = userData["emp_id"];
const user_tag_id = userData["tag_id"];

export default function ProfilePage() {
  return (
    <div>  <SideBarNavigation />
    <div className="chart-align my-10">
      <div className="chart-bg pt-8 pb-5 px-8">
        <h1 className="form-center"> MY PROFILE </h1>
        <h1 className="form-center pb-5">
          <img src={logo} alt={"logo"} width="220px" height="220px" />
        </h1>
        <Table striped="columns"  className="form-center" id ="profile">
          <tbody>
            <tr>
              <td>EMPLOYEE ID</td>
              <td>{user_emp_id}</td>
            </tr>
            <tr>
              <td>EMPLOYEE NAME</td>
              <td>{user_Name}</td>
            </tr>
            <tr>
              <td>EMPLOYEE POSITION</td>
              <td>{userRole}</td>
            </tr>
            <tr>
              <td>EMPLOYEE TAG ID</td>
              <td>{user_tag_id}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
    </div>
  );
}
