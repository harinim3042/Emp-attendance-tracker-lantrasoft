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
 
  const [SelectEmployeeID, setSelectEmployeeID] = useState([]);


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
    let empURL = "http://127.0.0.1:8000/getAllEmployees";

    fetch(empURL)
      .then((res) => res.json())
      .then((res) => setSelectEmployeeID(res))
      .catch((err) => console.log(err));
   }, [EmpId]);

  const renderTable = (
    <>
      <SideBarNavigation />
      <div>
        <h1 className="form-center white-font pt-5">HR DASHBOARD</h1>

        <div className=" pt-2 mb-5 mx-13 px-5">
          <div className=" white-font ">
            <Form onSubmit={handleSubmit} className=" ms-12 ">
              <Row className="mb-3 ">
                <Col sm={4}>
                  <Form.Group controlId="Employee">
                    <Form.Label>Select Employee</Form.Label>
                    <Form.Select
                      name="SelectEmployee"
                      onChange={(e) => setTempEmpId(e.target.value.slice(0,3))}
                    >
                      <option>Select Employee</option>

                      {SelectEmployeeID.map((x) => (
                        <option key={x.emp_id}>{x.emp_id} - {x.name}</option>
                      ))}
                    </Form.Select>
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
              <div className="chart-bg donut px-5 mx-4 py-5 mb-2 ">
                <DoughnutChart empId={EmpId} />
              </div>
              <div className="chart-bg line px-6 mx-3 py-6 mb-2 ">
                <LineChart empId={EmpId} />
              </div>
              <div className="chart-bg bar px-7 py-6 my-4 ">
                <BarChart empId={EmpId} />
              </div>
            </div>
          }

         
        </div>
      </div>
    </>
  );
  return <div>{renderTable}</div>;
};

export default Reports;
