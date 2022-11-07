import React, { useState } from "react";
import "../style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../style.css";

const RegisterEmployee = ({ getAllEmployees , setShowRegisterModal}) => {

  const registerEmployeeURL = "http://127.0.0.1:8000/registerEmployee";
  
  // const [SelectEmployeeRoleID, setSelectEmployeeRoleID] = useState([]);

  const [EmpId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [password, setPassword] = useState("");
  const [tagId, setTagId] = useState("");
  const [roleId, setRoleId] = useState("");
  let SelectEmployeeRole = [
    {
      "role_id": 1,
      "role": "Senior Associate"
    },
    {
      "role_id": 2,
      "role": "Associate"
    },
    {
      "role_id": 3,
      "role": "Senior Analyst"
    },
    {
      "role_id": 4,
      "role": "Analyst"
    },
    {
      "role_id": 5,
      "role": "HR"
    }
  ];


  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    const payload = {
      emp_id: Number(EmpId),
      name: empName,
      tag_id: Number(tagId),
      role_id: Number(roleId),
      password
    };
    console.log(payload);
    fetch(registerEmployeeURL, {
      method: "POST",
      //   mode: "cors",
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
          getAllEmployees();
          setShowRegisterModal(false);
          alert("Employee Registered Successfully");
        }
      })
      .catch((error) => {});

      
  };
  return (
    <Form responsive="true" className="mx-13">
      <h1 className="form-center"> </h1>

      <div className="mb-3 ms-6 ">
        <Form.Label>
          <b>EMPLOYEE ID</b>
        </Form.Label>
        <div className="mb-3 ">
          <Form.Control
            type="number"
            placeholder="Enter Employee ID"
            name="EmpId"
            value={EmpId}
            onChange={(e) => setEmpId(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-3 ms-6">
        <Form.Label>
          <b>EMPLOYEE NAME</b>
        </Form.Label>
        <div className="mb-3 ">
          <Form.Control
            type="text"
            placeholder="Enter Employee Name"
            name="empName"
            value={empName}
            onChange={(e) => setEmpName(e.target.value)}
            required
          />
        </div>
      </div>

      
      <div className="mb-3 ms-6">
        <Form.Label>
          <b>EMPLOYEE PASSWORD</b>
        </Form.Label>
        <div className="mb-3 ">
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mb-3 ms-6">
        <Form.Label>
          <b>EMPLOYEE TAG ID</b>
        </Form.Label>
        <div className="mb-3 ">
          <Form.Control
            type="number"
            placeholder="Enter Employee Tag Id"
            name="tagId"
            value={tagId}
            onChange={(e) => setTagId(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mb-3 ms-6">
      <Form.Label>SELECT EMPLOYEE ROLE</Form.Label>

        <div className="mb-3 ">
       
                    <Form.Select
                      name="SelectEmployee"
                      onChange={(e) => setRoleId(e.target.value)}
                    >
                      <option>Select Employee Role</option>

                      {SelectEmployeeRole.map((x) => (
                        <option key={x.role_id} value={x.role_id} >{x.role}</option>
                      ))}
                    </Form.Select>
        </div>
      </div>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        SUBMIT
      </Button>
    </Form>
  );
};

export default RegisterEmployee;
