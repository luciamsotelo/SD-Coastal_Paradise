import React from 'react'

const title = () => {
  return (
    <div style={{background: "#ffeae3", paddingBottom:"400px"}}>
      <h1 className="pt-2 text-center"
                      style={{
                        background: "#0095b6",
                        fontSize: "75px",
                        color: "#ffb79d",
                        textShadow: "2px 5px 10px #0dba86",
                        width: "100vw",}}>San Diego Coastal Paradise</h1>
      <p className="" style={{
                        border:"3px solid #ffb79d", 
                        padding:"40px",
                        margin:"125px 300px 1px 300px",
                        fontSize:"23px",
                        textAlign: "justify",
                        fontFamily: "trebuchet ms",}}>
                  "Welcome to San Diego Coastal Paradise – where every wave brings new adventures! Whether you're dipping your toes for the first time or a seasoned beachcomber, join our community of beach buddies today by sharing your name and email. Dive into the ocean of experiences awaiting you! Already part of our crew? Welcome back! Let's start beachcombing together!" </p>
      <div className="container" style={{paddingTop:"75px"}}>
        <div className="row">
          <div className="col">
            <img src="https://www.prettyfluffy.com/wp-content/uploads/2022/04/Pet-Friendly-Gippsland-Pretty-Fluffy-Travel_-811.jpg" alt="dog beach" className="img-fluid" />
          </div>
          <div className="col">
            <img src="https://a.cdn-hotels.com/gdcs/production167/d76/2a15eef8-7360-464c-89f2-d48953b9edcb.jpg" alt="mission beach" className="img-fluid" />
          </div>
          <div className="col">
            <img src="https://live.staticflickr.com/574/33071773625_99d0c69fd9_b.jpg" alt="la jolla seals" className="img-fluid" />
          </div>
          <div className="col">
            <img src="https://cdn.shopify.com/s/files/1/2516/8932/products/NewPierGold7-12-22_2000x.jpg?v=1657654002" alt="oceanside beach" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default title;