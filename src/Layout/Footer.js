import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <h4>About Us</h4>
                        <p>Welcome to our news website, your trusted source for the latest and most reliable news from around the world. We are dedicated to delivering timely and accurate news coverage across various categories including politics, business, technology, and sports.</p>
                        <p>Our team of experienced journalists and reporters work tirelessly to provide in-depth analysis, investigative reports, and captivating stories that keep you informed and engaged. We strive to deliver news with integrity, impartiality, and respect for diverse perspectives.</p>
                    </Col>
                    <Col md={4}>
                        <h4>Categories</h4>
                        <ul className="list-unstyled">
                            <li>Politics</li>
                            <li>Business</li>
                            <li>Technology</li>
                            <li>Sports</li>
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
                        <p className="text-center">&copy; 2023 Your News Website. All rights reserved. | Shivamani</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

