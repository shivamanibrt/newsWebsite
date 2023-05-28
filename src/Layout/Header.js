import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsNewspaper } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from '../Redux/setSearchTerm';


export const Header = () => {

    const searchInputRef = useRef('');
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const searchTerm = searchInputRef.current.value;
        dispatch(setSearchTerm(searchTerm));

    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ fontSize: '2rem' }}>
                    <BsNewspaper /> SNews
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
                    <Form className="d-flex" onSubmit={handleOnSubmit}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            ref={searchInputRef}
                        />
                        <Button variant="outline-dark" type="submit">
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
