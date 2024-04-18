import "../../App.css";
import React from 'react';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Card from 'react-bootstrap/Card';

const carlsbad = () => {
  return (
    <div>
      <Navigation/>
      <Header/>
      
    <Card className="bg-dark text-white" style={{margin:"15px"}}>
      <Card.Img src="https://media.istockphoto.com/id/466290466/photo/california-beach-sunset-bright-orange-and-pink.jpg?s=612x612&w=0&k=20&c=VP8rqlszfxrVKK3EwKXlhuUSRi48Q63xIxmJOtoYVSo=" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title style={{textAlign:"center"}}>CARLSBAD BEACH <br></br><br></br> 33.1543° N, 117.3510° W</Card.Title>
        <Card.Text>
          <br></br>
          <div><strong>Address:</strong> <p>Carlsbad, CA 92008</p></div>
          <div><strong>Hours of Operation:</strong> <p>24 hours</p></div>
          <div><strong>Parking:</strong> <p>Paid Parking Available Carlsbad Boulevard | Limited Street Parking</p></div>
          <div><strong>Facilities & Amenities:</strong> <p>Restrooms | Outdoor Shower | Rental Shops  Offering Equipment for Surfing, Boogie Boarding and Beach Games</p></div>
          <div><strong>Local Attractions:</strong> <p>Family-Friendly Atmosphere | Scenic Coastal Trails for Walking, Jogging, and Cycling | Shops and Restaurants | Art Galleries | Legoland</p></div>
          <div><strong>Dog Friendly:</strong> <p>Dogs are allowed on Beach all Day from September 15th to June 15th | Dogs must be leashed </p></div>
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
      
    </Card>
      
    </div>
    
  )
}

export default carlsbad