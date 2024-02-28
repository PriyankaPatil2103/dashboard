import React from 'react'
import { useState } from 'react'
import { Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MdOutlineDashboardCustomize } from "react-icons/md";

function MyOffcanvas() {
    const [show,setShow]=useState(false)

    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
  return (
    <div>

        <Navbar>
           
            <Navbar.Brand>
            <MdOutlineDashboardCustomize
              size={28}
              style={{ paddingRight: 5 }}
              onClick={handleShow}
            />Foodiiees</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-nav-bar'></Navbar.Toggle>
            <Navbar.Collapse id='responsive-nav-bar'>
            </Navbar.Collapse>

          </Navbar>
        <Offcanvas placement='end' show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <Nav className='flex-column'>
                    <Nav.Link onClick={handleClose}>
                        <Link to="/">Dashboard</Link>
                    </Nav.Link>
                    <Nav.Link onClick={handleClose}>
                        <Link to="/Addfood">Addfood</Link>
                    </Nav.Link>
                    <Nav.Link onClick={handleClose}>
                        <Link to="/Allfood">Allfood</Link>
                    </Nav.Link>
                    <Nav.Link onClick={handleClose}>
                        <Link to="/Orders">Orders</Link>
                    </Nav.Link>
                    <Nav.Link onClick={handleClose}>
                        <Link to="/Customerlist">Customerlist</Link>
                    </Nav.Link>
                    <Nav.Link onClick={handleClose}>
                        <Link to="/Orderdetails">Order Details</Link>
                    </Nav.Link>
                </Nav>
                
            </Offcanvas.Body>
        </Offcanvas>
       
    </div>
  )
}

export default MyOffcanvas