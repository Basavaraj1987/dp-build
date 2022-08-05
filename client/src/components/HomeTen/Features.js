import React from 'react';

import boxShape from '../../assets/images/box-shape.png';
 
class Features extends React.Component {
    render(){
        return (
            <>
                <section className="featured-services-area uk-featured-services uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title">
                            <p>We bring the right people together to challenge established thinking and drive transformation.</p>
                        </div>

                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                            <div className="uk-item">
                                <div className="single-featured-services-box">
                                    <div className="icon">
                                        <i className="flaticon-mail"></i>
                                    </div>
                                    <h3>Business Planning</h3>
                                    <div className="bar"></div>
                                    <p>Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.</p>
                                    <div className="bg-shape">
                                        <img src={boxShape} alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="uk-item">
                                <div className="single-featured-services-box">
                                    <div className="icon">
                                        <i className="flaticon-targeting"></i>
                                    </div>
                                    <h3>Performance</h3>
                                    <div className="bar"></div>
                                    <p>Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.</p>
                                    <div className="bg-shape">
                                        <img src={boxShape} alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="uk-item">
                                <div className="single-featured-services-box">
                                    <div className="icon">
                                        <i className="flaticon-magnifying-glass"></i>
                                    </div>
                                    <h3>A Full Service</h3>
                                    <div className="bar"></div>
                                    <p>Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.</p>
                                    <div className="bg-shape">
                                        <img src={boxShape} alt="image" />
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
 
export default Features;