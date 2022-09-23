import React, { useState } from 'react';
import '../style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dashboard from './Dashboard';
export default function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: 'user1',
      password: 'pass1',
    },
    {
      username: 'user2',
      password: 'pass2',
    },
  ];

  const errors = {
    uname: 'Invalid Username',
    pass: 'Invalid Password',
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: 'pass', message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    <div className="chart-align my-10">
      <div className="container-bg pt-8 py-2 pb-5">
        <form responsive className="mx-13" onSubmit={handleSubmit}>
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
                name="uname"
                required
              />
            </div>
            {renderErrorMessage('uname')}
          </div>
          <div className="mb-3 ms-6">
            <Form.Label>
              <b>PASSWORD</b>
            </Form.Label>
            <div className="mb-3 ">
              <Form.Control
                type="password"
                placeholder="Enter Employee Name"
                name="pass"
                required
              />
            </div>
            {renderErrorMessage('pass')}
          </div>

          <div className="form-center">
            <Button variant="primary" type="submit">
              LOGIN
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
  return <div>{isSubmitted ? <Dashboard /> : renderForm}</div>;
}
