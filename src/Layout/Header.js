import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsNewspaper } from 'react-icons/bs'
import { Link } from 'react-router-dom';
export const Header = () => {

    const searchInputRef = useRef('')
    const [searchTerm, setSearchTerm] = useState();

    const handelOnSubmit = (e) => {
        e.preventDefault();
        const searchTerms = searchInputRef.current.value;
        setSearchTerm(searchTerms)
        console.log(searchTerm)
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ fontSize: '2rem' }}><BsNewspaper /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>

                    </Nav>
                    <Form className="d-flex" onSubmit={handelOnSubmit}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            ref={searchInputRef}
                        />
                        <Button variant="outline-success" type='submit'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
