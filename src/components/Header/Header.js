
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Header.css';



const Header = () => {
  const {user, logOut} = useAuth();
  console.log(user);
    return (
        <>
        <Navbar className="top" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand href="#home">  <h1 className="text-dark fw-bold">DiagnosticLab</h1></Navbar.Brand>
          <Navbar.Toggle />
            <Navbar.Collapse className="  justify-content-end">
                <Link className="px-2 header" to="/home">Home</Link>
                <Link className="px-2 header" to="/services">Services</Link>
                {user?.email ? 
                   <Button className=" header log-btn" onClick={logOut} variant="light">Logout</Button>:
                <Link className="px-2 header log-btn"as={Link} to="/login">Login</Link>}
               
            <Navbar.Text>
               <a href="#login" className="text-dark name">{user?.displayName}</a>
            </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;