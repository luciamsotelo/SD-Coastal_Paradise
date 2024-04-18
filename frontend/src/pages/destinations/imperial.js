import "../../App.css";
import React from 'react';
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Card from 'react-bootstrap/Card';

const imperial = () => {
  return (
    <div>
      <Navigation/>
      <Header/>
      
    <Card className="bg-dark text-white" style={{margin:"15px"}}>
      <Card.Img src="https://www.imperialbeachca.gov/ImageRepository/Document?documentID=84" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Imperial Beach</Card.Title>
        <Card.Text>
          <div><strong>Address:</strong></div><p>1111 N. Harbor </p>
        
        <strong>Hours of Operation:</strong>
        </Card.Text>
        <Card.Text>32.5839° N, 117.1131° W</Card.Text>
      </Card.ImgOverlay>
      
    </Card>
      
    </div>
    
  )
}

export default imperial