import React from 'react';
import { Link } from 'react-router-dom';
 
class ServiceTwoContent extends React.Component {
    render(){
        return (
            <section className="services-area uk-services uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-plan"></i>
                                </div>
                                <h3><Link to="/service-details">Brand & Creative</Link></h3>
                                <div className="bar"></div>
                                <p>Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.</p>

                                <Link to="/service-details" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-think"></i>
                                </div>
                                <h3><Link to="/service-details">Digital Marketing</Link></h3>
                                <div className="bar"></div>
                                <p>Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.</p>

                                <Link to="/service-details" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-shout"></i>
                                </div>
                                <h3><Link to="/service-details">Video & Photography</Link></h3>
                                <div className="bar"></div>
                                <p>Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.</p>

                                <Link to="/service-details" className="link-btn"><span>Read More</span> <i className="flaticon-right"></i></Link>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="service" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="service" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        );
    }
}
 
export default ServiceTwoContent;