import React, { useState } from "react";
import "../style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// const EmpId = 1500;
const UpdateEmployee = ({ employee,  getAllEmployees ,setShowEditModal }) => {
  const updateEmployeeDataURL =
    "http://127.0.0.1:8000/updateEmployeeData?EmpId=" + employee.emp_id + "";

  // const [SelectEmployeeRole, setSelectEmployeeRole] = useState([]);

  const [empName, setEmpName] = useState(employee.name);
  const [tagId, setTagId] = useState(employee.tag_id);
  const [roleId, setRoleId] = useState(employee.role_id);


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
      },
    ];

    // fetch(EmpRoleURL)
    //   .then((res) => res.json())
    //   .then((res) => setSelectEmployeeRole(res))
    //   .catch((err) => console.log(err));
 
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    const payload = {
      emp_id: employee.emp_id,
      name: empName,
      tag_id: tagId,
      role_id: roleId,
    };
    console.log(payload);
    fetch(updateEmployeeDataURL, {
      method: "PUT",
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
          setShowEditModal(false);
          alert("Employee Data Updated Successfully");
        }
      })
      .catch((error) => {});
  };

  return (
    <Form responsive="true" className="mx-13">
      <div className="mb-3 ms-6 ">
        <Form.Label>
          <b>EMPLOYEE ID</b>
        </Form.Label>
        <div className="mb-3 ">
          <Form.Control
            type="number"
            // placeholder={Number(Employee)}
            name="EmpId"
            value={employee.emp_id}
            disabled
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
            value={employee.name}
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
            defaultValue={employee.tag_id}
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
            defaultValue={employee.role_id}
            onChange={(e) => setRoleId(e.target.value)}
          >
            <option>Select Employee Role</option>

            {SelectEmployeeRole.map((x) => (
              <option key={x.role_id} value={x.role_id}>{x.role}</option>
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

export default UpdateEmployee;
