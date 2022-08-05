import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

import blogImg1 from '../../assets/images/blog1.jpg';
import blogImg2 from '../../assets/images/blog2.jpg';
import blogImg3 from '../../assets/images/blog3.jpg';

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}
 
class LatestNews extends React.Component {
    render(){
        return (
            <>
                <section id="blog" className="blog-area uk-blog uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title uk-text-center">
                            <span>Our Company Blog</span>
                            <h2>Latest News</h2>
                            <div className="bar"></div>
                        </div>

                        <OwlCarousel 
                            className="blog-slides owl-carousel owl-theme"
                            {...options}
                        > 
                            <div className="single-blog-post">
                                <div className="blog-post-image">
                                    <Link to="/blog-details">
                                        <img src={blogImg1} alt="image" />
                                    </Link>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">25 April</span>
                                    <h3><Link to="/blog-details">The 13 Best Time Tracking Apps of 2021</Link></h3>
                                    <Link to="/blog-details" className="read-more">Read More</Link>
                                </div>
                            </div>

                            <div className="single-blog-post">
                                <div className="blog-post-image">
                                    <Link to="/blog-details">
                                        <img src={blogImg2} alt="image" />
                                    </Link>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">26 April</span>
                                    <h3><Link to="/blog-details">11 Tools to Help You Easily Create Proposals</Link></h3>
                                    <Link to="/blog-details" className="read-more">Read More</Link>
                                </div>
                            </div>

                            <div className="single-blog-post">
                                <div className="blog-post-image">
                                    <Link to="#">
                                        <img src={blogImg3} alt="image" />
                                    </Link>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">27 April</span>
                                    <h3><Link to="/blog-details">The Outlook for Digital Agencies in 4 Charts</Link></h3>
                                    <Link to="/blog-details" className="read-more">Read More</Link>
                                </div>
                            </div>

                            <div className="single-blog-post">
                                <div className="blog-post-image">
                                    <Link to="/blog-details">
                                        <img src={blogImg1} alt="image" />
                                    </Link>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">25 April</span>
                                    <h3><Link to="/blog-details">The 13 Best Time Tracking Apps of 2021</Link></h3>
                                    <Link to="/blog-details" className="read-more">Read More</Link>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>
            </>
        );
    }
}
 
export default LatestNews;