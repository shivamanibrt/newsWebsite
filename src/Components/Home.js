import React, { useState, useEffect } from 'react';
import { CardHolder } from './CardHolder';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getNews } from '../Api Handel/ApiCall';

export const Home = () => {
    const [newsData, setNewsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { reduxNews } = useSelector((state) => state.reduxNews);

    useEffect(() => {
        fetchNews();
    }, [reduxNews]);

    const fetchNews = async () => {
        try {
            const data = await getNews('Highlight');
            setNewsData(data.results);
            setIsLoading(false);
        } catch (error) {
            console.error('Error message:', error.message);
        }
    };

    return (
        <div>
            <Container className="shadow-lg p-4 rounded mt-3">
                <Row>
                    <h1 className='text-center '>Highlights of the day</h1>
                </Row>
                <Row className="mt-2 mb-2">
                    {newsData.slice(0, 2).map((news, index) => (
                        <Col xs={12} md={6} key={index}>
                            <Col className="mb-2 custom-card">
                                <CardHolder newsData={news} />
                            </Col>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container className="p-3 mt-4 mb-4 ">
                <Row >
                    {reduxNews.length ? (
                        <h1 className='text-center text-dark'>Searched Result ...</h1>
                    ) : null}
                </Row>

                <Row className="mt-2 mb-2 p-4 rounded mt-3 ">
                    {isLoading ? (
                        <Spinner animation="border" />
                    ) : (
                        reduxNews.slice(0, 4).map((news, index) => (
                            <Col xs={12} md={6} key={index} className='mb-3'>
                                <Col className="mb-2 custom-card">
                                    <CardHolder newsData={news} />
                                </Col>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
};
