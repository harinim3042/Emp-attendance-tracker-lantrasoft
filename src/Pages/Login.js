import React, { useState } from "react";
import "../style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dashboard from "./Dashboard";
import logo from "../Assets/attendance.gif";

const loginUrl = "http://127.0.0.1:8000/login";



export default function Login() {
  // React States
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [EmpId, setEmpId] = useState("");
  const [password, setPassword] = useState("");

  const removeUser = () => { localStorage.clear();};
  const errors = {
    uname: "Invalid Username",
    pass: "Invalid Password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    let empId = Number(EmpId);
    if (isNaN(empId)) {
      return;
    }

    const payload = {
      emp_id: empId,
      password: password,
    };
    console.log(payload);
    fetch(loginUrl, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          setIsLoginSuccessful(true);
          // alert("Login Successful");
          localStorage.setItem("userData", JSON.stringify(data));
        }
      })
      .catch((error) => {});
  };

  const renderForm = (
    <div className="chart-align my-10" onLoad={removeUser}>
      <div className="chart-bg pt-8 py-1 pb-5">
        <Form responsive="true" className="mx-13" onSubmit={handleSubmit}>
          <h1 className="form-center"> LOGIN </h1>
          <h1 className="form-center ms-4">
         
            <img src={logo} alt={"logo"} width="220px" height="220px" />
          </h1>

          <div className="mb-3 ms-6 ">
            <Form.Label>
              <b>EMPLOYEE ID</b>
            </Form.Label>
            <div className="mb-3 ">
              <Form.Control
                type="integer"
                placeholder="Enter Employee ID"
                name="EmpId"
                value={EmpId}
                onChange={(e) => setEmpId(e.target.value)}
                // controlId="email"
                required
              />
            </div>
          </div>
          <div className="mb-3 ms-6">
            <Form.Label>
              <b>PASSWORD</b>
            </Form.Label>
            <div className="mb-3 ">
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // controlId="password"
                required
              />
            </div>
          </div>

          <div className="form-center">
            <Button variant="primary" type="submit">
              LOGIN
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
  return <div>{isLoginSuccessful ? <Dashboard /> : renderForm}</div>;
}
