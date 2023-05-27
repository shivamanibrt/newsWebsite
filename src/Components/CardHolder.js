import Card from 'react-bootstrap/Card';

export const CardHolder = ({ newItem }) => {
    return (
        <>
            <Card className="bg-light text-dark" style={{ minHeight: '300px', minWidth: '500px' }}>
                <Card.Img src="holder.js/100px270" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{newItem?.articles?.title}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </>
    );
}
