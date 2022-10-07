import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar() {

  let navMenus = [
    {
      menu: '1',
      label: 'HOME',
      route: '/Dashboard',
      role: ['Associate'],
    },
    {
      menu: '2',
      label: 'REPORTS',
      route: '/Reports',
      role: ['Associate'],
    },
  ];
  const userData = JSON.parse(localStorage.getItem("userData"));
  const user_Name = userData['name'];
  const userRole = userData['role'];

  navMenus = navMenus.filter((m) => m.role.includes(userRole));
  
  return (
    <>
      <div className=" mt-n1  nav-bg align-items-center ">
        <div className="title mx-3 pt-2">
          <p>
            <img
              src=" https://raw.githubusercontent.com/harinim3042/images/main/logo.png"
              height="26px"
            />
            LANTRASOFT
          </p>
        </div>

        <Nav className="justify-content-end mt-n7  me-2">
          {navMenus.map((m) => (
            <Nav.Item key={m.menu}>
              <Nav.Link href={m.route}>{m.label}</Nav.Link>
            </Nav.Item>
          ))}

          <NavDropdown title={user_Name} id="UserName" >
            <Nav.Item >
            <Nav.Link href="/" className="border-none">LOGOUT</Nav.Link> 
            </Nav.Item>
          </NavDropdown>
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
