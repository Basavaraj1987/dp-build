import React from 'react';
import { Link } from 'react-router-dom';

import projectImg1 from '../../assets/images/project4.jpg';
import projectImg2 from '../../assets/images/project5.jpg';
import projectImg3 from '../../assets/images/project6.jpg';
import projectImg4 from '../../assets/images/project7.jpg';
import projectImg5 from '../../assets/images/project8.jpg';
 
class Projects extends React.Component {
    render(){
        return (
            <>
                <section className="project-area uk-project uk-section bg-f5e7da">
                    <div className="uk-container">
                        <div className="uk-section-title section-title">
                            <span>Projects</span>
                            <h2>Let’s Check Our Latest Projects</h2>
                            <div className="bar"></div>
                        </div>

                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                            <div className="uk-item">
                                <div className="single-project-item">
                                    <Link to="/project-details" className="image">
                                        <img src={projectImg1} alt="image" />
                                    </Link>

                                    <div className="content">
                                        <Link to="#" className="category">Design</Link>
                                        <h3><Link to="/project-details">UX/UI Design</Link></h3>
                                    </div>
                                </div>
                            </div>

                            <div className="uk-item">
                                <div className="single-project-item">
                                    <Link to="/project-details" className="image">
                                        <img src={projectImg2} alt="image" />
                                    </Link>

                                    <div className="content">
                                        <Link to="#" className="category">Development</Link>
                                        <h3><Link to="/project-details">Web Development</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                            <div className="uk-item">
                                <div className="single-project-item">
                                    <Link to="/project-details" className="image">
                                        <img src={projectImg3} alt="image" />
                                    </Link>

                                    <div className="content">
                                        <Link to="#" className="category">Arts</Link>
                                        <h3><Link to="/project-details">Book Cover</Link></h3>
                                    </div>
                                </div>
                            </div>

                            <div className="uk-item">
                                <div className="single-project-item">
                                    <Link to="/project-details" className="image">
                                        <img src={projectImg4} alt="image" />
                                    </Link>

                                    <div className="content">
                                        <Link to="#" className="category">Development</Link>
                                        <h3><Link to="/project-details">Illustrations</Link></h3>
                                    </div>
                                </div>
                            </div>

                            <div className="uk-item">
                                <div className="single-project-item">
                                    <Link to="/project-details" className="image">
                                        <img src={projectImg5} alt="image" />
                                    </Link>

                                    <div className="content">
                                        <Link to="#" className="category">Design</Link>
                                        <h3><Link to="/project-details">Company Branding</Link></h3>
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
 
export default Projects;