import React, { useState } from 'react';
import '../style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import EMP from '../Assets/empData.json';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const baseURL = '/Assets/empfullDetails.json';

export default function LeaveApproval() {
  const [item, setItem] = useState([]);

  React.useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => console.log(err));
    // axios.get(baseURL).then((response) => {
    //   alert(JSON.stringify(response));
    //   setItem(response.data);
    // });
  }, []);
  console.log(Array.isArray(item));

  // if (!item) return null;
  return (
    <div>
      <div>
        <div className="px-5 pt-2">
          <Card body>
            <h1 className="form-center">EMPLOYEE LEAVE APPROVAL</h1>
            <Table
              responsive
              hover
              variant="dark"
              className="py-5 pe-5 ps-5 "
              bordered
            >
              <tbody>
                <tr>
                  <th>#</th>
                  <th>EMPLOYEE ID</th>
                  <th>EMPLOYEE NAME</th>
                  <th>EMPLOYEE POSITION</th>
                  <th>LEAVE TYPE</th>
                  <th>FROM DATE</th>
                  <th>TO DATE</th>
                  <th>REASON</th>
                  <th>APPROVAL STATUS</th>
                </tr>
                {/* {item.map((x) => (
                  <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.id}</td>
                    <td>
                      {x.first_name} {x.last_name}
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                    <td>
                      {' '}
                      <Form.Check
                        inline
                        label="APPROVED"
                        type="radio"
                        id={x.id + "_approved"}
                        name={x.id}
                      />
                      <Form.Check
                        inline
                        label="NOT APPROVED"
                        type="radio"
                        id={x.id + "_not_approved"}
                        name={x.id}
                      />
                    </td>
                  </tr>
                ))} */}
              </tbody>
            </Table>
            <div className="py-1 pe-5 ps-5 form-center">
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
