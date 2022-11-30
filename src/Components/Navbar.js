import React from 'react';
import { NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar() {

  let navMenus = [
    {
      menu: '1',
      label: 'HOME',
      route: '/Dashboard',
      // role: ['Senior Associate','Associate','Senior Analyst','Analyst','HR'],
    },
    {
      menu: '2',
      label: 'REPORTS',
      route: '/Reports',
      // role: ['Associate'],
    },
  ];
  const userData = JSON.parse(localStorage.getItem("userData"));
  const user_Name = userData['name'];
  const userRole = userData['role'];

  
  let Logout = [
    {
      menu: '1',
      label: 'HR DASBOARD ',
      route: '/HRDashboard',
      role: ['HR'],
    },
    // {
    //   menu: '2',
    //   label: 'LEAVE APPLICATION',
    //   route: '/LeaveApplication',
    //   role: ['Senior Associate','Associate','Senior Analyst','Analyst'],
    // },
    // {
    //   menu: '3',
    //   label: 'LEAVE STATUS',
    //   route: '/LeaveStatus',
    //   role: ['Senior Associate','Associate','Senior Analyst','Analyst'],
    // },
    // {
    //   menu: '4',
    //   label: 'LEAVE APPROVAL',
    //   route: '/LeaveApproval',
    //   role: ['HR'],
    // },
    {
      menu: '5',
      label: 'EMPLOYEE DETAILS',
      route: '/EmployeeDetails',
      role: ['HR'],
    },
    {
      menu: '6',
      label: 'LOGOUT',
      route: '/',
      role: ['Senior Associate','Associate','Senior Analyst','Analyst','HR'],
    },
 
  ];

  Logout = Logout.filter((m) => m.role.includes(userRole));
  //   const handleClick = (event) => {
  //   //Prevent page reload
  //   // event.preventDefault();
  

  // };

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
          {Logout.map((m) => (
            <Nav.Item key={m.menu}>
              <Nav.Link href={m.route} className="border-none" >{m.label}</Nav.Link>
            </Nav.Item>
          ))}
          </NavDropdown>
            </Nav>
      </div>
    </>
  );
}

export default NavBar;
