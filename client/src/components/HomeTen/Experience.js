import React from 'react';

import experienceImg from '../../assets/images/experience-image.jpg';
 
class Experience extends React.Component {
    render(){
        return (
            <>
                <section className="experience-area uk-experience">
                    <div className="uk-container-expand">
                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                            <div className="item">
                                <div className="experience-content">
                                    <div className="content">
                                        <div className="uk-section-title section-title">
                                            <span>Growing With Our Clients</span>
                                            <h2>25 Yesrs of Experience</h2>
                                            <div className="bar"></div>
                                        </div>

                                        <div className="single-experience-box">
                                            <div className="icon">
                                                <i className="flaticon-plan"></i>
                                            </div>
                                            <h3>Consistency</h3>
                                            <p>Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur.</p>
                                        </div>

                                        <div className="single-experience-box">
                                            <div className="icon">
                                                <i className="flaticon-think"></i>
                                            </div>
                                            <h3>Improvement</h3>
                                            <p>Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur.</p>
                                        </div>

                                        <div className="single-experience-box">
                                            <div className="icon">
                                                <i className="flaticon-project"></i>
                                            </div>
                                            <h3>Strategy & Planning</h3>
                                            <p>Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="experience-image">
                                    <img src={experienceImg} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
 
export default Experience;