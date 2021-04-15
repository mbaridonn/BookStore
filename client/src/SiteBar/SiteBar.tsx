import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const SiteBar = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/books/new">New Book</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
