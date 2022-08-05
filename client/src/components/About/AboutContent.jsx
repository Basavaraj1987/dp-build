import React from 'react'
 
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
                                    <h2>Leading the way in Creative Digital Agency</h2>
                                    <div className="bar"></div>
                                </div>

                                <div className="about-text">
                                    <div className="icon">
                                        <i className="flaticon-quality"></i>
                                    </div>
                                    <h3>Best Digital Agency in the World</h3>
                                    <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents. We work with you, not for you. Although we have a great resources.</p>
                                    <p>We are an experienced and talented team of passionate.</p>
                                    <p>We are an experienced and talented team of passionate consultants who live and breathe search engine marketing.</p>

                                    <div className="signature">
                                        <img src={require("../../assets/images/signature.png")} alt="signature" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="about-img">
                                <img src={require("../../assets/images/about1.jpg")} className="about-img1" alt="about-img" />
                                <img src={require("../../assets/images/about2.jpg")} className="about-img2" alt="about-img" />
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