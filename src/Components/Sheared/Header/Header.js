import React from 'react';
import logo from '../../../logo.jpg';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { getAuth, signOut } from "firebase/auth";


const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut=()=>{

        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={"/"}><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/services"}>Our Services</Nav.Link>
                            <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>
                            {
                                user?
                                <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
                                :
                                <Nav.Link as={Link} to={"/signup"}>Sign up/Sign In</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                    <p>{user?.displayName}</p>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;