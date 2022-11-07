import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../style.css";
import RegisterEmployee from "./RegisterEmployee";
import UpdateEmployee from "./UpdateEmployee";
import SideBarNavigation from "../Components/Navbar.js";

import Table from "react-bootstrap/Table";

export default function EmployeeDetails() {
  const baseURL = "http://127.0.0.1:8000/getAllEmployees";
  const [item, setItem] = useState([]);

  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);

  const [editedEmployee, setEditedEmployee] = useState(null);

  const getAllEmployees = () => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((res) => {
        setItem(res);
        
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {

    getAllEmployees();
    
  }, []);

  const handleDelete = (empId) => {
    const response = confirm(
      "Are you sure you want to Delete Employee " + empId + ""
    );
    if (response) {
      const deleteURL = "http://127.0.0.1:8000/employeeDelete/" + empId + "";

      fetch(deleteURL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            alert(data.message);
          } else {
            alert("Employee Data Deleted Successfully");
            // Render table again
            getAllEmployees();
          }
        })
        .catch((error) => {});
    }
  };
  return (
    <>
      <SideBarNavigation />
      <h1 className="form-center  ">EMPLOYEE DETAILS</h1>
      <div className="text-align-right me-12 ">
        <Button variant="primary" onClick={() => setShowRegisterModal(true)}>
          REGISTER EMPLOYEE
        </Button>
      </div>
      <Modal
        show={showRegisterModal}
        onHide={() => setShowRegisterModal(false)}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="form-center">REGISTER EMPLOYEE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterEmployee
            getAllEmployees={getAllEmployees}
            setShowRegisterModal={setShowRegisterModal}
          />
        </Modal.Body>
      </Modal>
      <div className="px-5 pt-2">
        <Table striped variant="dark" className="py-5 pe-5 ps-5 ">
          <colgroup>
            <col width="10%"/>
            <col width="10%"/>
            <col width="20%"/>
            <col width="20%"/>
            <col width="20%"/>
            <col width="20%"/>
          </colgroup>
          <thead>
            <tr>
              <th>#</th>
              <th>EMPLOYEE ID</th>
              <th>EMPLOYEE TAG ID</th>
              <th>EMPLOYEE NAME</th>
              <th>EMPLOYEE POSITION</th>
              <th> ACTIONS </th>
            </tr>
          </thead>
          <tbody>
            {item.length > 0 ? (
              item.sort((a, b) => a.emp_id - b.emp_id).map((x, i) => (
                <tr key={x.emp_id}>
                  <td>{i + 1}</td>
                  <td>{x.emp_id}</td>
                  <td> {x.tag_id} </td>
                  <td>{x.name}</td>
                  <td> {x.role} </td>

                  <td>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={() => {
                        setShowEditModal(true);
                        setEditedEmployee(x);
                      }}
                      value={x.emp_id}
                    >
                      <i className="bi-pencil-square"></i> EDIT
                    </Button>

                    <Button
                      variant="danger"
                      type="submit"
                      onClick={() => {
                        handleDelete(x.emp_id);
                      }}
                      className="ms-7"
                    >
                      <i className="bi-trash-fill"></i> DELETE
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" style={{ textAlign: "center" }}>
                  NO RECORD
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="form-center">UPDATE EMPLOYEE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateEmployee
            employee={editedEmployee}
            getAllEmployees={getAllEmployees}
            setShowEditModal={setShowEditModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
