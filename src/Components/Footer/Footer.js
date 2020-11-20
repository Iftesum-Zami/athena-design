import React from 'react';
import './Footer.css';

import logo from '../../images/logo.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import linkedin from '../../images/linkedin.png';
import dribbble from '../../images/dribbble.png';
import behance from '../../images/behance.png';

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 footer-logo">
                        <img className="img-fluid" src={logo} alt="athene"/>
                        <div className="social-link">
                            <img className="img-fluid" src={facebook} alt="facebook"/>
                            <img className="img-fluid" src={twitter} alt="twitter"/>
                            <img className="img-fluid" src={linkedin} alt="linkedin"/>
                            <img className="img-fluid" src={dribbble} alt="dribbble"/>
                            <img className="img-fluid" src={behance} alt="behance"/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="row footer-col">
                            <div className="col-md-4">
                                <ul className="list-group">
                                    <li className="list-group-item"><a href="/">Features</a></li>
                                    <li className="list-group-item"><a href="/">Enterprise</a></li>
                                    <li className="list-group-item"><a href="/">Pricing</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-group">
                                    <li className="list-group-item"><a href="/">Blog</a></li>
                                    <li className="list-group-item"><a href="/">Help Center</a></li>
                                    <li className="list-group-item"><a href="/">Contact us</a></li>
                                    <li className="list-group-item"><a href="/">Status</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-group">
                                    <li className="list-group-item"><a href="/">About us</a></li>
                                    <li className="list-group-item"><a href="/">Terms of Service</a></li>
                                    <li className="list-group-item"><a href="/">Security</a></li>
                                    <li className="list-group-item"><a href="/">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;