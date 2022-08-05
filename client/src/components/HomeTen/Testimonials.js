import React from 'react';
import OwlCarousel from 'react-owl-carousel3';

import userImg1 from '../../assets/images/user1.jpg';
import userImg2 from '../../assets/images/user2.jpg';
import userImg3 from '../../assets/images/user3.jpg';
import circleImg from '../../assets/images/circle.png';

const options = {
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 2000,
    autoplayHoverPause: true,
    autoplay: false,
}
 
class Testimonials extends React.Component {
    render(){
        return (
            <>
                <section className="testimonials-section uk-testimonials uk-section">
                    <div className="uk-container">
                        <OwlCarousel 
                            className="testimonials-slides owl-carousel owl-theme"
                            {...options}
                        > 
                            <div className="single-testimonials-box">
                                <div className="user-image">
                                    <img 
                                        src={userImg1} 
                                        className="user" 
                                        alt="image" 
                                    />
                                    <img 
                                        src={circleImg} 
                                        alt="shape" 
                                        className="shape" 
                                    />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.</p>
                                <div className="user-info">
                                    <h3>John Smith</h3>
                                    <span>Python Developer</span>
                                </div>
                            </div>

                            <div className="single-testimonials-box">
                                <div className="user-image">
                                    <img 
                                        src={userImg2} 
                                        className="user" 
                                        alt="image" 
                                    />
                                    <img 
                                        src={circleImg} 
                                        alt="shape" 
                                        className="shape" 
                                    />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.</p>
                                <div className="user-info">
                                    <h3>Sarah Taylor</h3>
                                    <span>Python Developer</span>
                                </div>
                            </div>

                            <div className="single-testimonials-box">
                                <div className="user-image">
                                    <img 
                                        src={userImg3} 
                                        className="user" 
                                        alt="image" 
                                    />
                                    <img 
                                        src={circleImg} 
                                        alt="shape" 
                                        className="shape" 
                                    />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore.</p>
                                <div className="user-info">
                                    <h3>Jimmy Anderson</h3>
                                    <span>Python Developer</span>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>
            </>
        );
    }
}
 
export default Testimonials;