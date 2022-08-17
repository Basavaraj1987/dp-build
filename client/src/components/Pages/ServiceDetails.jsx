import React from 'react';
import { Link } from 'react-router-dom';
import NavigationFour from '../Navigation/NavigationFour';
import OwlCarousel from 'react-owl-carousel3';
import Collapsible from 'react-collapsible';
import blogImage from '../../assets/images/blog-details.jpg';
import Footer from '../Common/Footer';

const options = {
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true
}
 
class ServiceDetails extends React.Component {

    state = {
        services: [],
        currentservice:[]
    };

    componentDidMount(){
        const services = [{"id":1,"name":"Branding","icon":"flaticon-plan","content":"<p>There&rsquo;s more to branding than just creating a logo.<\/p><p>Be Different. Be Memorable. Be Respectable. Be Appreciable. Create an everlasting impression with your brand. Be ready to brand your brand as a Disruptor.&nbsp;<\/p><p>You are here on our website. Which tells us a lot about your intent to make a lasting impression. You are on the right track, with us.<\/p><p>As a company that champions branding, what we offer includes conceptualizing, visualizing, strategizing, and everything else you would need to make a hero out of your brand.&nbsp;<\/p><p>Tell us what your thoughts are, share with us your ideas and together lets give your brand an undeniable personality.&nbsp;<\/p><p>We will get into the details of your brand &amp; understand it inside out. Warning: We may just know and understand your brand a little more than you!<\/p><p>The Branding that we do, is what will make your brand stand out. The identity that we create takes into account colours, fonts, shapes &amp; sizes to give your brand a uniqueness that will help it stand tall and make an impression. Right from the Brand Name, Logo to complete Brand Identity, Manual &amp; Guidelines development, we do it all.<\/p>","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":2,"name":"Creative","icon":"flaticon-think","content":"<p>Creativity is a combination of Imagination &amp; Inspiration, and we couple them pretty well so that your brand has a high recall.<\/p><p>One that connects with your audience instantly. One that gives her or him the confidence in your brand and persuades them to make the purchase.<\/p><p>It is what will set your brand a cut above your competition with memorable communication that will go the extra-mile and live beyond the time it plays for or space it stays in.<\/p><p>Think of it as your Super Power to help win over every battle &ndash; Sales, Service, Human Resource Development and CSR.<\/p><p>Creativity is what we&rsquo;ll arm your brand with to attack on all fronts &ndash; Digital, Print, OOH, Radio, BTL, OTT and so on.<\/p><p>It&rsquo;s something that is a given. Creativity is one of the pillars of our Branding efforts. It is what helps us create a different story each time your brand needs to speak of an offering or engagement.<\/p>","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":3,"name":"Social Media Marketing","icon":"flaticon-shout","content":"<p>This is the Word of Mouth of the virtual world, and we can manage your identity well across all social handles.<\/p><p>Different platforms have different audiences and our expertise in each of them will help your brand reach the designated audience in a manner that engages and converts. Right from developing Platform-Apt Creatives, Post Management to Customer Response Management, we do it all.<\/p><p>A brand book for a face. A tube for your brand. A gram for you to shine instantly. A song you can tweet. FB, Youtube, Insta, Twitter, your audience is everywhere. Talk to them in their language.&nbsp;<\/p><p>From monthly calendars to daily posts, from the right time to post to right topic to host, from what kind of content to which kind of moment, we&rsquo;ll be there with your brand every step of the way to make your day.<\/p>","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":4,"name":"Website","icon":"flaticon-analytics-1","content":"<p>It is the virtual address of your Business &amp; Brand. We can build a nice one with all your offerings presented in a nice manner. By that we mean, Creative, Attractive, Informative &amp; Efficient.<\/p><p>Your website speaks a lot about your business. It is a testimonial of your company&rsquo;s Goals and Objectives. And it is as important as having the business. Hence choosing an effective web development company that understands your business and is able to create an impact is of utmost importance.&nbsp;<\/p><p>Our team of expert UI\/ UX Designers and Developers take pride in what they do and will stop at nothing to create a user experience that is easy to use and hard to forget. And, they will rest only when they create the most impressive and clutter-breaking web address for your brand.<\/p><p>We&rsquo;ll help you leverage your digital presence to the max and make every visit count. Right from WordPress, Shopify, React, Magento we develop websites and web-apps on all platforms.<\/p>","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":5,"name":"SEO","icon":"flaticon-ux-design","content":"<p>Top of Google Search is equivalent to being in top of Consumer&rsquo;s Mind.<\/p><p>This is where we make the needle in the haystack shine and grab attention. All a consumer has to do is search for you and we&rsquo;ll make sure he\/she finds you. Right from basic SEO, Local SEO, YouTube SEO, App Store SEO we do it all.<\/p><p>So, what we are saying is we won&rsquo;t just improve SEO profile, we will gain competitor SEO market share too.<\/p><p>And we make that possible by increasing your Website&rsquo;s Domain and Page Authority which results in significantly and effectively increasing your non-brand traffic to your website that converts.<\/p><p>We analyse advanced on-page strategies and provide you with recommendations including advanced interlinking and Google Answer Box.<\/p>","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":6,"name":"Influencer Marketing","icon":"flaticon-camera","content":"<p>Influencers are the Modern-Day Celebrities who have a dedicated following &amp; we know exactly which influencer fits best for your brand.<\/p><p>Sometimes brands require a gentle nudge. Like when a subject matter expert talks of your brand&rsquo;s speciality it is bound to carry more weight. We&rsquo;ll help your brand get this nudge.&nbsp;<\/p><p>With a huge database of influencers, we leverage the right influencers for your brand or product based on Age, Gender, Location and Interests.<\/p><p>Use creative strategy to make the right connection with your target audience. Right from content, concept, production to management.<\/p><p>Last but not the least we will provide you with detailed reports that&rsquo;ll help you understand the effectiveness of the campaign, optimize and improve.<\/p>","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":7,"name":"Content Marketing","icon":"flaticon-project","content":"<p>They say Customer is king, they also say Content is king. We say, we are the King-Makers.<\/p><p>Being at the right place at the right time is often the reason behind most success stories. We&rsquo;ll help your brand&rsquo;s content reach the right audience and make a connection that converts.&nbsp;<\/p><p>We&rsquo;ll help your brand create stellar content through every stage of the buyer journey. Our content research team builds strategy based on a detailed mapping of your audience and their interests.<\/p><p>We have the right process in place to create and disseminate customised content that help you get the best SEO results.<\/p><p>The AIDA - Awareness Interest Desire Action - model that we follow will not only help you reach your audience but compel them to make a purchase.<\/p>","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":8,"name":"Performance Marketing","icon":"flaticon-chat","content":"<p>Reach the right audience with razor sharp Targeting and Retargeting with our expert Performance Marketing team. Consumer&rsquo;s mind is our bull&rsquo;s eye!<\/p><p>Reach the consumer who&rsquo;s been looking for your brand. Right from Google Ads, Google PPC campaigns, YouTube Ads, Facebook Ads, Instagram Ads, LinkedIn Ads and more, we offer A to Z of all paid marketing services.<\/p><p>Our in-depth audience segmentation Maximizes conversion volume while Minimizing conversion cost. We Monitor and Change interactions across SEO and PPC campaigns to eliminate cannibalization.<\/p><p>Our marketing strategy is completely data driven which is regularly monitored and managed to maximize ROAS.<\/p>","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":9,"name":"Video & Animation","icon":"flaticon-data","content":"<p>Anything that moves grabs our attention. We make videos and animation in such a manner that not only the attention is grabbed but is made to stay till the message is communicated.<\/p><p>There&rsquo;s nothing that moves a mind like moving pictures, And, we make videos that tell a story and that&rsquo;s hard to forget. Animation or live-action, stock or shot, we&rsquo;ll help you package a moving picture that will be the talk of the town. Right from 2D Animation, 3D Animation, Whiteboard Animation, Product Videos, Explainer Videos, Corporate Videos, Training Videos, Screen Recording Videos we offer them all.<\/p><p>Our team is constantly looking to create something that captivates. It is something they love to do all day. They are always ready to go. So, tell us how you want to make an impression. Our team will be there to say Lights, Camera, Action!<\/p>","image":null,"created_at":null,"updated_at":null,"deleted_at":null}];

        this.setState({ services });

        const id = window.location.href.split("/").pop();
        const currentservice = [];

        services.map(singleservice => {
                if(id == singleservice.id){
                    currentservice.name = singleservice.name;
                    currentservice.content = singleservice.content;
                    currentservice.image = singleservice.image;
                    this.setState({ currentservice });
                }
            }
        );
    }

