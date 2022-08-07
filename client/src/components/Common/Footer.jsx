import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import footerShapeOne from '../../assets/images/footer-shape1.png';
import footerShapeTwo from '../../assets/images/footer-shape2.png';
import GoTop from './GoTop';
 
class Footer extends React.Component {
    render(){
        return (
            <>
                <footer className="footer-area uk-dark uk-footer">
                    <div className="uk-container">
                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2@s">
                            <div className="item">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src="https://digipuush.com/wp-content/uploads/2022/03/Logo-Orange-2048x747.png.webp" alt="logo" style={{ maxWidth: 200 }} />
                                        </Link>
                                    </div>

                                    <p>Lorem ipsum dolor consectetur adipiscing elit, eiusmod tempor ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-footer-widget">
                                    <h3>New York</h3>
                                    <div className="bar"></div>

                                    <div className="location">
                                        <p>198 Collective Street <br /> Manhattan <br /> Kingston <br /> United State</p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-footer-widget">
                                    <h3>London</h3>
                                    <div className="bar"></div>

                                    <div className="location">
                                        <p>352/71 Second Street <br /> King Street <br /> Kingston <br /> United Kingdom</p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-footer-widget">
                                    <h3>Contact</h3>
                                    <div className="bar"></div>

                                    <ul className="contact-info">
                                        <li><a href="mailto:info@gunter.com">info@gunter.com</a></li>
                                        <li><a href="mailto:fax@gunter.com">fax@gunter.com</a></li>
                                        <li><a href="tel:+444785417452">+44 478 541 7452</a></li>
                                    </ul>
                                    <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                                                <i className="flaticon-logo"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
                                                <i className="flaticon-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
                                                <i className="flaticon-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
                                                <i className="flaticon-logo-1"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="copyright-area">
                            <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                                <div className="item">
                                    <p>© Gunter. All Rights Reserved EnvyTheme</p>
                                </div>

                                <div className="item">
                                    <ul>
                                        <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <GoTop scrollStepInPx="50" delayInMs="16.66" />
                        </div>
                    </div>

                    <div className="br-line"></div>
                    <div className="footer-shape1">
                        <img src={footerShapeOne} alt="shape" />
                    </div>
                    <div className="footer-shape2">
                        <img src={footerShapeTwo} alt="shape" />
                    </div>
                </footer>
            </>
        );
    }
}
 
export default Footer;