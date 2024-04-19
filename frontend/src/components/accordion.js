import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridExample() {
  // Array of objects containing card information
  const cardsData = [
    {
      name: 'Carlos Hernandez',
      image: 'https://img.freepik.com/fotos-kostenlos/laptop-auf-steinoberflaeche-und-meer-hintergrund_1232-430.jpg',
      description: 'Carlos Hernandez is a versatile software engineer specializing in full-stack development with a predominant focus on backend systems. With a proven track record in both front-end and back-end technologies, Carlos brings a holistic approach to software engineering. His expertise lies in designing and implementing robust backend architectures, optimizing database performance, and developing scalable RESTful APIs. Carlos is proficient in languages such as JavaScript, Python, and Java, along with frameworks like Node.js, Express, and Django. He excels in problem-solving, collaborating cross-functionally, and delivering high-quality solutions that drive business growth.'
    },
    {
      name: 'Lucia Sotelo',
      image: 'https://t4.ftcdn.net/jpg/01/28/49/55/360_F_128495561_AxOj0KERPU6Vp4w3OWJqnkDySIsRMqHM.jpg',
      description: 'Lucia Sotelo is a dedicated front-end developer and UX/UI specialist with a keen eye for detail and a passion for crafting exceptional user experiences. With expertise in HTML, CSS, and JavaScript, Lucia brings designs to life with fluidity and elegance. Her proficiency in modern front-end frameworks such as React and Angular enables her to create intuitive and responsive interfaces that captivate users. Lucia excels in wireframing, prototyping, and conducting usability tests to optimize user journeys. With a commitment to innovation and user-centric design, Lucia elevates digital experiences to new heights of excellence.'
    },
    {
      name: 'Ting-Yu Cheng',
      image: 'https://i.pinimg.com/736x/8b/9c/d1/8b9cd167c0366c0e24a9ef9b82b38784.jpg',
      description: 'Ting-Yu, originally an artist, embarked on a transformative journey into education after sharing expertise in fine art and English instruction in Japan. Driven by insatiable curiosity, Ting-Yu delved into coding post-graduation, igniting a passion. Graduating from a full-stack engineering boot camp, they transitioned seamlessly into a full-stack software engineer role, thriving in the field. Fluent in English, Mandarin Chinese, Japanese, and JavaScript, Ting-Yu masters Taiwanese, Spanish, and delves into C++. Beyond coding, they find fulfillment teaching and cherish time with their canine companions, adding warmth and joy to daily adventures.'
    },
    {
      name: 'Sebastian Damazo',
      image: 'https://t4.ftcdn.net/jpg/01/63/58/67/360_F_163586730_6DGv1mQFOR0Pm3SxgpwY6HTCmEw9emFa.jpg',
      description: 'Sebastian Damas is a dynamic Backend Software Engineer at MeltWater, where their expertise shines in crafting innovative solutions. Armed with a B.S. in Mathematical Science from the University of California, Santa Barbara, Sebastian\'s analytical prowess drives their success. Beyond coding, they find solace in various hobbies, from conquering miles on the running trails to sculpting his physique through workouts. Sebastian\'s culinary adventures in the kitchen are matched only by their love for music festivals, where they immerse themselves in electrifying beats. With a zest for life and a passion for code, Sebastian embraces each day with boundless energy and creativity.'
    }
  ];

  return (
    <>
      <div style={{ padding: "1px", margin: "30px 10px 3px 10px", textAlign: "justify" }}>
        <p>"Welcome to San Diego Coastal Paradise, where every seashell tells a story and every wave beckons for adventure! We're the team behind this digital oasis, a group of passionate coastal enthusiasts dedicated to bringing the sun-soaked shores of San Diego right to your fingertips. With a deep love for sandy toes and ocean breezes, we've crafted this app as a tribute to the beauty and charm of California's coastline. Join us on this sandy journey as we navigate the tides of technology and explore the endless horizons of beachcombing bliss."</p>
      </div>
      <Row xs={1} md={2} className="g-4">
        {cardsData.map((card, idx) => (
          <Col key={idx}>
            <Card className="" style={{ padding: "15px", border: "5px solid #ffb79d", margin: "10px" }}>
              {/* You can adjust the card's layout as needed */}
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>
                  {card.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default GridExample;