    render(){
        const currentservice = this.state.currentservice;
        this.state.currentservice.map(service =>
            service.links = '/service-details/'+service.name.replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-').toLowerCase() +'/'+ service.id // collapse dashes
        )

        return (
            <>
                <NavigationFour />
                
                <section className="page-title-area uk-page-title">
                    <div className="uk-container">
                        <h1>{currentservice.name}</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>{currentservice.name}</li>
                        </ul>
                    </div>
                </section>
                {/* End Page Title Area */}

                {/* Start Services Details Area  */}
                <section className="services-details-area uk-services-details uk-section">
                    <div className="uk-container">
                        <article className="uk-article services-details">
                            <div className="uk-grid uk-flex">
                                <div className="inner uk-width-expand">
                                    <div className="services-details-desc">
                                        <h3>{currentservice.name}</h3>
                                        <div dangerouslySetInnerHTML={{ __html: currentservice.content }}></div>

                                        <OwlCarousel
                                            className="services-image-slides owl-carousel owl-theme"
                                            {...options}
                                        >
                                            <div className="item">
                                                <img src={blogImage} alt="img" />
                                            </div>

                                            <div className="item">
                                                <img src={blogImage} alt="img" />
                                            </div>

                                            <div className="item">
                                                <img src={blogImage} alt="img" />
                                            </div>
                                        </OwlCarousel>

                                    </div>
                                </div>

                                <div className="uk-sidebar uk-width-1-5 uk-flex-first@l uk-first-column">
                                    <div className="widget widget_search">
                                        <form>
                                            <div className='item uk-margin'>
                                                <input type="text" className="uk-input" placeholder="your name" />
                                                <br />
                                            </div>
                                            <div className='item uk-margin'>
                                                <input type="text" className="uk-input" placeholder="your email" />
                                                <br />
                                            </div>
                                            <div className='item uk-margin'>
                                                <input type="text" className="uk-input" placeholder="your phone" />
                                                <br />
                                            </div>
                                            <div className='item uk-margin'>
                                                <select className="uk-input">
                                                {
                                                this.state.services.map(service =>
                                                        <option value={service.name}>{service.name} </option>
                                                    )
                                                }
                                                </select>
                                            </div>
                                            <br />
                                            <input type="submit" value="Submit" className='uk-button uk-button-default' />
                                        </form>
                                    </div>

                                    <div className="widget service_list">
                                        <ul>
                                            {
                                                this.state.services.map(service =>
                                                    <li><Link to={service.links} className="actives">{service.name} <i className={service.icon}></i></Link></li>
                                                )
                                            }

                                        </ul>
                                    </div>

                                    {/* <div className="widget widget_download">
                                        <h3 className="widget-title">Download</h3>
                                        <div className="bar"></div>
                                        
                                        <ul>
                                            <li><Link to="#">Our Brochure Pdf <i className="flaticon-edit"></i></Link></li>
                                            <li><Link to="#">Our Iso Certificate <i className="flaticon-edit"></i></Link></li>
                                            <li><Link to="#">Greate Technology <i className="flaticon-edit"></i></Link></li>
                                        </ul>
                                    </div> */}
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
 
export default ServiceDetails;