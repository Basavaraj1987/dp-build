import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import blogOne from '../../assets/images/blog1.jpg';
import blogTwo from '../../assets/images/blog2.jpg';
import blogThree from '../../assets/images/blog3.jpg';

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        786: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}
 
class LatestNews extends React.Component {

    state = {
        blogs: []
    };

    componentDidMount(){
        const blogs = [{"id":1,"user_id":1,"title":"virtual reality companies in India","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2021\/08\/virtual-reality-companies-in-India.jpg","excerpt":"Virtual reality companies no longer serve only gamers but also game-changers in business. AR and Virtual Reality technologies are disruptive and allow for experiential digital marketing that lets businesses communicate more effectively than ever.  Our digital marketing agency team enables you to be an early implementer and create an impact by influencing the behavior of existing","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":2,"user_id":1,"title":"PPC Services Pay Per Click","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2021\/08\/pay-per-click-login-website-payment-graphic-concept_53876-127624.webp","excerpt":"Pay Per Click Services PPC Management Services (Pay per click services) for your Business Searching for professional PPC services (pay per click)? Look no further, because we offer the best pay per click services (pay per click) that bring in revenue for your company. Our PPC services (pay per click) team is driven by creativity and technology to give you campaigns","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":5,"user_id":1,"title":"SEO Company In Bangalore","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2021\/08\/SEO-Company-In-Bangalore.jpg","excerpt":"Search Engine Optimization (SEO) Services   The SEO agency in Bangalore that businesses trust Being the top SEO agency in Bangalore, we are dedicated towards delivering results (for offline or online products or services) with stellar digital marketing strategies and top-ranking search results. It is only by partnering with a notably experienced SEO company like","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":6,"user_id":1,"title":"Lead Generation Services","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2021\/08\/Lead-Generation-Services.jpg","excerpt":"B2B Lead Generation Services in India for your Business Digipuush \u2013 Digital marketing agency, specializes in B2B lead generation services that gives measurable sales outcomes and ROI. It is, no doubt, a constant challenge to find new customers and maintain the sales pipeline. With the introduction of digital marketing channels and increase in accessibility, lead generation services in India have","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":7,"user_id":1,"title":"Advantages and Disadvantages of Social Media","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2020\/04\/Advantages-Disadvantages-Social-Media.jpg","excerpt":"Advantages and Disadvantages of Social Media; Today social media has become very important for any individual or brand. In this blog we analyse the various advantages and disadvantages of social media. Table Of Contents Introduction to the Advantages and Disadvantages of Social Media Exploring the Advantages and Disadvantages of Social Media Advantages of Social","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":8,"user_id":1,"title":"How much does Facebook Ads Cost in India | About Facebook advertising and promotion","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2020\/04\/facebook-ads-cost.jpg","excerpt":"Facebook ads cost are constantly changing. Let\u2019s dive deep down and understand the various costs for ads and also the factors affecting it.   Table Of Contents Facebook Ads Cost (Approximate at the time of publishing this blog) Introduction to Facebook Advertising How much does the Facebook Ads Cost? Let us understand the preferred bidding models by","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":9,"user_id":1,"title":"Complete guide to online reputation management services (ORM services)","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2020\/04\/online-reputation-management-1.jpg","excerpt":"Online reputation management means to take control on the conversations from individual or other entity on internet. Online Reputation Management (ORM) is a strategy and process of monitoring, identifying, and influencing your digital reputation and credibility online","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":10,"user_id":1,"title":"What is Digital Media Marketing?","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2020\/03\/What-is-Digital-Media-Marketing.jpg","excerpt":"Digital media marketing means advertising your products through digital platforms like social media, search engines, emails, etc. Marketing works only when it is made at the right time and at right place to right audience. Digital media marketing has become one of the most powerful marketing in digital media. In modern world Digital media","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}},{"id":11,"user_id":1,"title":"Grow your business with digital marketing","post_image":"https:\/\/digipuush.com\/wp-content\/uploads\/2020\/03\/Grow-your-business-with-digital-marketing.jpg","excerpt":"Grow your business with digital marketing as traditional marketing is fading away with modern marketing technology and trends. While there are many similarities between traditional marketing and digital marketing, there are also key differences that can make the difference between a winning campaign that allows you to earn money and a losing campaign that leads","user":{"id":1,"first_name":"Chetan","last_name":"Naik","email":"chetandude5@gmail.com","picture":"https:\/\/via.placeholder.com\/150","subscription":"free","created_at":"2022-07-27T17:04:28.000000Z","full_name":"Chetan Naik"}}];
        this.setState({ blogs });
    }

    render(){

        this.state.blogs.map(blog =>
            blog.links = blog.title.replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-').toLowerCase() +'/'+ blog.id // collapse dashes
        )

        return (
            <>
                <section id="blog" className="blog-area uk-dark uk-blog uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title">
                            <span>Our Company Blog</span>
                            <h2>Latest News</h2>
                            <div className="bar"></div>

                            <Link to="/blog" className="uk-button uk-button-default">View All</Link>
                        </div>

                        <OwlCarousel 
                            className="blog-slides owl-carousel owl-theme"
                            {...options}
                        >

                            {
                                this.state.blogs.map(blog =>
                                    <div key={blog.id} className="single-blog-post">
                                        <div className="blog-post-image">
                                            <Link to="{blog.links}">
                                                <img src={blog.post_image} alt="news" />
                                            </Link>
                                        </div>
        
                                        <div className="blog-post-content">
                                            <span className="date">25 April</span>
                                            <h3><Link to="{blog.links}">{blog.title}</Link></h3>
                                            <Link to="{blog.links}" className="read-more">Read More</Link>
                                        </div>
                                    </div>
    
                                )
                            }

                        </OwlCarousel>
                    </div>
                </section>
            </>
        );
    }
}
 
export default LatestNews;