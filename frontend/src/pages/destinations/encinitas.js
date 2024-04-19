import "../../App.css";
import React from 'react';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Card from 'react-bootstrap/Card';
import Footer from "../../components/footer";

const encinitas = () => {
  return (
    <div>
      <Navigation/>
      <Header/>
      
    <Card className="bg-dark text-white" style={{margin:"15px"}}>
      <Card.Img src="https://cdn.thecrazytourist.com/wp-content/uploads/2020/12/ccimage-shutterstock_1172798599.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title style={{textAlign:"center"}}>ENCINITAS BEACH <br></br><br></br> 33.0370° N, 117.2920° W</Card.Title>
        <Card.Text>
          <br></br>
          <div><strong>Address:</strong> <p>Encinitas, CA 92024</p></div>
          <div><strong>Hours of Operation:</strong> <p>24 hours</p></div>
          <div><strong>Parking:</strong> <p>Paid Parking Available along Highway 101 | Limited Street Parking</p></div>
          <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Picnic Tables and Benches Scattered along the Coastline | Rental Shops </p></div>
          <div><strong>Local Attractions:</strong> <p>Swami's | Boutique Shops, Cafes, and Restaurants | Scenic Coastal Bluffs with Panoramic Views | Botanic Garden</p></div>
          <div><strong>Dog Friendly:</strong> <p>Dogs are allowed on Beach before 10am and after 6pm | Dogs must be leashed </p></div>
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
      
    </Card>
      
      <Footer />
    </div>
    
  )
}

export default encinitas