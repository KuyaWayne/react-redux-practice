import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function NavigationBar() {
  return (
    <Navbar className="bg-primary" fixed="top">
        <Container fluid>
          <Navbar.Brand className="text-light" href="#home">React Redux Test</Navbar.Brand>

          <Navbar.Toggle />
          
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-light">
              Signed in as: <a href="#login" className="text-light">Wayne Faustorilla</a>
            </Navbar.Text>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
  );
}
