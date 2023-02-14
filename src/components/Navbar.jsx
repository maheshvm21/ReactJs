import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
// import  AiFillHome  from 'react-icons/AiFillHome';
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const internalStyle = {
    margin:"8px 9px 9px 9px",
  };
  const pages = [
    { name: <AiFillHome style={{marginTop:"-5px"}}/>, route: "/dashboard" },
    { name: "Receving", route: "/reports" },
  ];
  const dropDwonpage = [

    { name: "Manage user profile", route: "/user-profile" }

  ];
  return (
    <div>
      <Navbar  expand="lg" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center mx-auto ">
            {pages.map((names) => (
              <NavLink to={names.route} activeStyle>
                <p style={internalStyle}>{names.name}</p>
              </NavLink>
            ))}
            <NavDropdown
              title="Administration"
              id="basic-nav-dropdown"
              style={{color:"#1988FF"}}
              
            >
              {dropDwonpage.map((v) => (
                 <NavLink to={v.route} activeStyle>
                 <p style={internalStyle}>{v.name}</p>
               </NavLink>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
