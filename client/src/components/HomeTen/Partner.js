import React from 'react';

import partnerImg1 from '../../assets/images/partner1.png';
import partnerImg2 from '../../assets/images/partner2.png';
import partnerImg3 from '../../assets/images/partner3.png';
import partnerImg4 from '../../assets/images/partner4.png';
import partnerImg5 from '../../assets/images/partner5.png';
import partnerImg6 from '../../assets/images/partner6.png';
 
class Partner extends React.Component {
    render(){
        return (
            <>
                <section className="partner-area-two uk-partner uk-section bg-f5e7da">
                    <div className="uk-container">
                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                            <div className="item">
                                <div className="uk-section-title section-title">
                                    <span>Our Clients</span>
                                    <h2>Clients We Work</h2>
                                    <div className="bar"></div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                                    <div className="item">
                                        <div className="partner-item">
                                            <img src={partnerImg1} alt="image" />
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="partner-item">
                                            <img src={partnerImg2} alt="image" />
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="partner-item">
                                            <img src={partnerImg3} alt="image" />
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="partner-item">
                                            <img src={partnerImg4} alt="image" />
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="partner-item">
                                            <img src={partnerImg5} alt="image" />
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="partner-item">
                                            <img src={partnerImg6} alt="image" />
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
 
export default Partner;