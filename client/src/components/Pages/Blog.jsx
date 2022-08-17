import React from 'react';
import { Link } from "react-router-dom";
import NavigationFour from '../Navigation/NavigationFour';
import Footer from '../Common/Footer';
import AllBlog from './AllBlog';

class Blog extends React.Component {

    render(){

        return (
            <>
                <NavigationFour />

                <section class="page-title-area uk-page-title">
                    <div class="uk-container">
                        <h1>Blog</h1>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </section>

                <section className="blog-area uk-blog uk-section">
                    <div className="uk-container">
                        <div>
                            <AllBlog />
                        </div>

                        <div className="pagination-area">
                            <ul className="uk-pagination uk-flex-center">
                                <li><Link to="#"><span className="flaticon-back"></span></Link></li>
                                <li><Link to="#">1</Link></li>

                                <li><Link to="#"><span className="flaticon-right"></span></Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                <Footer />
            </>
        );
    }
}
 
export default Blog;