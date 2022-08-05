import React from 'react';
import { Link } from 'react-router-dom';
import NavigationFour from '../Navigation/NavigationFour';
import Footer from '../Common/Footer';
import blogImg from '../../assets/images/blog-details.jpg';
import clientOne from '../../assets/images/client1.png';
import clientTwo from '../../assets/images/client2.png';
import clientThree from '../../assets/images/client3.png';
import blogOne from '../../assets/images/blog1.jpg';
import blogTwo from '../../assets/images/blog2.jpg';
import blogThree from '../../assets/images/blog3.jpg';
 
class BlogDetails extends React.Component {

    state = {
        blogs: [],
        currentblog:[]
    };

    componentDidMount(){
        // var config = {
        //     headers: {'Access-Control-Allow-Origin': '*'}
        // };

        // axios.get('http://localhost:8000/posts', config)
        // .then(res => {
        //   const blogs = res.data;
        //   console.log(blogs);
        //   this.setState({ blogs });
        // })
        // .catch(error => {
        //     this.setState({ errorMessage: error.message });
        //     console.error('There was an error!', error);
        // });
        const blogs = [{"id":1,"user_id":1,"title":"virtual reality companies in India","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2021\/08\/virtual-reality-companies-in-India.jpg","excerpt":"Virtual reality companies no longer serve only gamers but also game-changers in business. AR and Virtual Reality technologies are disruptive and allow for experiential digital marketing that lets businesses communicate more effectively than ever.  Our digital marketing agency team enables you to be an early implementer and create an impact by influencing the behavior of existing","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":2,"user_id":1,"title":"PPC Services Pay Per Click","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2021\/08\/pay-per-click-login-website-payment-graphic-concept_53876-127624.webp","excerpt":"Pay Per Click Services PPC Management Services (Pay per click services) for your Business Searching for professional PPC services (pay per click)? Look no further, because we offer the best pay per click services (pay per click) that bring in revenue for your company. Our PPC services (pay per click) team is driven by creativity and technology to give you campaigns","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":5,"user_id":1,"title":"SEO Company In Bangalore","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2021\/08\/SEO-Company-In-Bangalore.jpg","excerpt":"Search Engine Optimization (SEO) Services   The SEO agency in Bangalore that businesses trust Being the top SEO agency in Bangalore, we are dedicated towards delivering results (for offline or online products or services) with stellar digital marketing strategies and top-ranking search results. It is only by partnering with a notably experienced SEO company like","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":6,"user_id":1,"title":"Lead Generation Services","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2021\/08\/Lead-Generation-Services.jpg","excerpt":"B2B Lead Generation Services in India for your Business Digipuush \u2013 Digital marketing agency, specializes in B2B lead generation services that gives measurable sales outcomes and ROI. It is, no doubt, a constant challenge to find new customers and maintain the sales pipeline. With the introduction of digital marketing channels and increase in accessibility, lead generation services in India have","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":7,"user_id":1,"title":"Advantages and Disadvantages of Social Media","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2020\/04\/Advantages-Disadvantages-Social-Media.jpg","excerpt":"Advantages and Disadvantages of Social Media; Today social media has become very important for any individual or brand. In this blog we analyse the various advantages and disadvantages of social media. Table Of Contents Introduction to the Advantages and Disadvantages of Social Media Exploring the Advantages and Disadvantages of Social Media Advantages of Social","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":8,"user_id":1,"title":"How much does Facebook Ads Cost in India | About Facebook advertising and promotion","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2020\/04\/facebook-ads-cost.jpg","excerpt":"Facebook ads cost are constantly changing. Let\u2019s dive deep down and understand the various costs for ads and also the factors affecting it.   Table Of Contents Facebook Ads Cost (Approximate at the time of publishing this blog) Introduction to Facebook Advertising How much does the Facebook Ads Cost? Let us understand the preferred bidding models by","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":9,"user_id":1,"title":"Complete guide to online reputation management services (ORM services)","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2020\/04\/online-reputation-management-1.jpg","excerpt":"Online reputation management means to take control on the conversations from individual or other entity on internet. Online Reputation Management (ORM) is a strategy and process of monitoring, identifying, and influencing your digital reputation and credibility online","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":10,"user_id":1,"title":"What is Digital Media Marketing?","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2020\/03\/What-is-Digital-Media-Marketing.jpg","excerpt":"Digital media marketing means advertising your products through digital platforms like social media, search engines, emails, etc. Marketing works only when it is made at the right time and at right place to right audience. Digital media marketing has become one of the most powerful marketing in digital media. In modern world Digital media","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":11,"user_id":1,"title":"Grow your business with digital marketing","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2020\/03\/Grow-your-business-with-digital-marketing.jpg","excerpt":"Grow your business with digital marketing as traditional marketing is fading away with modern marketing technology and trends. While there are many similarities between traditional marketing and digital marketing, there are also key differences that can make the difference between a winning campaign that allows you to earn money and a losing campaign that leads","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}}];

        const id = window.location.href.split("/").pop();
        const currentblog = [];

        blogs.map(blog => {
                if(id == blog.id){
                    currentblog.title = blog.title;
                    currentblog.post_image = blog.post_image;
                    this.setState({ currentblog });
                }
            }
        );
    }

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        const BlogDetails = this.state.currentblog;
        return (
            <>
                <NavigationFour />
                
                {/*  Start Page Title Area */}
                <section className="page-title-area uk-page-title">
                    <div className="uk-container">
                        <h1>{BlogDetails.title}</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li>{BlogDetails.title}</li>
                        </ul>
                    </div>
                </section>
                {/* End Page Title Area */}

                {/*  Start Blog Details Area */}
                <section className="blog-details-area uk-blog-details uk-section">
                    <div className="uk-container">
                        <article className="uk-article blog-details">
                            <div className="uk-grid uk-flex">
                                <div className="inner uk-width-expand">
                                    <div className="article-img">
                                        <img src={BlogDetails.post_image} alt="blog-details" style={{width: '100%'}} />
                                        <div className="date">20 <br /> Mar</div>
                                    </div>

                                    <div className="article-content">
                                        <ul className="category">
                                            <li><Link to="#">IT</Link></li>
                                            <li><Link to="#">Mobile</Link></li>
                                            <li><Link to="#">Marketing</Link></li>
                                            <li><Link to="#">Design</Link></li>
                                            <li><Link to="#">Development</Link></li>
                                        </ul>
                                            
                                        <h3>The 13 Best Time Tracking Apps of 2019</h3>
                                        
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In necessitatibus provident facere, reiciendis voluptate dolorem iste consectetur veniam aperiam suscipit ad ipsum et labore Link repellendus debitis explicabo quisquam obcaecati....</p>
                                        
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>
                                        
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>
                                        
                                        <blockquote className="blockquote">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate.</p>
                                        </blockquote>
                                        
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>
                                    </div>

                                    <div className="post-controls-buttons uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                                        <div className="item">
                                            <Link to="#" className="uk-button uk-button-default">Prev Post</Link>
                                        </div>

                                        <div className="item uk-text-right">
                                            <Link to="#" className="uk-button uk-button-default">Next Post</Link>
                                        </div>
                                    </div>

                                    <div id="comments" className="comments-area">
                                        <h2 className="comments-title">3 Comments</h2>

                                        <ol className="comment-list">
                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={clientOne} alt="client" className="avatar" />
                                                            <b className="fn">John Smith</b>
                                                            <span className="says">says:</span>
                                                        </div>

                                                        <div className="comment-metadata">
                                                            <Link to="#">
                                                                March 28, 2019 at 7:16 am
                                                            </Link>
                                                        </div>
                                                    </footer>

                                                    <div className="comment-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat Link ante. It is Link long established fact that Link reader will be distracted by the readable content of Link page when looking at its layout.</p>
                                                    </div>

                                                    <div className="reply">
                                                        <Link to="#" rel="nofollow" className="comment-reply-link">Reply</Link>
                                                    </div>
                                                </article>

                                                <ol className="children">
                                                    <li className="comment">
                                                        <article className="comment-body">
                                                            <footer className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img src={clientTwo} alt="client" className="avatar" />
                                                                    <b className="fn">John Smith</b>
                                                                    <span className="says">says:</span>
                                                                </div>

                                                                <div className="comment-metadata">
                                                                    <Link to="#">
                                                                        March 28, 2019 at 7:16 am
                                                                    </Link>
                                                                </div>
                                                            </footer>

                                                            <div className="comment-content">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat Link ante. It is Link long established fact that Link reader will be distracted by the readable content of Link page when looking at its layout.</p>
                                                            </div>

                                                            <div className="reply">
                                                                <Link to="#" rel="nofollow" className="comment-reply-link">Reply</Link>
                                                            </div>
                                                        </article>
                                                    </li>
                                                </ol>
                                            </li>

                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={clientThree} alt="client" className="avatar" />
                                                            <b className="fn">John Smith</b>
                                                            <span className="says">says:</span>
                                                        </div>

                                                        <div className="comment-metadata">
                                                            <Link to="#">
                                                                March 28, 2019 at 7:16 am
                                                            </Link>
                                                        </div>
                                                    </footer>

                                                    <div className="comment-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat Link ante. It is Link long established fact that Link reader will be distracted by the readable content of Link page when looking at its layout.</p>
                                                    </div>

                                                    <div className="reply">
                                                        <Link to="#" rel="nofollow" className="comment-reply-link">Reply</Link>
                                                    </div>
                                                </article>
                                            </li>
                                        </ol>

                                        <div id="respond" className="comment-respond">
                                            <h3 className="comment-reply-title">Leave Link Reply</h3>

                                            <form id="commentform" className="comment-form" onSubmit={this.onFormSubmit}>
                                                <p className="comment-notes">Your email address will not be published.</p>
                                                
                                                <p className="comment-form-comment">
                                                    <textarea id="comment" placeholder="Comment" cols="45" rows="5" />
                                                </p>
                                                <p className="comment-form-author">
                                                    <input id="author" placeholder="Name" type="text" />
                                                </p>
                                                <p className="comment-form-email">
                                                    <input id="email" placeholder="Email"  type="text" />
                                                </p>
                                                <p className="comment-form-url">
                                                    <input id="url" placeholder="Website" type="text" />
                                                </p>
                                                <p className="form-submit">
                                                    <input name="submit" type="submit" id="submit" className="submit" value="Post Comment" />
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="uk-sidebar uk-width-1-5">
                                    <div className="widget widget_search">
                                        <form>
                                            <input type="text" className="uk-input" placeholder="Search here..." />
                                            <button type="submit"><i className="flaticon-search"></i></button>
                                        </form>
                                    </div>
                                    
                                    <div className="widget widget_categories">
                                        <h3 className="widget-title">Categories</h3>
                                        <div className="bar"></div>

                                        <ul>
                                            <li><Link to="#">AJAX</Link></li>
                                            <li><Link to="#">Apache</Link></li>
                                            <li><Link to="#">CSS</Link></li>
                                            <li><Link to="#">PHP</Link></li>
                                            <li><Link to="#">Django</Link></li>
                                            <li><Link to="#">Error</Link></li>
                                            <li><Link to="#">IIS</Link></li>
                                            <li><Link to="#">JavaScript</Link></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="widget widget_recent_entries">
                                        <h3 className="widget-title">Recent Posts</h3>
                                        <div className="bar"></div>

                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <img src={blogOne} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">The Most Popular New top Business Apps</Link></h5>
                                                <p className="date">21 March, 2019</p>
                                            </li>

                                            <li>
                                                <Link to="#">
                                                    <img src={blogTwo} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">3 WooCommerce Plugins to Boost Sales</Link></h5>
                                                <p className="date">20 March, 2019</p>
                                            </li>

                                            <li>
                                                <Link to="#">
                                                    <img src={blogThree} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">The Best Marketing top Management Tools</Link></h5>
                                                <p className="date">27 March, 2019</p>
                                            </li>

                                            <li>
                                                <Link to="#">
                                                    <img src={blogOne} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">How to Build Link Business Dashboard</Link></h5>
                                                <p className="date">27 January, 2019</p>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="widget widget_tag_cloud">
                                        <h3 className="widget-title">Tags</h3>
                                        <div className="bar"></div>

                                        <div className="tagcloud">
                                            <Link to="#">Error</Link>
                                            <Link to="#">Cake Bake</Link>
                                            <Link to="#">Dromzone</Link>
                                            <Link to="#">File</Link>
                                            <Link to="#">Yii</Link>
                                            <Link to="#">Yii2</Link>
                                            <Link to="#">UUID</Link>
                                            <Link to="#">Setup</Link>
                                            <Link to="#">Error</Link>
                                            <Link to="#">Cake Bake</Link>
                                            <Link to="#">Dromzone</Link>
                                            <Link to="#">File</Link>
                                            <Link to="#">Yii</Link>
                                            <Link to="#">Yii2</Link>
                                            <Link to="#">UUID</Link>
                                            <Link to="#">Setup</Link>
                                        </div>
                                    </div>
                                    
                                    <div className="widget widget_archive">
                                        <h3 className="widget-title">Archives</h3>
                                        <div className="bar"></div>

                                        <ul>
                                            <li><Link to="#">December 2018</Link></li>
                                            <li><Link to="#">January 2019</Link></li>
                                            <li><Link to="#">February 2019</Link></li>
                                            <li><Link to="#">March 2019</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <Footer />
            </>
        );
    }
}
 
export default BlogDetails;