import React from 'react';
import { Link } from 'react-router-dom';

import bannerIllustrationImg from '../../assets/images/banner-illustration.png';
 
class Banner extends React.Component {
    render(){
        return (
            <>
                <div id="home" className="hero-banner">
                    <div className="uk-container">
                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                            <div className="item">
                                <div className="hero-banner-content">
                                    <h1>We Provide Best SEO Services</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <div className="btn-box">
                                        <a href="#contact" className="uk-button uk-button-default">Get Started</a>
                                        <Link to="#" className="uk-button-optional">About Us</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="hero-banner-image uk-text-center">
                                    <img 
                                        src={bannerIllustrationImg} 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Banner;