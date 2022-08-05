import React from 'react';

import businessPeopleImg from '../../assets/images/business-people.png';

class WhyChooseUs extends React.Component {
    render(){
        return (
            <>
                <section className="why-choose-us-section uk-why-choose-us uk-section">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                        <div className="item">
                            <div className="why-choose-us-content">
                                <div className="uk-section-title section-title">
                                    <span>Why Choose Us</span>
                                    <h2>We Are Dynamic & Special For SEO</h2>
                                    <div className="bar"></div>
                                </div>

                                <ul className="why-choose-us-text">
                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-plan"></i>
                                        </div>
                                        <h3>Data Analysis</h3>
                                        <p>We provide marketing services to startups and samll businesses to looking for a partner of their digital media, design & development, lead generation.</p>
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-think"></i>
                                        </div>
                                        <h3>PPC Marketing</h3>
                                        <p>We provide marketing services to startups and samll businesses to looking for a partner of their digital media, design & development, lead generation.</p>
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-shout"></i>
                                        </div>
                                        <h3>Business Analytics</h3>
                                        <p>We provide marketing services to startups and samll businesses to looking for a partner of their digital media, design & development, lead generation.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="item">
                            <div className="why-choose-us-image uk-text-center">
                                <img src={businessPeopleImg} alt="image" />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
 
export default WhyChooseUs;