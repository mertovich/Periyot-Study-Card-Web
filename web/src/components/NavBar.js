import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand style={{color:'white'}} href="#home">Study Card</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar