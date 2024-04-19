import "../../App.css";
import React from 'react';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Card from 'react-bootstrap/Card';
import Footer from "../../components/footer";

const pacific = () => {
  return (
    <div>
      <Navigation/>
      <Header/>
      
    <Card className="bg-dark text-white" style={{margin:"15px"}}>
      <Card.Img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/39/ca/a4/crystal-pier-hotel-cottages.jpg?w=700&h=-1&s=1" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title style={{textAlign:"center"}}>PACIFIC BEACH <br></br><br></br> 32.8025° N, 117.2356° W</Card.Title>
        <Card.Text>
          <br></br>
          <div><strong>Address:</strong> <p> Pacific Beach, San Diego, CA 92109</p></div>
          <div><strong>Hours of Operation:</strong> <p>24 hours</p></div>
          <div><strong>Parking:</strong> <p>Paid Parking Available on Garnet Avenue| Limited Street Parking</p></div>
          <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Picnic Areas and Fire Pits | Rental Shops </p></div>
          <div><strong>Local Attractions:</strong> <p>Boardwalk | Crystal Pier| Surfing, paddleboarding, beach volleyball | Kate Sessions Park</p></div>
          <div><strong>Dog Friendly:</strong> <p>Dogs are allowed on the Boardwalk but not the Beach </p></div>
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
      
    </Card>

        <Footer />
      
    </div>
    
  )
}

export default pacific