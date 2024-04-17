import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function GridExample() {
  // Array of objects containing card information
  const cardsData = [
    {
      image: 'https://lajollamom.com/wp-content/uploads/2019/02/best-pacific-beach-beaches-1.jpg',
      title: 'Imperial Beach',
      text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      image: 'https://lajollamom.com/wp-content/uploads/2019/02/best-pacific-beach-beaches-1.jpg',
      title: 'Coronado Beach',
      text: 'Another card with different content.'
    },
    {
      image: 'https://lajollamom.com/wp-content/uploads/2019/02/best-pacific-beach-beaches-1.jpg',
      title: 'Ocean Beach',
      text: 'Yet another card with unique content.'
    },
    {
      image: 'https://lajollamom.com/wp-content/uploads/2019/02/best-pacific-beach-beaches-1.jpg',
      title: 'Mission Beach',
      text: 'One more card with its own text.'
    },
    {
      image: 'https://lajollamom.com/wp-content/uploads/2019/02/best-pacific-beach-beaches-1.jpg',
      title: 'Pacific Beach',
      text: 'Fifth card text.'
    },
    {
      image: 'https://lajollamom.com/wp-content/uploads/2019/02/best-pacific-beach-beaches-1.jpg',
      title: 'La Jolla Beach',
      text: 'Sixth card text.'
    },
    {
      image: 'https://lajollamom.com/wp-content/uploads/2019/02/best-pacific-beach-beaches-1.jpg',
      title: 'Encinitas Beach',
      text: 'Seventh card text.'
    },
    {
      image: 'https://lajollamom.com/wp-content/uploads/2019/02/best-pacific-beach-beaches-1.jpg',
      title: 'Carlsbad Beach',
      text: 'Eighth card text.'
    },
    {
      image: 'https://lajollamom.com/wp-content/uploads/2019/02/best-pacific-beach-beaches-1.jpg',
      title: 'Oceanside Beach',
      text: 'Ninth card text.'
    }
  ];

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {cardsData.map((card, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                {card.text}
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
