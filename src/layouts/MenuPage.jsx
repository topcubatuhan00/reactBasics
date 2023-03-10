import React from 'react'
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import {  Offcanvas } from 'react-bootstrap';

export default function MenuPage({isShow, setShow}) {
    const handleDeneme = () => {
        setShow(false)
    }
   return (
        <div>
            <Offcanvas className='bg-dark' show={isShow}>
                <Offcanvas.Header className='bg-light' closeButton onClick={() => handleDeneme()}>
                    <Offcanvas.Title>Menü</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Menu className='navi ui fixed inverted main menu bg-dark' size='massive' vertical style={{ marginTop: '56px' }}>
                        <Menu.Item>

                            <Menu.Header>Stok Islemleri</Menu.Header>

                            <Menu.Menu>
                                <Menu.Item icon='add' name='Stok Ekle' as={NavLink} to='/stockAdd' />
                                <Menu.Item icon='list' name='Stok Listele' as={NavLink} to="/stock" />
                            </Menu.Menu>
                        </Menu.Item>

                        <Menu.Item>
                            <Menu.Header>Kategori Islemleri</Menu.Header>

                            <Menu.Menu>
                                <Menu.Item icon='add' name='Kategori Ekle' />
                                <Menu.Item icon='edit' name='Kategori Güncelle' />
                                <Menu.Item icon='delete' name='Kategori Kaldır' />
                                <Menu.Item icon='list' name='Kategori Listele' />
                            </Menu.Menu>
                        </Menu.Item>

                        <Menu.Item>
                            <Menu.Header>Kategori Islemleri</Menu.Header>

                            <Menu.Menu>
                                <Menu.Item icon='add' name='Kategori Ekle' />
                                <Menu.Item icon='edit' name='Kategori Güncelle' />
                                <Menu.Item icon='delete' name='Kategori Kaldır' />
                                <Menu.Item icon='list' name='Kategori Listele' />
                            </Menu.Menu>
                        </Menu.Item>

                        <Menu.Item>
                            <Menu.Header>Kategori Islemleri</Menu.Header>

                            <Menu.Menu>
                                <Menu.Item icon='add' name='Kategori Ekle' />
                                <Menu.Item icon='edit' name='Kategori Güncelle' />
                                <Menu.Item icon='delete' name='Kategori Kaldır' />
                                <Menu.Item icon='list' name='Kategori Listele' />
                            </Menu.Menu>
                        </Menu.Item>

                    </Menu>
                </Offcanvas.Body>
            </Offcanvas>







            {/* <Navbar fixed='top' expand="lg">
                <Container >
                    <Navbar.Text className='lightText' as={NavLink} to="/">Ana Sayfa</Navbar.Text>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <NavDropdown size='lg' title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" className='lightText'>Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

        </div>
    )
}
