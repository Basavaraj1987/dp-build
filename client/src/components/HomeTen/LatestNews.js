import React from 'react';
import { Link } from 'react-router-dom';

import blogImg1 from '../../assets/images/blog4.jpg';
import blogImg2 from '../../assets/images/blog5.jpg';
import blogImg3 from '../../assets/images/blog6.jpg';
 
class LatestNews extends React.Component {
    render(){
        return (
            <>
                <section className="blog-area uk-blog uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title">
                            <span>News</span>
                            <h2>Latest News Update</h2>
                            <div className="bar"></div>
                        </div>

                        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                            <div className="uk-item">
                                <div className="single-blog-post-item">
                                    <Link to="/blog-details" className="post-image">
                                        <img src={blogImg1} alt="image" />
                                    </Link>

                                    <div className="post-content">
                                        <Link to="#" className="category">UX/UI</Link>
                                        <h3><Link to="/blog-details">University Admissions Could Face Emergency Controls</Link></h3>
                                    </div>
                                </div>
                            </div>

                            <div className="uk-item">
                                <div className="single-blog-post-item">
                                    <Link to="/blog-details" className="post-image">
                                        <img src={blogImg2} alt="image" />
                                    </Link>

                                    <div className="post-content">
                                        <Link to="#" className="category">DEVELOPMENT</Link>
                                        <h3><Link to="/blog-details">How To Create A ReactJS Image Lightbox Gallery?</Link></h3>
                                    </div>
                                </div>
                            </div>

                            <div className="uk-item">
                                <div className="single-blog-post-item">
                                    <Link to="/blog-details" className="post-image">
                                        <img src={blogImg3} alt="image" />
                                    </Link>

                                    <div className="post-content">
                                        <Link to="#" className="category">DESIGN</Link>
                                        <h3><Link to="/blog-details">Hide WooCommerce Products From Specific Categories</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
 
export default LatestNews;