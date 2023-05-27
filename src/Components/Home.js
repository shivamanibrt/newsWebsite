import React, { useEffect, useState } from 'react';
import { CardHolder } from './CardHolder';
import { Col, Container, Row } from 'react-bootstrap';
import { getNews } from '../Api Handel/ApiCall';


export const Home = () => {
    // const [news, setNews] = useState([]);

    // useEffect(() => {
    //     fetchNews();
    // }, []);

    // const fetchNews = async () => {
    //     const newsData = await getNews();
    //     setNews(newsData)
    //     console.log(news)
    // };

    return (
        <div>
            <Container className="bg-warning p-4 rounded mt-3">
                <Row><h1 className='text-center text-dark'>Highlights of the day</h1></Row>
                <Row className="mt-2 mb-2">
                    <Col xs={12} md={6}>
                        <Col className="mb-2 custom-card">
                            <CardHolder />
                        </Col>
                    </Col>
                    <Col xs={12} md={6}>
                        <Col>
                            <Col className="mb-2">
                                <CardHolder />
                            </Col>
                        </Col>
                    </Col>
                </Row>
            </Container>

            <Container className="p-3 s mt-4 mb-4">
                <Row><h1 className='text-center text-dark'>Searched News</h1></Row>
                <Row className="mt-2 mb-2">
                    <CardHolder />
                </Row>
            </Container>
        </div>
    );
};
