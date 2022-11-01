import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

export default function Example() {
  const loginUrl = "http://127.0.0.1:8000/registerEmployee";
  const baseURL = "http://127.0.0.1:8000/getAllEmployees";

  const [item, setItem] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      tag_id: Number(tagId),
      role_id: Number(roleId),
    };
    console.log(payload);
    fetch(loginUrl, {
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
            // setItem(data)
            const newItems = [...item];
            newItems.push(payload  );

            setItem(newItems);

            alert("Employee Registered Successfully");
          }
        })
      .catch((error) => {});
  };

  
  React.useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((res) => setItem(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1 className="form-center  ">EMPLOYEE DETAILS</h1>
      <div className="text-align-right me-12 ">
        <Button variant="primary" onClick={handleShow}>
          REGISTER EMPLOYEE
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="form-center">REGISTER EMPLOYEE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form responsive="true" className="mx-13" onSubmit={handleSubmit}>
            <h1 className="form-center"> </h1>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
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
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
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
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            SUBMIT
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="px-5 pt-2">
        <Table responsive striped variant="dark" className="py-5 pe-5 ps-5 ">
          <thead>
            <tr>
              <th>#</th>
              <th>EMPLOYEE ID</th>
              <th>EMPLOYEE NAME</th>
              <th>EMPLOYEE POSITION</th>
              <th>EMPLOYEE ROLE ID</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {item.length > 0 ? (
              item.map((x,i) => (
                <tr key={x.emp_id}>
                  <td>{i+1}</td>
                  <td>{x.emp_id}</td>
                  <td>{x.name}</td>
                  <td> {x.tag_id} </td>
                  <td> {x.role_id} </td>
                  <td>
                    {" "}
                    <Button variant="primary" type="submit">
                      <span className="glyphicon glyphicon-pencil"></span> EDIT
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
    </>
  );
}
