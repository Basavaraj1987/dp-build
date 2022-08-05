import React from 'react';
import { Link } from 'react-router-dom';

import whatWeDoImg from '../../assets/images/what-we-do-image.jpg';
 
class WhatWeDo extends React.Component {
    render(){
        return (
            <>
                <div className="what-we-do-section uk-what-we-do">
                    <div className="uk-container-expand">
                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                            <div className="item">
                                <div className="what-we-do-image">
                                    <img src={whatWeDoImg} alt="image" />
                                </div>
                            </div>

                            <div className="item">
                                <div className="what-we-do-content">
                                    <div className="content">
                                        <div className="uk-section-title section-title">
                                            <span>What We Do</span>
                                            <h2>Our Services</h2>
                                            <div className="bar"></div>
                                        </div>
            
                                        <div className="single-services">
                                            <div className="icon">
                                                <i className="flaticon-plan"></i>
                                            </div>
                                            <h3>Digital Branding</h3>
                                            <i className="flaticon-right link-btn"></i>
                                            <Link to="/service-details" className="link uk-position-cover"></Link>
                                        </div>
            
                                        <div className="single-services">
                                            <div className="icon">
                                                <i className="flaticon-think"></i>
                                            </div>
                                            <h3>Creative Solutions</h3>
                                            <i className="flaticon-right link-btn"></i>
                                            <Link to="/service-details" className="link uk-position-cover"></Link>
                                        </div>
            
                                        <div className="single-services">
                                            <div className="icon">
                                                <i className="flaticon-shout"></i>
                                            </div>
                                            <h3>Marketing Solutions</h3>
                                            <i className="flaticon-right link-btn"></i>
                                            <Link to="/service-details" className="link uk-position-cover"></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default WhatWeDo;