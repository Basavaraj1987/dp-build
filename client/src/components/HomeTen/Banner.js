import React from 'react';
import { Link } from 'react-router-dom';

import bannerImg1 from '../../assets/images/banner-img2.jpg';
import shapeImg1 from '../../assets/images/shape4.png';
import shapeImg2 from '../../assets/images/shape5.png';
import shapeImg3 from '../../assets/images/shape6.png';
import shapeImg4 from '../../assets/images/shape7.png';
 
class Banner extends React.Component {
    render(){
        return (
            <>
                <div className="uk-corporate-banner corporate-main-banner">
                    <div className="uk-container-expand">
                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                            <div className="uk-item">
                                <div className="corporate-banner-content">
                                    <div className="content">
                                        <h1>We take care of the future</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverraaccumsan lacus vel facilisis.</p>
                                        <Link to="/contact" className="uk-button uk-button-default">Get Started</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="uk-item">
                                <div className="corporate-banner-image">
                                    <img src={bannerImg1} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shape1"><img src={shapeImg1} alt="image" /></div>
                    <div className="shape2"><img src={shapeImg2} alt="image" /></div>
                    <div className="shape3"><img src={shapeImg3} alt="image" /></div>
                    <div className="shape4"><img src={shapeImg4} alt="image" /></div>
                </div>
            </>
        );
    }
}
 
export default Banner;