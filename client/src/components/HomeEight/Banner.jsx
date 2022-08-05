import React from 'react';
import { Link } from 'react-router-dom';

import BannerImg from '../../assets/images/banner-img1.jpg';
 
class Banner extends React.Component {
    render(){
        return (
            <>
                <div id="home" className="banner-section">
                    <div className="uk-container-expand">
                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                            <div className="item">
                                <div className="banner-content">
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                            <div className="content">
                                                <h1>The best HTML Template for a <span>Startup Business</span></h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                                <div className="btn-box">
                                                    <a href="#contact" className="uk-button uk-button-default">
                                                        Get Started
                                                    </a>
                                                    <Link to="#" className="uk-button-optional">
                                                        About Us
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="banner-image">
                                    <img 
                                        src={BannerImg} 
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