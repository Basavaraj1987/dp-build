import React from 'react';

import arrow from '../../assets/images/arrow.png';
 
class Process extends React.Component {
    render(){
        return (
            <>
                <section className="process-section bg-image uk-process uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title uk-text-center">
                            <span>Process</span>
                            <h2>Easy Ways To Get Ready Your Work</h2>
                            <div className="bar"></div>
                        </div>

                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2@s">
                            <div className="item">
                                <div className="single-process-box">
                                    <div className="icon">
                                        <i uk-icon="receiver"></i>
                                    </div>
                                    <h3>Contact Us First</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-process-box">
                                    <div className="icon">
                                        <i uk-icon="cog"></i>
                                    </div>
                                    <h3>Consult With Us</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-process-box">
                                    <div className="icon">
                                        <i uk-icon="cart"></i>
                                    </div>
                                    <h3>Place Order</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-process-box">
                                    <div className="icon">
                                        <i uk-icon="home"></i>
                                    </div>
                                    <h3>Give Us Payment!</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="process-arrow-icon">
                                    <img src={arrow} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
 
export default Process;