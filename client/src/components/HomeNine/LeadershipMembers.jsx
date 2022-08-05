import React from 'react';

import teamImg1 from '../../assets/images/team8.jpg';
import teamImg2 from '../../assets/images/team7.jpg';
import teamImg3 from '../../assets/images/team6.jpg';
 
class LeadershipMembers extends React.Component {
    render(){
        return (
            <>
                <section id="team" className="team-area uk-team uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title uk-text-center section-title">
                            <span>Our Experts</span>
                            <h2>Meet Our Leadership Preparing For Your Success</h2>
                            <div className="bar"></div>
                        </div>

                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                            <div className="item">
                                <div className="single-team-box">
                                    <img src={teamImg1} alt="image" />

                                    <div className="content">
                                        <h3>James Anderson</h3>
                                        <span>Local SEO</span>

                                        <div className="social">
                                            <div className="social-btn">
                                                <span uk-icon="cog"></span>
                                            </div>
                                            <ul>
                                                <li><a href="#" target="_blank"><i className="flaticon-logo"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="flaticon-twitter"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="flaticon-linkedin"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="flaticon-logo-1"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-team-box">
                                    <img src={teamImg2} alt="image" />

                                    <div className="content">
                                        <h3>Lee Munroe</h3>
                                        <span>CEO & Founder</span>

                                        <div className="social">
                                            <div className="social-btn">
                                                <span uk-icon="cog"></span>
                                            </div>
                                            <ul>
                                                <li><a href="#" target="_blank"><i className="flaticon-logo"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="flaticon-twitter"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="flaticon-linkedin"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="flaticon-logo-1"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="single-team-box">
                                    <img src={teamImg3} alt="image" />

                                    <div className="content">
                                        <h3>Calvin Klein</h3>
                                        <span>Marketing Manager</span>

                                        <div className="social">
                                            <div className="social-btn">
                                                <span uk-icon="cog"></span>
                                            </div>
                                            <ul>
                                                <li><a href="#" target="_blank"><i className="flaticon-logo"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="flaticon-twitter"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="flaticon-linkedin"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="flaticon-logo-1"></i></a></li>
                                            </ul>
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
 
export default LeadershipMembers;