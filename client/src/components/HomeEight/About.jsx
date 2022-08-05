import React from 'react';

import aboutImg1 from '../../assets/images/about3.jpg';
import aboutImg2 from '../../assets/images/about4.jpg';
import signatureImg from '../../assets/images/signature.png';
import shapeImg1 from '../../assets/images/shape-img1.png';
 
class About extends React.Component {
    render(){
        return (
            <>
                <section id="about" className="uk-about about-area uk-section">
                    <div className="uk-container">
                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                            <div className="item">
                                <div className="about-image">
                                    <img src={aboutImg1} alt="image" />
                                    <img src={aboutImg2} alt="image" />
                                </div>
                            </div>

                            <div className="item">
                                <div className="about-content">
                                    <div className="uk-section-title section-title">
                                        <span>About Us</span>
                                        <h2>We are modern & special for designing</h2>
                                        <div className="bar"></div>
                                    </div>

                                    <div className="about-text">
                                        <div className="icon">
                                            <i className="flaticon-quality"></i>
                                        </div>
                                        <h3>Best Software Company in the World</h3>
                                        <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents. We work with you, not for you. Although we have a great resources.</p>
                                        <p>We are an experienced and talented team of passionate consultants who live and breathe search engine marketing.</p>

                                        <div className="signature">
                                            <img src={signatureImg} alt="signature" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shape-circle-img1">
                        <img src={shapeImg1} alt="image" />
                    </div>
                </section>
            </>
        );
    }
}
 
export default About;