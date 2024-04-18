import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function GridExample() {
  // Array of objects containing card information
  const cardsData = [
    {
      image: 'https://www.pierfishing.com/wp-content/uploads/2017/03/IBP_2007_Pier6.jpg',
      title: 'Imperial Beach',
      text: 'Nestled in Southern California and home to 370 species of birds and considered one of the best birding areas in Southern California. Visit the Tijuana Estuary Visitor Center for maps of public trail systems and guided tours of the area.',
      link: '/imperial'
    },
    {
      image: 'https://greatruns.com/wp-content/uploads/2016/09/SanDiego5.jpg',
      title: 'Coronado Beach',
      text: 'Renowned for its sparkling golden sands, gentle waves, and iconic backdrop of the historic Hotel del Coronado. It is a favorite destination for sunbathing, swimming, and enjoying picturesque views of teh Pacific Ocean.'
    },
    {
      image: 'https://tanamatales.com/wp-content/uploads/2014/03/DSC04057.jpg',
      title: 'Ocean Beach',
      text: 'Famous for its bohemian vibe, vibrant community, and iconic pier. It is a haven for surfers, dog lovers, and artists, offering stunning sunsets and a laid-back atmosphere perfect for relaxation and exploration'
    },
    {
      image: 'https://resizer.otstatic.com/v2/photos/wide-huge/1/32428515.jpg',
      title: 'Mission Beach',
      text: 'One more card with its own text.'
    },
    {
      image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/152000/152282-Pacific-Beach.jpg',
      title: 'Pacific Beach',
      text: 'Fifth card text.'
    },
    {
      image: 'https://fox5sandiego.com/wp-content/uploads/sites/15/2023/04/AdobeStock_284439394.jpeg?w=2560&h=1440&crop=1',
      title: 'La Jolla Beach',
      text: 'Sixth card text.'
    },
    {
      image: 'https://www.cardiffvacations.com/media/images/moonlight-state-beach.jpg',
      title: 'Encinitas Beach',
      text: 'Seventh card text.'
    },
    {
      image: 'https://grubbyspoke.com/wp-content/uploads/2021/12/Best-things-to-do-in-carlsbad-ca.jpg',
      title: 'Carlsbad Beach',
      text: 'Eighth card text.'
    },
    {
      image: 'https://www.thebrickhotel.com/area-guide/activities/beach/us_oceanside_us_header/',
      title: 'Oceanside Beach',
      text: 'Ninth card text.'
    }
  ];

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {cardsData.map((card, idx) => (
        <Col key={idx}>
          <Card style={{border: '10px outset #ffb79d', margin: '10px 30px 10px 30px', padding: '10px 10px 10px 10px' }}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                {card.text}
              </Card.Text>
              {/* Use Link component instead of Button */}
              <Link to={card.link}>
                <Button variant="info">Dive Deeper</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
