import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

const Encinitas = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Row>
      <Col md={6} style={{ marginBottom: "15px" }}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
            <Card.Img src="https://cdn.thecrazytourist.com/wp-content/uploads/2020/12/ccimage-shutterstock_1172798599.jpg" alt="Card image" style={{ height: "100%" }} />
            <Card.ImgOverlay>
              <Card.Title style={{ textAlign: "center", marginTop: "40%" }}>ENCINITAS BEACH <br /><br /> 33.0370° N, 117.2920° W</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-dark text-white" style={{ margin: "15px", height: "100%" }}>
          <Card.Body style={{ marginBottom: "30px"}}>
              <Card.Title style={{ textAlign: "center" }}>Details</Card.Title>
              <Card.Text>
                <div><strong>Address:</strong> <p>Encinitas, CA 92024</p></div>
                <div><strong>Hours of Operation:</strong> <p>24 hours</p></div>
                <div><strong>Parking:</strong> <p>Paid Parking Available along Highway 101 | Limited Street Parking</p></div>
                <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Picnic Tables and Benches Scattered along the Coastline | Rental Shops </p></div>
                <div><strong>Local Attractions:</strong> <p>Swami's | Boutique Shops, Cafes, and Restaurants | Scenic Coastal Bluffs with Panoramic Views | Botanic Garden</p></div>
                <div><strong>Dog Friendly:</strong> <p>Dogs are allowed on Beach before 10am and after 6pm | Dogs must be leashed </p></div>
              </Card.Text>
              <Link to="/beaches" className="btn btn-info" style={{ textAlign: "center", display: "block", padding: "10px" }}>Explore More Beaches</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default Encinitas;
