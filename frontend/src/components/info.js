import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ContactInfo() {
  return (
    <Card className='' style={{background: '#847d7d', padding: '50px 100px 300px 100px'}}>
      <div className='' style={{margin: '2px 8px -100px 8px', textAlign: 'justify', fontSize: '22px'}}><p>"Thank you for visiting San Diego Coastal Paradise! We hope you enjoyed exploring the stunning beaches and discovering the beauty of San Diego's coastline. We would love to hear from you! Whether you have feedback, questions, or just want to share your beach adventures, please don't hesitate to reach out. Your thoughts and experiences are invaluable to us as we strive to enhance your coastal paradise experience. Get in touch with us today and let's continue this beachcombing journey together!"</p></div>
      <Card.Body>
        <Card.Title style={{textAlign: 'center', padding: '100px 1px 1px 1px', margin: '10px 10px -90px 10px', fontSize: '25px'}}><strong>Contact Information</strong></Card.Title>
        <ListGroup variant="flush" style={{textAlign: 'center', fontSize: '20px', padding: '100px 350px 100px 350px'}}>
          <ListGroup.Item>
            <strong><img src ='https://cdn-icons-png.freepik.com/256/1/1257.png?semt=ais_hybrid' alt="phone" style={{width:"25px", height:"25px"}}></img> Phone:</strong> +1 (123) 456-7890
          </ListGroup.Item>
          <ListGroup.Item>
            <strong><img src ='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA3L2pvYjEwMjQtZWxlbWVudC0xMS1wLnBuZw.png' alt="email" style={{width:"25px", height:"25px"}}></img> Email:</strong> info@example.com
          </ListGroup.Item>
          <ListGroup.Item>
            <strong><img src ='https://static.thenounproject.com/png/2340040-200.png' alt="address" style={{width:"25px", height:"25px"}}></img> Address:</strong> 123 Main St, City, State, ZIP
          </ListGroup.Item>
          <ListGroup.Item>
            <strong><img src ='https://icons.veryicon.com/png/o/miscellaneous/hekr/operation-time.png' alt="hours" style={{width:"25px", height:"25px"}}></img> Hours of Operation:</strong> Monday - Friday: 9am - 5pm
          </ListGroup.Item>
          <br></br>
          <br></br>
          <div className='' style={{textAlign: 'center',  margin: '10px 10px -10px 10px', fontSize: '25px'}}><p><strong>Please Follow us on Social Media</strong></p></div>
          <ListGroup.Item>
            <strong><img src ='https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png' alt="twitter" style={{width:"25px", height:"25px"}}></img> Twitter:</strong> @SDCoastalParadise
          </ListGroup.Item>
          <ListGroup.Item>
            <strong><img src ='https://static.vecteezy.com/system/resources/previews/023/986/514/original/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png' alt="instagram" style={{width:"25px", height:"25px"}}></img> Instagram:</strong> @sandiegocoastalparadise
          </ListGroup.Item>
          <ListGroup.Item>
            <strong><img src ='https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png' alt="linkedin" style={{width:"25px", height:"25px"}}></img> Linkedin:</strong> San Diego Coastal Paradise
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <div className="container" style={{ padding: "1px" }}>
  <div className="row">
    <div className="col">
      <img
        src="https://media.istockphoto.com/id/465968656/photo/two-dolphins-jumping-in-the-sunset.jpg?s=612x612&w=0&k=20&c=sbMTU4sXwSjLAKU2YGjOqEhIyRtisTFyL6vkWZ8TJGU="
        alt="porpoise"
        className="img-fluid"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <div className="col">
      <img
        src="https://thesofiahotel.com/wp-content/uploads/2020/01/Surfers-watch-an-Oceanside-sunset.jpg"
        alt="surfing"
        className="img-fluid"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <div className="col">
      <img
        src="https://lajolla.com/wp-content/uploads/2017/10/torreypines1.jpg"
        alt="hiking"
        className="img-fluid"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <div className="col">
      <img
        src="https://www.sandag.org/-/media/SANDAG/CTA/meetings-and-events/working-groups/san-diego-regional-military/military-working-group-tile.jpg"
        alt="military"
        className="img-fluid"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <div className="col">
      <img
        src="https://visit-san-diego.netlify.app/static/media/rocks-ocean-birds-l.a5563257.jpg"
        alt="oceanside beach"
        className="img-fluid"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  </div>
</div>

    </Card>
  );
}

export default ContactInfo;
