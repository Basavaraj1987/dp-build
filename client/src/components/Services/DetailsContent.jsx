import React from 'react';
import { Link } from 'react-router-dom';
 
class DetailsContent extends React.Component {
    render(){
        return (
            <section className="services-details-area uk-services-details uk-section">
                <div className="uk-container">
                    <article className="uk-article services-details">
                        <div className="uk-grid uk-flex">
                            <div className="inner uk-width-expand">
                                <div className="services-details-desc">
                                    <h3>Email Marketing</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <b>laboris nisi ut aliquip ex ea commodo consequat</b>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    <div className="services-image-slides owl-carousel owl-theme">
                                        <div className="item">
                                            <img src="assets/img/blog-details.jpg" alt="img" />
                                        </div>

                                        <div className="item">
                                            <img src="assets/img/blog-details.jpg" alt="img" />
                                        </div>

                                        <div className="item">
                                            <img src="assets/img/blog-details.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <h3>Why Choose This Service</h3>
                                    <p>Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium dolore Totam rem aperiam with Link long list of products and never ending customer support.</p>

                                    <ul className="services-features-list">
                                        <li><i className="flaticon-tick"></i> Great Technology</li>
                                        <li><i className="flaticon-tick"></i> Delivery On Time</li>
                                        <li><i className="flaticon-tick"></i> Expert Engineers</li>
                                        <li><i className="flaticon-tick"></i> Creative Architecture</li>
                                        <li><i className="flaticon-tick"></i> Industrial Construction</li>
                                        <li><i className="flaticon-tick"></i> 24/7 Support</li>
                                    </ul>

                                    <blockquote className="blockquote">
                                        <p>Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium dolore Totam rem aperiam with Link long list of products and never ending customer support.</p>
                                    </blockquote>

                                    <h3>Our Work Benefits</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>

                            <div className="uk-sidebar uk-width-1-5 uk-flex-first@l uk-first-column">
                                <div className="widget widget_search">
                                    <form>
                                        <input type="text" className="uk-input" placeholder="Search here..." />
                                        <button type="submit"><i className="flaticon-search"></i></button>
                                    </form>
                                </div>

                                <div className="widget service_list">
                                    <ul>
                                        <li><Link to="#" className="active">Email Marketing <i className="flaticon-right"></i></Link></li>
                                        <li><Link to="#">Market Analysis <i className="flaticon-right"></i></Link></li>
                                        <li><Link to="#">Keyword Research <i className="flaticon-right"></i></Link></li>
                                        <li><Link to="#">Digital Branding <i className="flaticon-right"></i></Link></li>
                                        <li><Link to="#">Creative Solutions <i className="flaticon-right"></i></Link></li>
                                        <li><Link to="#">Marketing Solutions <i className="flaticon-right"></i></Link></li>

                                        <li><Link to="#">Business Analytics <i className="flaticon-right"></i></Link></li>

                                        <li><Link to="#">UX & UI Design <i className="flaticon-right"></i></Link></li>

                                        <li><Link to="#">Photography <i className="flaticon-right"></i></Link></li>

                                        <li><Link to="#">Management <i className="flaticon-right"></i></Link></li>
                                    </ul>
                                </div>

                                <div className="widget widget_download">
                                    <h3 className="widget-title">Download</h3>
                                    <div className="bar"></div>
                                    
                                    <ul>
                                        <li><Link to="#">Our Brochure Pdf <i className="flaticon-edit"></i></Link></li>
                                        <li><Link to="#">Our Iso Certificate <i className="flaticon-edit"></i></Link></li>
                                        <li><Link to="#">Great Technology <i className="flaticon-edit"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        );
    }
}
 
export default DetailsContent;