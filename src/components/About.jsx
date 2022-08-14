import React from 'react';
import Mypic from "../img/myPic.jpg";

const About = () => {
  return (
    <>
      <div className="section_about">
        <div className="container_about">
          <div className="content-section">
            <div className="title">
              <h1>About Us</h1>
            </div>
            <div className="content">
              <p>Kaushik's Kitchen is an e-commerce company that sells cooked food and prepares tasty food. We have our own delivery service and can deliver the food within 2 hours of receiving the order. The picture on the right side is the owner and creator of this wonderful looking website. This website is still under development, so if any links do not work, please keep in mind that this website is not yet finished. </p>
              <div className="button">
                <a href="">Read More</a>
              </div>
            </div>
            <div className="social">
              <a href="https://www.youtube.com/channel/UC3eYZNxprdT8e88w5xUHoLg" target="_blank"><i className="fab fa-youtube"></i></a>
              <a href="https://twitter.com/Ankit_kaushik0" target="_blank"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/ankit_kaushik6269/" target="_blank"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="image-section">
            <img src={Mypic} />
          </div>
        </div>
      </div>
    </>
  )
}

export default About;