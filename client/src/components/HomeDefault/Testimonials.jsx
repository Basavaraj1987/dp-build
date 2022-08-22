import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import ModalVideo from 'react-modal-video';

import woman from '../../assets/images/women.jpg';
import shapeImg from '../../assets/images/1.png';

const options = {
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-right'></i>"
    ],
}
 
class Testimonials extends React.Component {

    state = {
        isOpen: false
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render(){
        return (
            <section id="clients" className="feedback-area uk-dark uk-section uk-feedback">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                        <div className="item">
                            <div className="feedback-img">
                                <img src={woman} alt="Testimonials" />

                                <img src={shapeImg} className="shape-img" alt="Testimonials" />

                                {/* <Link 
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    to="#" 
                                    className="video-btn popup-youtube">
                                        <i className="flaticon-multimedia"></i> Watch Video
                                </Link> */}
                            </div>
                        </div>

                        {/* <ModalVideo 
                            channel='youtube' 
                            isOpen={this.state.isOpen} 
                            videoId='bk7McNUjWgw' 
                            onClose={() => this.setState({isOpen: false})} 
                        /> */}

                        <div className="item">
                            <div className="feedback-inner">
                                <div className="uk-section-title section-title">
                                    <span>What Client Says About US</span>
                                    <h2>Our Testimonials</h2>
                                    <div className="bar"></div>
                                </div>

                                <OwlCarousel 
                                    className="feedback-slides owl-carousel owl-theme"
                                    {...options}
                                >
                                    <div className="single-feedback">
                                        <i className="flaticon-quote"></i>
                                        <p>Chethan and the team at Digipuush get into the client’s shoes with pragmatism to deliver beyond what’s just asked. They are thorough hard-working professionals, to whom we wish the best!! </p>

                                        <div className="client">
                                            <h3>Aakash Jain</h3>
                                            <span>Business Executive, Cosco India</span>
                                        </div>
                                    </div>

                                    <div className="single-feedback">
                                        <i className="flaticon-quote"></i>
                                        <p>The energy & passion clearly is seen in Digipuush's work & delivery. The level of understanding of communication is pretty deep. All the best guys.</p>

                                        <div className="client">
                                            <h3>Manoj Pandey</h3>
                                            <span>Head of Marketing - Fila, Proline & Vans</span>
                                        </div>
                                    </div>

                                    <div className="single-feedback">
                                        <i className="flaticon-quote"></i>
                                        <p>We worked with Digipuush for almost a year and had quite a nice journey with them. They have given our agriculture division the digital push it required to the max. Their designs were to the mark & delivered on time.</p>

                                        <div className="client">
                                            <h3>Dishita Ghelani</h3>
                                            <span>Manager - Marketing & HR</span>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Testimonials;