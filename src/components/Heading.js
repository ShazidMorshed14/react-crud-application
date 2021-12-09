import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";

const Heading = () => {
  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand>Name List</NavbarBrand>
        <Nav>
          <NavItem>
            <Link to="/add" className="btn btn-primary">
              Add User
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Heading;
