import React, { useState } from "react";
import "../style.css";
import Table from "react-bootstrap/Table";
// import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SideBarNavigation from "../Components/Navbar.js";

const userData = JSON.parse(localStorage.getItem("userData"));
// const empId = userData["emp_id"];
const empId = 101;
export default function Reports() {
  const [item, setItem] = useState([]);
  const [SelectFloor, setSelectFloor] = useState("All");
  const [SelectDate, setSelectDate] = useState([]);

  // 2 useState - floor, date

  React.useEffect(() => {}, [empId]);
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    //console.log(payload);
    let baseURL =
      "http://127.0.0.1:8000/getAllAnalyticsByFloor?EmpId=" +
      empId +
      "&date=" +
      SelectDate;

    if (SelectFloor.toLowerCase() !== "all") {
      baseURL += "&floor=" + SelectFloor;
    }

    fetch(baseURL)
      .then((res) => res.json())
      .then((res) => setItem(res))
      .catch((err) => console.log(err));
  };
  const renderTable = (
    <>
      <SideBarNavigation />
      <div>
        <h1 className="form-center white-font pt-5">EMPLOYEE LOGS</h1>
        <div className="px-5 pt-2 ">
          <div className=" white-font text-align-left ">
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3 ">
                <Col sm={4}>
                  <Form.Group controlId="Floor">
                    <Form.Label>Select Floor</Form.Label>
                    <Form.Select
                      name="SelectFloor"
                      onChange={(e) => setSelectFloor(e.target.value)}
                    >
                      <option>All</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col sm={5}>
                  <Form.Group controlId="Date">
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="SelectDate"
                      value={SelectDate}
                      onChange={(e) => setSelectDate(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm={2}>
                  <Button className="mb-3 mt-5" variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
          <Table responsive hover variant="dark" className="py-5 pe-5 ps-5">
            <thead>
              <tr>
                <th>#</th>

                <th>FLOOR</th>
                <th>IN TIME</th>
                <th>OUT TIME</th>
                <th>DURATION</th>
              </tr>
            </thead>
            <tbody>
              {item.length > 0 ? (
                item.map((x) => (
                  <tr key={x.Sno}>
                    <td>{x.Sno}</td>

                    <td>{x.Floor}</td>
                    <td>{x.InTime}</td>
                    <td>{x.OutTime}</td>
                    <td>{x.text}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{textAlign: 'center'}}>
                    NO RECORD
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
  return <div>{renderTable}</div>;
}
