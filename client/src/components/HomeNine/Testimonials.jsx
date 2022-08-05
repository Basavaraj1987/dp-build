import React from 'react';
import OwlCarousel from 'react-owl-carousel3';

import clientImg1 from '../../assets/images/client1.png';
import clientImg2 from '../../assets/images/client2.png';
import clientImg3 from '../../assets/images/client3.png';
 
const options = {
    loop: true,
    nav: true,
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
            items: 2
        }
    }
}

class Testimonials extends React.Component {
    render(){
        return (
            <>
                <div id="testimonials" className="feedback-section uk-section">
                    <div className="uk-container">
                        <div className="uk-grid" uk-grid="true">
                            <div className="uk-width-1-3@m">
                                <div className="uk-section-title section-title">
                                    <span>Testimonials</span>
                                    <h2>What Clients Say About Us</h2>
                                    <div className="bar"></div>
                                </div>
                            </div>

                            <div className="uk-width-expand@m">
                                <OwlCarousel 
                                    className="feedback-slides-two owl-carousel owl-theme"
                                    {...options}
                                >  
                                    <div className="single-feedback-item">
                                        <i className="flaticon-quote"></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        <div className="client-info">
                                            <img src={clientImg1} alt="image" />
                                            <h3>Jason Statham</h3>
                                            <span>CTO at Envato</span>
                                        </div>
                                    </div>

                                    <div className="single-feedback-item">
                                        <i className="flaticon-quote"></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        <div className="client-info">
                                            <img src={clientImg2} alt="image" />
                                            <h3>Sarah Taylor</h3>
                                            <span>CTO at EnvyTheme</span>
                                        </div>
                                    </div>

                                    <div className="single-feedback-item">
                                        <i className="flaticon-quote"></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        <div className="client-info">
                                            <img src={clientImg3} alt="image" />
                                            <h3>Alister Cook</h3>
                                            <span>CTO at Envato</span>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>                
                    </div>
                </div>
            </>
        );
    }
}
 
export default Testimonials;