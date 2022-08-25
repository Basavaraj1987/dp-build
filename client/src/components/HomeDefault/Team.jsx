import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

import teamTwo from '../../assets/images/team/Photo1.jpg';
import teamThree from '../../assets/images/team/Photo12.jpg';
import teamFour from '../../assets/images/team/Photo3.jpg';
import teamFive from '../../assets/images/team/Photo4.jpg';
import teamsix from '../../assets/images/team/Photo5.jpg';
import teamseven from '../../assets/images/team/Photo6.jpg';
import teameight from '../../assets/images/team/Photo7.jpg';
import teamnine from '../../assets/images/team/Photo8.jpg';
import teamten from '../../assets/images/team/Photo9.jpg';
import teameleven from '../../assets/images/team/Photo11.jpg';
import teamTwele from '../../assets/images/team/Photo13.jpg';
import teamThirteen from '../../assets/images/team/Photo14.jpg';
import teamFourteen from '../../assets/images/team/Photo15.jpg';
import teamFifteen from '../../assets/images/team/Photo2.jpg';

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 15,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        786: {
            items: 2
        },
        1200: {
            items: 5
        }
    }
}

class Team extends React.Component {
    render() {
        return (
            <>
                <section id="team" className="team-area uk-dark uk-team uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title">
                            <span>Meet Our Experts</span>
                            <h2>Our Team</h2>
                            <div className="bar"></div>

                            {/* <Link to="/team" className="uk-button uk-button-default">View All</Link> */}
                        </div>
                    </div>

                    <OwlCarousel
                        className="team-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-team">
                            {/* <ul className="team-social">
                                <li><a href="#" target="_blank"><i className="flaticon-logo"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-linkedin"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-logo-1"></i></a></li>
                            </ul> */}

                            <img src={teamTwo} alt="team" />

                            <div className="team-content">
                                <h3>Anil Gorraladaku</h3>
                                <span>Founder & CEO</span>
                            </div>
                        </div>

                        <div className="single-team">

                            <img src={teamThree} alt="team" />

                            <div className="team-content">
                                <h3>Chethan Shenoy</h3>
                                <span>COO</span>
                            </div>
                        </div>

                        <div className="single-team">

                            <img src={teamFour} alt="team" style={{ height: '415px' }} />

                            <div className="team-content">
                                <h3>John George</h3>
                                <span>Creative Director</span>
                            </div>
                        </div>

                        <div className="single-team">

                            <img src={teamFive} alt="team" />

                            <div className="team-content">
                                <h3>Jadhav</h3>
                                <span>Art Director</span>
                            </div>
                        </div>

                        <div className="single-team">

                            <img src={teamsix} alt="team" />

                            <div className="team-content">
                                <h3>Venu Gopal</h3>
                                <span>Digital Marketing Executive</span>
                            </div>
                        </div>

                        <div className="single-team">

                            <img src={teamseven} alt="team" />

                            <div className="team-content">
                                <h3>Gopi Kumar</h3>
                                <span>SEO Lead</span>
                            </div>
                        </div>

                        <div className="single-team">

                            <img src={teameight} alt="team" />

                            <div className="team-content">
                                <h3>Jeevan</h3>
                                <span>SEO Executive</span>
                            </div>
                        </div>

                        <div className="single-team">

                            <img src={teamnine} alt="team" />

                            <div className="team-content">
                                <h3>Sheetal</h3>
                                <span>Social Media Marketing Executive</span>
                            </div>
                        </div>

                        <div className="single-team">

                            <img src={teamten} alt="team" />

                            <div className="team-content">
                                <h3>Amarendra</h3>
                                <span>Digital Marketing Executive</span>
                            </div>
                        </div>

                        <div className="single-team">

                            <img src={teameleven} alt="team" />

                            <div className="team-content">
                                <h3>Adarsh</h3>
                                <span>Animation & Graphic Design Executive</span>
                            </div>
                        </div>

                        <div className="single-team">

                            <img src={teamTwele} alt="team" />

                            <div className="team-content">
                                <h3>Girish</h3>
                                <span>SEO Executive</span>
                            </div>
                        </div>

                        <div className="single-team">

                            <img src={teamThirteen} alt="team" />

                            <div className="team-content">
                                <h3>Krishna</h3>
                                <span>Animation & Graphic Design Executive</span>
                            </div>
                        </div>

                        <div className="single-team">

                            <img src={teamFourteen} alt="team" />

                            <div className="team-content">
                                <h3>Arathi</h3>
                                <span>SEO Executive</span>
                            </div>
                        </div>

                        <div className="single-team">

                            <img src={teamFifteen} alt="team" />

                            <div className="team-content">
                                <h3>Omkar</h3>
                                <span>Animation & Graphic Design Executive</span>
                            </div>
                        </div>
                        
                    </OwlCarousel>
                </section>
            </>
        );
    }
}

export default Team;