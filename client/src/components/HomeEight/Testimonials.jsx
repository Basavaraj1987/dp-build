import React from 'react';

import clientImg1 from '../../assets/images/client1.png';
import clientImg2 from '../../assets/images/client2.png';
import clientImg3 from '../../assets/images/client3.png';
import shapeImg2 from '../../assets/images/shape-img2.png';
 
class Testimonials extends React.Component {
    render(){
        return (
            <>
                <section id="testimonials" className="feedback-section uk-process uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title uk-text-center">
                            <span>Testimonials</span>
                            <h2>We have a great review from our clients</h2>
                            <div className="bar"></div>
                        </div>

                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                            <div className="item">
                                <div className="single-feedback-item">
                                    <i className="flaticon-quote"></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <div className="client-info">
                                        <img src={clientImg1} alt="image" />
                                        <h3>Jason Statham</h3>
                                        <span>CTO at Envato</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-feedback-item">
                                    <i className="flaticon-quote"></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <div className="client-info">
                                        <img src={clientImg2} alt="image" />
                                        <h3>Sarah Taylor</h3>
                                        <span>CTO at EnvyTheme</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-feedback-item">
                                    <i className="flaticon-quote"></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <div className="client-info">
                                        <img src={clientImg3} alt="image" />
                                        <h3>Alister Cook</h3>
                                        <span>CTO at Envato</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shape-circle-img2">
                        <img src={shapeImg2} alt="image" />
                    </div>
                </section>
            </>
        );
    }
}
 
export default Testimonials;