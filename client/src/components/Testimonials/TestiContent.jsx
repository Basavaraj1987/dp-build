import React from 'react';
 
class TestiContent extends React.Component {
    render(){
        return (
            <section className="testimonials-area uk-testimonials uk-section bg-gray">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                        <div className="testimonials-item">
                            <div className="testimonials-single-item">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                            </div>

                            <div className="quotation-profile">
                                <img src={require("../../assets/images/client1.png")} alt="testimonial" />

                                <div className="profile-info">
                                    <h3>David Warner</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonials-item">
                            <div className="testimonials-single-item">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                            </div>

                            <div className="quotation-profile">
                                <img src={require("../../assets/images/client2.png")} alt="testimonial" />

                                <div className="profile-info">
                                    <h3>John Lucy</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonials-item">
                            <div className="testimonials-single-item">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                            </div>

                            <div className="quotation-profile">
                                <img src={require("../../assets/images/client3.png")} alt="testimonial" />

                                <div className="profile-info">
                                    <h3>Trent Boult</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonials-item">
                            <div className="testimonials-single-item">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                            </div>

                            <div className="quotation-profile">
                                <img src={require("../../assets/images/client1.png")} alt="testimonial" />

                                <div className="profile-info">
                                    <h3>Corey Anderson</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonials-item">
                            <div className="testimonials-single-item">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                            </div>

                            <div className="quotation-profile">
                                <img src={require("../../assets/images/client2.png")} alt="testimonial" />

                                <div className="profile-info">
                                    <h3>Marta Steven</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonials-item">
                            <div className="testimonials-single-item">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                            </div>

                            <div className="quotation-profile">
                                <img src={require("../../assets/images/client3.png")} alt="testimonial" />

                                <div className="profile-info">
                                    <h3>Kane Williamson</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default TestiContent;