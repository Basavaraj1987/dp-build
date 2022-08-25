import React from 'react';
import { Link } from 'react-router-dom';
 
class ServiceOneContent extends React.Component {
    render(){
        return (
            <section id="project" className="project-area uk-project uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                        <div className="single-project">
                            <Link to="/project-details" className="project-img">
                                <img src={require("../../assets/images/project1.jpg")} alt="project" />
                            </Link>

                            <div className="project-content">
                                <h3><Link to="/project-details">Development</Link></h3>
                                <ul>
                                    <li><Link to="#">Web</Link></li>
                                    <li><Link to="#">Mobile</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="single-project">
                            <Link to="/project-details" className="project-img">
                                <img src={require("../../assets/images/project2.jpg")} alt="project" />
                            </Link>

                            <div className="project-content">
                                <h3><Link to="/project-details">Architecture</Link></h3>
                                <ul>
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">Bridge</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="single-project">
                            <Link to="/project-details" className="project-img">
                                <img src={require("../../assets/images/project3.jpg")} alt="project" />
                            </Link>

                            <div className="project-content">
                                <h3><Link to="/project-details">UX/UI Design</Link></h3>
                                <ul>
                                    <li><Link to="#">Web</Link></li>
                                    <li><Link to="#">Mobile</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="single-project">
                            <Link to="/project-details" className="project-img">
                                <img src={require("../../assets/images/project1.jpg")} alt="project" />
                            </Link>

                            <div className="project-content">
                                <h3><Link to="/project-details">Development</Link></h3>
                                <ul>
                                    <li><Link to="#">Web</Link></li>
                                    <li><Link to="#">Mobile</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="single-project">
                            <Link to="/project-details" className="project-img">
                                <img src={require("../../assets/images/project3.jpg")} alt="project" />
                            </Link>

                            <div className="project-content">
                                <h3><Link to="/project-details">UX/UI Design</Link></h3>
                                <ul>
                                    <li><Link to="#">Web</Link></li>
                                    <li><Link to="#">Mobile</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="single-project">
                            <Link to="/project-details" className="project-img">
                                <img src={require("../../assets/images/project2.jpg")} alt="project" />
                            </Link>

                            <div className="project-content">
                                <h3><Link to="/project-details">Architecture</Link></h3>
                                <ul>
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">Bridge</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="pagination-area">
                        <ul className="uk-pagination uk-flex-center">
                            <li><Link to="#"><span className="flaticon-back"></span></Link></li>
                            <li><Link to="#">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li className="uk-active"><Link to="#">3</Link></li>
                            <li><Link to="#">4</Link></li>
                            <li><Link to="#"><span className="flaticon-right"></span></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default ServiceOneContent;