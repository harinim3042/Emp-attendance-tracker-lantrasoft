import React, { useState } from 'react';
import '../style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dashboard from './Dashboard';

const baseURL = 'http://localhost:4000/empfullDetails';
const loginUrl = 'http://localhost:4000/login';
export default function Login() {
  // React States
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const errors = {
    uname: 'Invalid Username',
    pass: 'Invalid Password',
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
 setEmail("");
 setPassword("");
    const payload = {
      email: email,
      password: password,
    }
console.log(payload);
    fetch(loginUrl, {
      method: "POST",
      body: JSON.stringify(payload)
    })
    .then((res) => res.json())
    .then(data => {
        localStorage.setItem('login_status', true);
        setIsLoginSuccessful(true);
        console.log(data)
        localStorage.setItem('user_Data', JSON.stringify(data));
        localStorage.setItem('user_Name', JSON.stringify(data.EmpName));
      })
      .catch((error) => {

      })
  }

  const renderForm = (
    <div className="chart-align my-10">
      <div className="chart-bg pt-8 py-1 pb-5">
        <Form responsive="true" className="mx-13" onSubmit={handleSubmit}>
          <h1 className="form-center"> LOGIN </h1>
          <h1 className="form-center ms-4">
            <img
              src="https://github.com/harinim3042/images/blob/main/Attendance.gif?raw=true"
              width="220px"
              height="220px"
            />
          </h1>

          <div className="mb-3 ms-6 ">
            <Form.Label>
              <b>EMPLOYEE EMAIL ID</b>
            </Form.Label>
            <div className="mb-3 ">
              <Form.Control
                type="text"
                placeholder="Enter Employee EMAIL ID"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // controlId="email"
                required
              />
            </div>

          </div>
          <div className="mb-3 ms-6">
            <Form.Label>
              <b>PASSWORD</b>
            </Form.Label>
            <div className="mb-3 ">
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // controlId="password"
                required
              />
            </div>

          </div>

          <div className="form-center">
            <Button variant="primary" type="submit">
              LOGIN
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
  return <div>{isLoginSuccessful ? <Dashboard /> : renderForm}</div>;


}
