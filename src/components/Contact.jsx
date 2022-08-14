import React from 'react';
import Contact_img from "../img/contact-png.png";

const Menu = () => {
  return (
      <section className="contactPage-section">
        <div className="contactPage-bg">
          <h3>Get in Touch with Us</h3>
          <h2>contact us</h2>
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>


        <div className="contactPage-body">
          <div className="contactPage-info">
            <div>
              <span><i className="fas fa-mobile-alt"></i></span>
              <span>Phone No.</span>
              <span className="text">+91 9876543210</span>
            </div>
            <div>
              <span><i className="fas fa-envelope-open"></i></span>
              <span>E-mail</span>
              <span className="text">DeveloperAnkitKaushik@gmail.com</span>
            </div>
            <div>
              <span><i className="fas fa-map-marker-alt"></i></span>
              <span>Address</span>
              <span className="text">Near pvr Anupam, Saket, New delhi, delhi - 110062</span>
            </div>
            <div>
              <span><i className="fas fa-clock"></i></span>
              <span>Opening Hours</span>
              <span className="text">Monday - Friday (10:30 AM to 11:00 PM)</span>
            </div>
          </div>

          <div className="contactPage-form">
            <form>
              <div>
                <input type="text" className="form-control" placeholder="First Name" />
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
              <div>
                <input type="email" className="form-control" placeholder="E-mail" />
                <input type="text" className="form-control" placeholder="Phone" />
              </div>
              <textarea rows="5" placeholder="Message" className="form-control"></textarea>
              <input type="submit" className="send-btn" value="send message" />
            </form>

            <div>
              <img src={Contact_img} alt="" />
            </div>
          </div>
        </div>

        <div className="map">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223700.1490386933!2d-97.11558670486288!3d28.829485511234168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266db2e2dac3b%3A0xeee20d566f63267d!2sVictoria%2C%20TX%2C%20USA!5e0!3m2!1sen!2snp!4v1604921178092!5m2!1sen!2snp" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
        </div>
      </section>
  )
}

export default Menu