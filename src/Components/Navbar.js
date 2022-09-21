import React from 'react';
import Nav from 'react-bootstrap/Nav';

function AlignmentExample() {
  return (
    <>
      <div className="text-center mb-5 py-3 nav-bg ">
        <div className="title">
        
          <img
            src=" https://raw.githubusercontent.com/harinim3042/images/main/logo.png"
            height="26px"
          />
          LANTRASOFT
       
 
   
        </div>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="/">HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/LeaveApplication">LEAVE APPLICATION</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/LeaveApplication">LEAVE STATUS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Login">LOGOUT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/LeaveApproval">LEAVE APPROVAL</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}

export default AlignmentExample;
