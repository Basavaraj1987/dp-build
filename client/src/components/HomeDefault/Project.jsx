import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import project1 from '../../assets/images/work/trojanMascot.png';
import project2 from '../../assets/images/work/CoscoFilter.png';
import project3 from '../../assets/images/work/Blackfigtech.png';
import project4 from '../../assets/images/work/KisanKraft.png';

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
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
            items: 4
        }
    }
}
 
class Project extends React.Component {
    render(){
        return (
            <>
                <section id="project" className="project-area uk-dark uk-project uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title">
                            <span>Our Completed Projects</span>
                            <h2>Our Work</h2>
                            <div className="bar"></div>

                            {/* <Link to="/projects" className="uk-button uk-button-default">All Projects</Link> */}
                        </div>
                    </div>

                    <OwlCarousel 
                        className="project-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-project">
                            <Link to="#" className="project-img">
                                <img src={project2} alt="Project" />
                            </Link>

                            <div className="project-content">
                                <h3><Link to="#">Instagram Filter for Cosco</Link></h3>
                                <ul>
                                    <li><Link to="#">Creative & Social Media</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="single-project">
                            <Link to="#" className="project-img">
                                <img src={project1} alt="Project" />
                            </Link>

                            <div className="project-content">
                                <h3><Link to="#">Trojan Plywood Brand Mascot</Link></h3>
                                <ul>
                                    <li><Link to="#">All Media</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="single-project">
                            <Link to="#" className="project-img">
                                <img src={project4} alt="Project" />
                            </Link>

                            <div className="project-content">
                                <h3><Link to="#">KisanKraft SEO</Link></h3>
                                <ul>
                                    <li><Link to="#">Search Engine Optimization</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="single-project">
                            <Link to="#" className="project-img">
                                <img src={project3} alt="project" />
                            </Link>

                            <div className="project-content">
                                <h3><Link to="#">Blackfigtech.com</Link></h3>
                                <ul>
                                    <li><Link to="#">Website Development</Link></li>
                                </ul>
                            </div>
                        </div>

                    </OwlCarousel>
                </section>
            </>
        );
    }
}
 
export default Project;