import React, { useState } from "react";
import "../style.css";
import Table from "react-bootstrap/Table";
// import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SideBarNavigation from "../Components/Navbar.js";
import DoughnutChart from "../Components/Donught.js";
import LineChart from "../Components/Linechart.js";
import BarChart from "../Components/barChart";

const userData = JSON.parse(localStorage.getItem("userData"));
//
const Reports = () => {
  const [item, setItem] = useState([]);
  const [SelectEmployeeID, setSelectEmployeeID] = useState([]);

  const [SelectFloor, setSelectFloor] = useState("All");
  const [SelectDate, setSelectDate] = useState();
  const [tempSelectDate, setTempSelectDate] = useState();

  const [EmpId, setEmpId] = useState(userData["emp_id"]);
  const [tempEmpId, setTempEmpId] = useState(userData["emp_id"]);

  // 2 useState - floor, date

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    setEmpId(tempEmpId);
    setSelectDate(tempSelectDate);
    //console.log(payload);
  };

  React.useEffect(() => {
    let baseURL =
      "http://127.0.0.1:8000/getAllAnalyticsByFloor?EmpId=" +
      EmpId +
      "&date=" +
      SelectDate;

    if (SelectFloor.toLowerCase() !== "all") {
      baseURL += "&floor=" + SelectFloor;
    }
    fetch(baseURL)
      .then((res) => res.json())
      .then((res) => setItem(res))
      .catch((err) => console.log(err));

    let empURL = "http://127.0.0.1:8000/getAllEmployees";

    fetch(empURL)
      .then((res) => res.json())
      .then((res) => setSelectEmployeeID(res))
      .catch((err) => console.log(err));
  }, [EmpId, SelectDate, SelectFloor]);

  const renderTable = (
    <>
      <SideBarNavigation />
      <div>
        <h1 className="form-center white-font pt-5">HR DASHBOARD</h1>

        <div className="px-5 pt-2 mx-13 mb-5">
          <div className=" white-font text-align-left">
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3 ">
                <Col sm={4}>
                  <Form.Group controlId="Employee">
                    <Form.Label>Select Employee</Form.Label>
                    <Form.Select
                      name="SelectEmployee"
                      onChange={(e) => setTempEmpId(e.target.value)}
                    >
                      <option>Select Employee</option>

                      {SelectEmployeeID.map((x) => (
                        <option key={x.emp_id}>{x.emp_id} - {x.name}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col sm={3}>
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
                <Col sm={3}>
                  <Form.Group controlId="Date">
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="SelectDate"
                      value={SelectDate}
                      onChange={(e) => setTempSelectDate(e.target.value)}
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

          {
            <div className="chart-align container-fluid mt-2 mb-7 ">
              <div className="chart-bg donut px-9 mx-4 py-5 mb-2 ">
                <DoughnutChart empId={EmpId} />
              </div>
              <div className="chart-bg line px-6 mx-3 py-6 mb-2 ">
                <LineChart empId={EmpId} />
              </div>
              <div className="chart-bg bar px-8 py-6 my-4 ">
                <BarChart empId={EmpId} />
              </div>
            </div>
          }

          <Table
            responsive="true"
            hover
            variant="dark"
            className="py-5 pe-5 ps-5"
          >
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
                  <td colSpan="5" style={{ textAlign: "center" }}>
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
};

export default Reports;
