import React from 'react';
import { FaMugHot } from "react-icons/fa"

const Service = () => {
  return (
    <div className="section_service">
      <div className="row">
        <h2 className="service-heading">Our Services</h2>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-hammer"></i>
            </div>
            <h3 className='service_h3'>Food Serving</h3>
            <p>
              We also have a dining facility. if you are in the neighborhood, please stop by.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-brush"></i>
            </div>
            <h3 className='service_h3'>Interior Designing</h3>
            <p>
              We also provide interior design services for the food industry. if you require an interior designer, please contact us. we are expecting to grow in that industry.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-wrench"></i>
            </div>
            <h3 className='service_h3'>Website Developing</h3>
            <p>
              We also provide web development services. if you are interested in creating your own website, we can be of great assistance, please contact us if you are interested.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-truck-pickup"></i>
            </div>
            <h3 className='service_h3'>Free Food Delivery</h3>
            <p>
              We offer free food delivery within 30 minutes if you order more than Rs.300 and live within a 2km radius.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service