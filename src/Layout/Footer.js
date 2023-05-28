import React from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';

export const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h4>About Us</h4>
                        <p>
                            Welcome to our news website, your trusted source for the latest
                            and most reliable news from around the world. We are dedicated to
                            delivering timely and accurate news coverage across various
                            categories including politics, business, technology, and sports.
                            However only 100 news calls can be made in a day
                        </p>

                    </Col>
                    <Col md={4}>
                        <h4>Categories</h4>
                        <ul className="list-unstyled">
                            <li><NavLink to="/politics">Politics</NavLink></li>
                            <li><NavLink to="/business">Business</NavLink></li>
                            <li><NavLink to="/technology">Technology</NavLink></li>
                            <li><NavLink to="/sports">Sports</NavLink></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h4>Contact Us</h4>
                        <p>123 Street, City, Country</p>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 123 456 7890</p>
                    </Col>
                </Row>
                <hr className="mt-4" />
                <Row>
                    <Col>
                        <p className="text-center">
                            &copy; 2023 Your News Website. All rights reserved. |{'  '}
                            <a className='text-warning' href="https://shivamanibrt-portfolio.vercel.app/shivamani" target="_blank" rel="noopener noreferrer">
                                Shivamani
                            </a>
                        </p>

                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
