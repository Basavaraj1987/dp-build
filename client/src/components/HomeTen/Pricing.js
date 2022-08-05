import React from 'react';
import { Link } from 'react-router-dom';

import priceShape1 from '../../assets/images/price-shape1.png';
import priceShape2 from '../../assets/images/price-shape2.png';
import priceShape3 from '../../assets/images/price-shape3.png';
 
class Pricing extends React.Component {
    render(){
        return (
            <>
                <section className="pricing-area uk-pricing uk-section bg-f9f9f9">
                    <div className="uk-container">
                        <div className="uk-section-title section-title">
                            <span>PRICING</span>
                            <h2>Our Flexible Pricing Plan</h2>
                            <div className="bar"></div>
                        </div>

                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                            <div className="uk-item">
                                <div className="single-pricing-box">
                                    <div className="pricing-header">
                                        <div className="icon">
                                            <i className="flaticon-shout"></i>
                                            <img src={priceShape1} alt="image" />
                                        </div>
                                        <h3>Starter Plan</h3>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li>10GB Bandwidth Internet</li>
                                            <li>Business & Financ Analysing</li>
                                            <li>25 Social Media Reviews</li>
                                            <li>Customer Managemet</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                    </div>

                                    <div className="price">
                                        $49.99
                                        <span>Per Month</span>
                                    </div>

                                    <Link to="#" className="uk-button uk-button-default">Book Now</Link>
                                </div>
                            </div>

                            <div className="uk-item">
                                <div className="single-pricing-box">
                                    <div className="pricing-header">
                                        <div className="icon">
                                            <i className="flaticon-plan"></i>
                                            <img src={priceShape2} alt="image" />
                                        </div>
                                        <h3>Advance Plan</h3>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li>15GB Bandwidth Internet</li>
                                            <li>Business & Financ Analysing</li>
                                            <li>30 Social Media Reviews</li>
                                            <li>Customer Managemet</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                    </div>

                                    <div className="price">
                                        $69.99
                                        <span>Per Month</span>
                                    </div>

                                    <Link to="#" className="uk-button uk-button-default">Book Now</Link>
                                </div>
                            </div>

                            <div className="uk-item">
                                <div className="single-pricing-box">
                                    <div className="pricing-header">
                                        <div className="icon">
                                            <i className="flaticon-quality"></i>
                                            <img src={priceShape3} alt="image" />
                                        </div>
                                        <h3>Premium Plan</h3>
                                    </div>

                                    <div className="pricing-features">
                                        <ul>
                                            <li>50GB Bandwidth Internet</li>
                                            <li>Business & Financ Analysing</li>
                                            <li>35 Social Media Reviews</li>
                                            <li>Customer Managemet</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                    </div>

                                    <div className="price">
                                        $99.99
                                        <span>Per Month</span>
                                    </div>

                                    <Link to="#" className="uk-button uk-button-default">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
 
export default Pricing;