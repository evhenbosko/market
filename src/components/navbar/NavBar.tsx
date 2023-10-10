


import { NavLink } from 'react-router-dom';
import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Switch from '../switch/Switch';
import { BsFillCartFill } from "react-icons/bs";
function NavBar() {
const [theme,setTheme]=useState("none")
    return (
    <>
      <Navbar fixed='top' bg="primary" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/products">prod </NavLink>
            <NavLink to="/basket"><BsFillCartFill/> </NavLink>
            <NavLink to="/">home </NavLink>
            <NavLink to="/contacts">contacts </NavLink>
            <NavLink to="/about">about </NavLink>
          </Nav>
          <Switch/>
          <button onClick={()=>{if(theme==="none"){setTheme("flex")}else{setTheme("none")}}}>ch</button>
        </Container>
      </Navbar>

      <br />
      <Navbar fixed='top' style={{display:theme}} bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;


