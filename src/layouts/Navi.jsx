import React from 'react'

import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export default function Navi({setShowed, showed}) {
    const handleShow = () =>{
        setShowed(!showed)
        console.log(showed)
    } 

    return (
        <div>
            <Navbar bg="dark" variant='dark' style={{fontSize:'18px'}} fixed='top'  expand="lg" >
                <Container>
                    <Button  onClick={() => handleShow()} className="ui grey basic button me-5">Menu</Button>
                    <Navbar.Brand as={NavLink} to="/" className="me-5 ms-5">Ana Sayfa</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-5">
                            <Nav.Link className="me-auto" as={NavLink} to="/stockadd">Stok Ekle</Nav.Link>
                            <Nav.Link className="me-auto" as={NavLink} to="/stock">Stok Listele</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
