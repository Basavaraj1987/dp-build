import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import partnerWhite1 from '../../assets/images/clients/1.jpg'
import partnerWhite2 from '../../assets/images/clients/2.jpg'
import partnerWhite3 from '../../assets/images/clients/3.jpg'
import partnerWhite4 from '../../assets/images/clients/4.jpg'
import partnerWhite5 from '../../assets/images/clients/5.jpg'
import partnerWhite6 from '../../assets/images/clients/6.jpg'
import partnerWhite7 from '../../assets/images/clients/7.jpg'
import partnerWhite8 from '../../assets/images/clients/8.jpg'
import partnerWhite9 from '../../assets/images/clients/9.jpg'
import partnerWhite10 from '../../assets/images/clients/10.jpg'
import partnerWhite11 from '../../assets/images/clients/11.jpg'
import partnerWhite12 from '../../assets/images/clients/12.jpg'
import partnerWhite13 from '../../assets/images/clients/13.jpg'
import partnerWhite14 from '../../assets/images/clients/14.jpg'
import partnerWhite15 from '../../assets/images/clients/15.jpg'
import partnerWhite16 from '../../assets/images/clients/16.jpg'
import partnerWhite17 from '../../assets/images/clients/17.jpg'
import partnerWhite18 from '../../assets/images/clients/18.jpg'
import partnerWhite19 from '../../assets/images/clients/19.jpg'
import partnerWhite20 from '../../assets/images/clients/20.jpg'
import partnerWhite21 from '../../assets/images/clients/21.jpg'

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
            items: 4
        }
    }
}
 
class StatsSlider extends React.Component {

    render(){

        return (
            <div className="partner-area uk-section uk-dark uk-padding-remove-top">
                <div className="uk-container">
                    {/* <div className="partner-slides owl-carousel owl-theme"> */}
                    <OwlCarousel 
                        className="partner-slides owl-carousel owl-theme"
                        {...options}
                    >

                    <div className="item">
                        <Link to="#">
                            {/* <img src={partnerWhite1} alt="" /> */}
                            <span uk-icon="icon: users; ratio: 2"></span>
                            <h3 style={{ marginBottom: 0 }}>50+</h3>
                            <h4 style={{ margin: 0 }}>Happy Clients</h4>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="#">
                            {/* <img src={partnerWhite2} alt="" /> */}
                            <span uk-icon="icon:  tag; ratio: 2"></span>
                            <h3 style={{ marginBottom: 0 }}>Rs.25L+</h3>
                            <h4 style={{ margin: 0 }}>Monthly Budget Management</h4>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="#">
                            {/* <img src={partnerWhite3} alt="" /> */}
                            <span uk-icon="icon:  commenting; ratio: 2"></span>
                            <h3 style={{ marginBottom: 0 }}>2,000+</h3>
                            <h4 style={{ margin: 0 }}>Content Pieces developed</h4>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="#">
                            {/* <img src={partnerWhite4} alt="" /> */}
                            <span uk-icon="icon: social; ratio: 2"></span>
                            <h3 style={{ marginBottom: 0 }}>2L+</h3>
                            <h4 style={{ margin: 0 }}>Backlinks Built manually</h4>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="#">
                            {/* <img src={partnerWhite5} alt="" /> */}
                            <span uk-icon="icon:  video-camera; ratio: 2"></span>
                            <h3 style={{ marginBottom: 0 }}>10+</h3>
                            <h4 style={{ margin: 0 }}>Corporate Videos developed</h4>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="#">
                            {/* <img src={partnerWhite6} alt="" /> */}
                            <span uk-icon="icon: world; ratio: 2"></span>
                            <h3 style={{ marginBottom: 0 }}>15+</h3>
                            <h4 style={{ margin: 0 }}>Websites developed</h4>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="#">
                            {/* <img src={partnerWhite7} alt="" /> */}
                            <span uk-icon="icon: hashtag; ratio: 2"></span>
                            <h3 style={{ marginBottom: 0 }}>1</h3>
                            <h4 style={{ margin: 0 }}>India's only Video-Only Ad Agency</h4>
                        </Link>
                    </div>

                    </OwlCarousel>
                    {/* </div> */}
                </div>
            </div>
        );
    }
}
 
export default StatsSlider;