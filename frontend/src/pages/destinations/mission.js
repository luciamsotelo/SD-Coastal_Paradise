import "../../App.css";
import React from 'react';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Card from 'react-bootstrap/Card';
import Footer from "../../components/footer";

const mission = () => {
  return (
    <div>
      <Navigation/>
      <Header/>
      
    <Card className="bg-dark text-white" style={{margin:"15px"}}>
      <Card.Img src="https://cloudinary-assets.dostuffmedia.com/res/dostuff-media/image/upload/venue-17100/1434667193.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title style={{textAlign:"center"}}>MISSION BEACH <br></br><br></br> 32.7707° N, 117.2514° W</Card.Title>
        <Card.Text>
          <br></br>
          <div><strong>Address:</strong> <p> Mission Beach, CA 92109</p></div>
          <div><strong>Hours of Operation:</strong> <p>Open 24/7</p></div>
          <div><strong>Parking:</strong> <p>Paid Parking Lots available along Mission Blvd | Limited Free Parking (especially during peak hours)</p></div>
          <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Rental Shops and Dining | Picnic Areas and Fire Pits </p></div>
          <div><strong>Local Attractions:</strong> <p>Famous Boardwalk | Belmont Park | Volleyball Courts | Gym with Ocean View</p></div>
          <div><strong>Dog Friendly:</strong> <p>Dog-friendly hours vary | Dogs must be leashed at all times</p></div>
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
      
    </Card>

        <Footer />
      
    </div>
    
  )
}

export default mission