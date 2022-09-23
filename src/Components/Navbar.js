import React from 'react';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  let navMenus = [
    {
      label: 'HOME',
      route: '/Dashboard',
      role: ['HR'],
    },
    {
      label: 'HOME 2',
      route: '/Dashboard',
      role: ['HR', 'STUDENT'],
    },
  ];
  let userRole = 'STUDENT';

  navMenus = navMenus.filter((m) => m.role.includes(userRole));

  return (
    <>
      <div className=" mt-n1 py-2  nav-bg ">
        <div className="title mx-3 pt-2">
          <p>
            <img
              src=" https://raw.githubusercontent.com/harinim3042/images/main/logo.png"
              height="26px"
            />
            LANTRASOFT
          </p>
        </div>

        <Nav className="justify-content-end mt-n4 mb-1 me-2">
          {navMenus.map((m) => (
            <Nav.Item>
              <Nav.Link href={m.route}>{m.label}</Nav.Link>
            </Nav.Item>
          ))}

          {/* <Nav.Item>
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
          </Nav.Item> */}
        </Nav>
      </div>
    </>
  );
}

export default NavBar;
