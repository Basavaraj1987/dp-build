import React from 'react';
import OwlCarousel from 'react-owl-carousel3';

import partnerImg1 from '../../assets/images/partner-one.png';
import partnerImg2 from '../../assets/images/partner-two.png';
import partnerImg3 from '../../assets/images/partner-three.png';
import partnerImg4 from '../../assets/images/partner-four.png';
import partnerImg5 from '../../assets/images/partner-five.png';
import partnerImg6 from '../../assets/images/partner-six.png';

const options = {
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-right'></i>"
    ],
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
}
 
class Partner extends React.Component {
    render(){
        return (
            <>
                <div className="partner-area uk-section uk-padding-remove-top">
                    <div className="uk-container">
                        <OwlCarousel 
                            className="partner-slides owl-carousel owl-theme"
                            {...options}
                        > 
                            <div className="item">
                                <a href="#" target="_blank">
                                    <img src={partnerImg1} alt="image" />
                                </a>
                            </div>

                            <div className="item">
                                <a href="#" target="_blank">
                                    <img src={partnerImg2} alt="image" />
                                </a>
                            </div>

                            <div className="item">
                                <a href="#" target="_blank">
                                    <img src={partnerImg3} alt="image" />
                                </a>
                            </div>

                            <div className="item">
                                <a href="#" target="_blank">
                                    <img src={partnerImg4} alt="image" />
                                </a>
                            </div>

                            <div className="item">
                                <a href="#" target="_blank">
                                    <img src={partnerImg5} alt="image" />
                                </a>
                            </div>

                            <div className="item">
                                <a href="#" target="_blank">
                                    <img src={partnerImg6} alt="image" />
                                </a>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Partner;