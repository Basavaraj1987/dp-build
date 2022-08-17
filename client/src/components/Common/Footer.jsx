import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import footerShapeOne from '../../assets/images/footer-shape1.png';
import footerShapeTwo from '../../assets/images/footer-shape2.png';
import GoTop from './GoTop';
 
class Footer extends React.Component {

    componentDidMount () {
        (function(w, d) { 
            w.CollectId = "62fb980af27acc1b8412a00f"; 
            var h = d.head || d.getElementsByTagName("head")[0]; 
            var s = d.createElement("script"); s.setAttribute("type", "text/javascript"); 
            s.async=true; 
            s.setAttribute("src", "https://collectcdn.com/launcher.js"); 
            h.appendChild(s); 
        })(window, document);
    }

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

                                    <p>We are a Digital Marketing Company with a Creative Bend. We believe in partnering with Brands as an extended arm of the marketing team by delivering creative solutions with measurable outcomes.</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-footer-widget">
                                    <h3>Services</h3>
                                    <div className="bar"></div>

                                    <div className="location">
                                        <a className='color-white-padding' href="">Branding</a>
                                        <a className='color-white-padding' href="">Creative</a> 
                                        <a className='color-white-padding' href="">Social Media Marketing</a>
                                        <a className='color-white-padding' href="">Website</a>
                                        <a className='color-white-padding' href="">SEO</a>
                                        <a className='color-white-padding' href="">Influencer Marketing</a>
                                        <a className='color-white-padding' href="">Content Marketing</a>
                                        <a className='color-white-padding' href="">Performance Marketing</a>
                                        <a className='color-white-padding' href="">Video & Animation</a>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-footer-widget">
                                    <h3>London</h3>
                                    <div className="bar"></div>

                                    <div className="location">
                                        <p>No 21, 2nd floor, Opp. to 7th Cross<br /> Junction, Dollars Colony, Nagashetty<br />Halli, Bengaluru, Karnataka 560094</p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-footer-widget">
                                    <h3>Contact</h3>
                                    <div className="bar"></div>

                                    <ul className="contact-info">
                                        <li><a href="mailto:info@digipuush.com">info@digipuush.com</a></li>
                                        <li><a href="mailto:chethan@digipuush.com">chethan@digipuush.com</a></li>
                                        <li><a href="tel:+917259435190">+91 72594 35190</a></li>
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
                                    <p>© Digipuush. All Rights Reserved EnvyTheme</p>
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