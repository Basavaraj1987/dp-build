import React from 'react';
 
class FeaturesTwo extends React.Component {
    render(){
        return (
            <section className="uk-features uk-dark features-area uk-section uk-padding-remove-top">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m">
                        <div className="uk-item">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="flaticon-mail"></i>
                                </div>
                                <h3>Branding & Creative</h3>
                                <div className="bar"></div>
                                <p>Create a unique brand story that stays with your consumers through compelling creatives. </p>

                                <div className="dot-img">
                                    <img src={require("../../assets/images/dot.png")} alt="dot" className="color-dot" />
                                    <img src={require("../../assets/images/white-dot.png")} alt="dot" className="white-dot" />
                                </div>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                </div>
                            </div>
                        </div>

                        <div className="uk-item">
                            <div className="single-features-box active">
                                <div className="icon">
                                    <i className="flaticon-targeting"></i>
                                </div>
                                <h3>Digital Marketing</h3>
                                <div className="bar"></div>
                                <p>The world is your market & we’ll help you reach far and wide through digital assets that go beyond boundaries.</p>

                                <div className="dot-img">
                                    <img src={require("../../assets/images/dot.png")} alt="dot" className="color-dot" />
                                    <img src={require("../../assets/images/white-dot.png")} alt="dot" className="white-dot" />
                                </div>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                </div>
                            </div>
                        </div>

                        <div className="uk-item">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="flaticon-magnifying-glass"></i>
                                </div>
                                <h3>Video</h3>
                                <div className="bar"></div>
                                <p>Give your brand the eye-balls it deserves with engaging videos that break clutter & create a lasting impression</p>

                                <div className="dot-img">
                                    <img src={require("../../assets/images/dot.png")} alt="dot" className="color-dot" />
                                    <img src={require("../../assets/images/white-dot.png")} alt="dot" className="white-dot" />
                                </div>

                                <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default FeaturesTwo;