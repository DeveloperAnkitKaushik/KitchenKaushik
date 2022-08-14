import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Kaushik's Kitchen</h4>
                        <ul>
                            <Link to="/about" className='footer_link'><a href="#">About Us</a></Link>
                            <Link to="/Menu" className='footer_link'><a href="#">Menu</a></Link>
                            <Link to="/service" className='footer_link'><a href="#">our services</a></Link>
                            <Link to="/" className='footer_link'><a href="#">privacy policy</a></Link>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <Link to="/" className='footer_link'><a href="#">FAQ</a></Link>
                            <Link to="/" className='footer_link'><a href="#">shipping</a></Link>
                            <Link to="/" className='footer_link'><a href="#">returns</a></Link>
                            <Link to="/" className='footer_link'><a href="#">order status</a></Link>
                            <Link to="/" className='footer_link'><a href="#">payment options</a></Link>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Menu</h4>
                        <ul>
                            <Link to="/" className='footer_link'><a href="#">South Indian</a></Link>
                            <Link to="/" className='footer_link'><a href="#">Curry</a></Link>
                            <Link to="/" className='footer_link'><a href="#">IceCreams</a></Link>
                            <Link to="/" className='footer_link'><a href="#">Soft Drinks</a></Link>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="https://www.youtube.com/channel/UC3eYZNxprdT8e88w5xUHoLg" target="_blank"><i className="fab fa-youtube"></i></a>
                            <a href="https://twitter.com/Ankit_kaushik0" target="_blank"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/ankit_kaushik6269/" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/ankit-kaushik-2a5049203/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="tag_line">Copyright©2022 All rights reserved | Made by <span>Ankit Kaushik</span></div>
            </div>
        </footer>
    )
}

export default Footer;