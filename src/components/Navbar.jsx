import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse,
    MDBBtn
} from 'mdb-react-ui-kit';

function Navbar(props) {

    const [showNavColor, setShowNavColor] = useState(false);

    return (

        <MDBNavbar expand='lg' dark bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>iPhim</MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarColor02'
                    aria-controls='navbarColor02'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavColor(!showNavColor)}
                >
                    <MDBIcon icon={showNavColor ? 'window-close' : 'bars'} fas />
                </MDBNavbarToggler>
                <MDBCollapse show={showNavColor} navbar id='navbarColor02'>
                    <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                        <MDBNavbarNav>
                            <MDBNavbarItem className='active'>
                                <MDBNavbarLink aria-current='page' href='#'>
                                    HOME
                            </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>MOVIES</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>CELEBRITIES</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>NEWS</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>COMMUNITIES</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>

                        <MDBNavbarNav className='d-flex justify-content-end'>
                            <MDBNavbarItem >
                                <MDBNavbarLink href='#'>HELP</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#' onClick={() => { props.onOpenLoginForm() }}>LOGIN</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBBtn rounded className='mx-2' style={{ backgroundColor: "#dd003f" }}>
                                SIGNUP
                            </MDBBtn>
                        </MDBNavbarNav>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Navbar;