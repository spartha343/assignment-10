import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { price, pic, name, disc } = props.service
    return (
        <Col xs={12} md={4}>

            <Card style={{ maxWidth: '18rem', margin: "20px" }}>
                <Card.Img variant="top" src={pic} />
                <Card.Body>
                    <Card.Title>{name} <span>{price}</span></Card.Title>
                    <Card.Text>
                        {disc}
                    </Card.Text>
                    <Link to={'/checkout'}> <Button variant="primary"> Buy now </Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;