import React from 'react';
import { Link } from 'react-router-dom';

import aboutImg1 from '../../assets/images/project1.jpg';
import aboutImg2 from '../../assets/images/project2.jpg';
import aboutImg3 from '../../assets/images/project3.jpg';
import shapeImg1 from '../../assets/images/shape-img1.png';
 
class RecentProjects extends React.Component {
    render(){
        return (
            <>
                <section id="project" className="project-section uk-project uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title uk-text-center">
                            <span>Our Completed Projects</span>
                            <h2>Recent Projects</h2>
                            <div className="bar"></div>
                        </div>

                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                            <div className="item">
                                <div className="single-project-box">
                                    <Link to="/project-details" className="project-img">
                                        <img src={aboutImg1} alt="image" />
                                    </Link>
                
                                    <div className="project-content">
                                        <h3><Link to="/project-details">Development</Link></h3>
                                        <ul>
                                            <li><Link to="#">Web</Link></li>
                                            <li><Link to="#">Mobile</Link></li>
                                        </ul>
                                        <Link to="/project-details" className="details-btn"><i uk-icon="plus"></i></Link>
                                    </div>
                                </div>
                            </div>
            
                            <div className="item">
                                <div className="single-project-box">
                                    <Link to="/project-details" className="project-img">
                                        <img src={aboutImg2} alt="image" />
                                    </Link>
                
                                    <div className="project-content">
                                        <h3><Link to="/project-details">Architecture</Link></h3>
                                        <ul>
                                            <li><Link to="#">Home</Link></li>
                                            <li><Link to="#">Bridge</Link></li>
                                        </ul>
                                        <Link to="/project-details" className="details-btn"><i uk-icon="plus"></i></Link>
                                    </div>
                                </div>
                            </div>
            
                            <div className="item">
                                <div className="single-project-box">
                                    <Link to="/project-details" className="project-img">
                                        <img src={aboutImg3} alt="image" />
                                    </Link>
                
                                    <div className="project-content">
                                        <h3><Link to="/project-details">UX/UI Design</Link></h3>
                                        <ul>
                                            <li><Link to="#">Web</Link></li>
                                            <li><Link to="#">Mobile</Link></li>
                                        </ul>
                                        <Link to="/project-details" className="details-btn"><i uk-icon="plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shape-circle-img1">
                        <img src={shapeImg1} alt="image" />
                    </div>
                </section>
            </>
        );
    }
}
 
export default RecentProjects;