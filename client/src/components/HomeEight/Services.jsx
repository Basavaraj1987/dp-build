import React from 'react';
import { Link } from 'react-router-dom';

import ServiceImg1 from '../../assets/images/services-img1.jpg';
import ServiceImg2 from '../../assets/images/services-img2.jpg';
import ServiceImg3 from '../../assets/images/services-img3.jpg';
 
class Services extends React.Component {
    render(){
        return (
            <>
                <section className="uk-services services-section uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title uk-text-center">
                            <span>What we do</span>
                            <h2>We are modern & special for designing</h2>
                            <div className="bar"></div>
                        </div>

                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                            <div className="item">
                                <div className="services-box">
                                    <img src={ServiceImg1} alt="image" />

                                    <div className="content">
                                        <div className="icon">
                                            <i className="flaticon-plan"></i>
                                        </div>
                                        <h3>Digital Branding</h3>
                                    </div>

                                    <div className="hover-content">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <i className="flaticon-plan"></i>
                                                    </div>
                                                    <h3>Digital Branding</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                    <Link to="/service-details" className="details-btn">
                                                        <i className="flaticon-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="services-box">
                                    <img src={ServiceImg2} alt="image" />

                                    <div className="content">
                                        <div className="icon">
                                            <i className="flaticon-think"></i>
                                        </div>
                                        <h3>Creative Solutions</h3>
                                    </div>

                                    <div className="hover-content">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <i className="flaticon-think"></i>
                                                    </div>
                                                    <h3>Creative Solutions</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                    <Link to="/service-details" className="details-btn">
                                                        <i className="flaticon-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="services-box">
                                    <img src={ServiceImg3} alt="image" />

                                    <div className="content">
                                        <div className="icon">
                                            <i className="flaticon-shout"></i>
                                        </div>
                                        <h3>Marketing Solutions</h3>
                                    </div>

                                    <div className="hover-content">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <i className="flaticon-shout"></i>
                                                    </div>
                                                    <h3>Marketing Solutions</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                    <Link to="/service-details" className="details-btn">
                                                        <i className="flaticon-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
 
export default Services;