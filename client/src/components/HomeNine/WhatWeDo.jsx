import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

import serviceImg1 from '../../assets/images/services-img1.jpg';
import serviceImg2 from '../../assets/images/services-img2.jpg';
import serviceImg3 from '../../assets/images/services-img3.jpg';

const options = {
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    smartSpeed: 2000,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}
 
class WhatWeDo extends React.Component {
    render(){
        return (
            <>
                <section id="services" className="uk-services services-section bg-image uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title uk-text-center">
                            <span>What we do</span>
                            <h2>Build Your Website, Let's Check Our Services</h2>
                            <div className="bar"></div>
                        </div>

                        <OwlCarousel 
                            className="services-slides owl-carousel owl-theme"
                            {...options}
                        > 
                            <div className="services-box">
                                <img src={serviceImg1} alt="image" />

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

                            <div className="services-box">
                                <img src={serviceImg2} alt="image" />

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

                            <div className="services-box">
                                <img src={serviceImg3} alt="image" />

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

                            <div className="services-box">
                                <img src={serviceImg2} alt="image" />

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
                        </OwlCarousel>
                    </div>
                </section>
            </>
        );
    }
}
 
export default WhatWeDo;