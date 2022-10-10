import React, { useState } from 'react';
import '../style.css';
import Table from 'react-bootstrap/Table';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import SideBarNavigation from '../Components/Navbar.js';

const baseURL = 'http://127.0.0.1:8000/getAnalyticsByFloor?EmpId=101&date=2022-10-03';

export default function LeaveApproval() {
  const [item, setItem] = useState([])
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [SelectFloor, setSelectFloor] = useState("");
  const [SelectDate, setSelectDate] = useState("");

  


  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    React.useEffect(() => {
 
      fetch(baseURL)
        .then((res) => res.json())
        .then( (res) => setItem(res))
        .catch((err) => console.log(err));
        
    }, []);

 
  };
  return (
    <>
       <SideBarNavigation />
      <div>
      <h1 className="form-center">EMPLOYEE LOGS</h1>
      <div className="px-5 pt-2 ">
      const renderTable = (
      <Form>
       <Row className="mb-3">
       

        <Form.Group as={Col} controlId="Floor">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="All" 
           name="SelectFloor"
                value={SelectFloor}
                onChange={(e) => setSelectFloor(e.target.value)}
                // controlId="email"
                required>
            <option>1</option>
            <option>2</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="Date">
          <Form.Label>Zip</Form.Label>
          <Form.Control 
          type="date"
           name="SelectDate"
           value={SelectDate}
           onChange={(e) => setSelectDate(e.target.value)}
           // controlId="email"
           required/>
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      
   
            <Table
              responsive
              hover
              variant="dark"
              className="py-5 pe-5 ps-5"
              
        
            >
              <tbody>
                <tr>
                  <th>#</th>
                
                  <th>FLOOR</th>
                  <th>IN TIME</th>
                  <th>OUT TIME</th>
                  <th>DURATION</th>
                 
                </tr>
                {item.map((x) => (
                  <tr key={x.Sno} >
                     <td>{x.Sno}</td>
                   
                    <td>{x.Floor}</td>
                    <td>{x.InTime}</td>
                    <td>{x.OutTime}</td>
                    <td>{x.duration}</td>
                        </tr>
                ))}
              </tbody>
            </Table>
          );
         
     
        </div>
      </div>
      return <div>{isSubmitSuccessful ? "no record" : renderTable}</div>;
    </>
  );
  
}
