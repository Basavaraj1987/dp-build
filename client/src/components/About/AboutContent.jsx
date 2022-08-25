import React from 'react'
import about1 from '../../assets/images/about2.jpeg';
import about2 from '../../assets/images/about1.jpeg';

class AboutContent extends React.Component {
    render(){
        return (
            <section className="uk-about about-area uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                        <div className="item">
                            <div className="about-content">
                                <div className="uk-section-title section-title">
                                    <span>About Us</span>
                                    <h2>Push the limits of branding, marketing & advertising.</h2>
                                    <div className="bar"></div>
                                </div>

                                <div className="about-text">
                                    <div className="icon">
                                        <i className="flaticon-quality"></i>
                                    </div>
                                    <p>The digital world is expanding endlessly & every brand is trying to make its presence felt. Conversations are creating conversions & content is what is pushing the commerce. Come on board with us and lets set sail on a digital journey that pushes the limits of branding, marketing & advertising and carve ourselves a niche of mutual success.</p>

                                    {/* <div className="signature">
                                        <img src={require("../../assets/images/signature.png")} alt="signature" />
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="about-img">
                                <img src={about1} className="about-img1" alt="about-img" />
                                <img src={about2} className="about-img2" alt="about-img" />
                                <img src={require("../../assets/images/1.png")} className="shape-img" alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default AboutContent;