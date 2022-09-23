import React from 'react';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <>
      <div className=" mt-n1 py-2  nav-bg ">
        <div className="title mx-3 pt-2">
          <img
            src=" https://raw.githubusercontent.com/harinim3042/images/main/logo.png"
            height="26px"
          />
          LANTRASOFT
        </div>
     
          <Nav className="justify-content-end mt-n5 mb-1 me-2">
            <Nav.Item>
              <Nav.Link href="/Dashboard">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/LeaveApplication">LEAVE APPLICATION</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/LeaveStatus">LEAVE STATUS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/LeaveApproval">LEAVE APPROVAL</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">LOGOUT</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      
    </>
  );
}

export default NavBar;
