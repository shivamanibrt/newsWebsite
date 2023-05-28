import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const CardHolder = ({ newsData }) => {
    return (
        <>
            <Card className="bg-light d-flex flex-column align-items-center" style={{ minHeight: '200px' }}>
                <Card.Img
                    src={newsData?.image_url}
                    alt="Card image"
                    style={{ maxHeight: '300px' }}
                />
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title>{newsData?.title?.slice(0, 50)}</Card.Title>
                    <Card.Text>{newsData?.content?.slice(0, 50)}...</Card.Text>
                    <Card.Text>Type: {newsData?.category}</Card.Text>
                    <Card.Text className="text-primary">Published date: {newsData?.pubDate}</Card.Text>
                    <Button variant="primary" href={newsData?.link} target="_blank">Read More</Button>
                </Card.Body>
            </Card>

        </>
    );
}
