import React, { useState } from "react";
import "../style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const loginUrl = "http://127.0.0.1:8000/registerEmployee";



export default function Login() {
  // React States
//   const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [EmpId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [tagId, setTagId] = useState("");
  const [roleId, setRoleId] = useState("");



  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    let empId = Number(EmpId);
    if (isNaN(empId)) {
      return;
    }

    const payload = {
      emp_id: empId,
      name: empName,
      tag_id:tagId,
      role_id:roleId,
    };
    console.log(payload);
    fetch(loginUrl, {
      method: "POST",
    //   mode: "cors",
      body:JSON.stringify(payload),
      headers: {
        "Content-Type": "text/plain;charset=UTF-8 ",
      },
    })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.message) {
    //       alert(data.message);
    //     } else {
    //     //   setIsLoginSuccessful(true);
    //       alert("Employee Registered Successfully");
    //     }
    //   })
      .catch((error) => {});
  };

  return (
    <div className="chart-align my-10" >
      <div className="chart-bg pt-8 py-1 pb-5">
        <Form responsive="true" className="mx-13" onSubmit={handleSubmit}>
          <h1 className="form-center">REGISTER EMPLOYEE </h1>
      
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
            <Form.Label>
              <b>EMPLOYEE ROLE ID</b>
            </Form.Label>
            <div className="mb-3 ">
              <Form.Control
                type="number"
                placeholder="Enter Employee ROLE ID"
                name="roleId"
                value={roleId}
                onChange={(e) => setRoleId(e.target.value)}
                
                required
              />
            </div>
          </div>

          <div className="form-center">
            <Button variant="primary" type="submit">
              SUBMIT
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
//   return <div>{isLoginSuccessful ? <Dashboard /> : renderForm}</div>;
}
