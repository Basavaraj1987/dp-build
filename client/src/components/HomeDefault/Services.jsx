import React from 'react';
import { Link } from 'react-router-dom';
 
class Services extends React.Component {

    state = {
        servicescontent: []
    }

    componentDidMount(){
        const servicescontent = [{"id":1,"name":"Branding","icon":"flaticon-plan","content":"Brand is a personality and we help you give it a shape and weight.\nThe Branding that we do, is what will make your brand stand out. The identity that we create takes into account colours, fonts, shapes & sizes to give your brand a uniqueness that will help it stand tall and make an impression. Right from the Brand Name, Logo to complete Brand Manual & Guidelines development, we do it all.","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":2,"name":"Creative","icon":"flaticon-think","content":"Creativity is a combination of Imagination & Inspiration, and we couple them pretty well so that your brand has a high recall.\nIts something that is a given. Creativity is one of the pillars of our branding. It is what helps us create a different story each time whenever your brand needs to speak of an offering or engagement.","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":3,"name":"Social Media Marketing","icon":"flaticon-shout","content":"This is the word of mouth of the virtual world and we can manage your identity well across all social handles.\nDifferent platforms have different audiences and our expertise in each of them will help your brand reach the designated audience in a manner that engages and converts. Right from developing platform-apt creatives, post management to customer response management, we do it all.\n","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":4,"name":"Website","icon":"flaticon-analytics-1","content":"The virtual address of your business & brand. We can build a nice one with all your offerings presented in a nice manner.\nWebsite is a digital address that can be reached by anyone across the globe. We\u2019ll help you leverage your digital presence to the max and make every visit count. Right from WordPress, Shopify, React, Magento we develop websites and web-apps on all platforms.","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":5,"name":"SEO","icon":"flaticon-ux-design","content":"Top of Google search is equivalent to being in top of consumer\u2019s mind.\nThis is where we make the needle in the haystack shine and grab attention. All a consumer has to do is search for you and we\u2019ll make sure he\/she finds you. Right from basic SEO, Local SEO, YouTube SEO, App Store SEO we do it all.\n","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":6,"name":"Influencer Marketing","icon":"flaticon-camera","content":"Influencers are the modern day celebrities who have a dedicated following & we know exactly which influencer fits best for your brand.\nSometimes brands require a gentle nudge. Like when a subject matter expert talks of your brand\u2019s speciality it is bound to carry more weight. We\u2019ll help your brand get this nudge. \n","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":7,"name":"Content Marketing","icon":"flaticon-project","content":"They say Customer is king, they also say Content is king. We say, we are the king-makers.\nBeing at the right place at the right time is often reason behind most success stories. We\u2019ll  help your brand\u2019s content reach the right audience and make a connection that converts. Be it blogs, newsletters, e-books and e-brochures, we do it all.\n","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":8,"name":"Performance Marketing","icon":"flaticon-chat","content":"Reach the right audience with razer sharp targeting and retargeting with our expert Performance marketing team. Consumer\u2019s mind is our bull\u2019s eye!\nReach the consumer who\u2019s been looking for your brand. Right from Google Ads, Google PPC campaigns, YouTube Ads, Facebook Ads, Instagram Ads, LinkedIn Ads and more, we offer a to z of all paid marketing services.\n","image":null,"created_at":null,"updated_at":null,"deleted_at":null},{"id":9,"name":"Video & Animation","icon":"flaticon-data","content":"Anything that moves grabs our attention. We make videos and animation in such a manner that not only the attention is grabbed but is made to stay till the message is communicated.\nThere\u2019s nothing that moves a mind like moving pictures and we put all our efforts into making videos that tell a story that\u2019s hard to forget. Animation or live-action, stock or shot, we\u2019ll help you package a moving picture that will be the talk of the town. Right from 2D Animation, 3D Animation, Whiteboard Animation, Product Videos, Explainer Videos, Corporate Videos, Training Videos, Screen Recording Videos we offer them all.\n","image":null,"created_at":null,"updated_at":null,"deleted_at":null}];
        this.setState({ servicescontent });
    }

    render(){

        this.state.servicescontent.map(service =>
            service.links = '/service-details/'+service.name.replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-').toLowerCase() +'/'+ service.id // collapse dashes
        )

        return (
            <section id="services" className="services-area uk-dark uk-services uk-section">
                <div className="uk-container">
                    <div className="uk-section-title section-title">
                        <span>What We Do</span>
                        <h2>Our Services</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">

                        {
                            this.state.servicescontent.map(service =>

                            <div className="item">
                                <div className="single-services">
                                    <div className="icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h3>{service.name}</h3>

                                    <i className="flaticon-right link-btn"></i>

                                    <Link to={service.links} className="link uk-position-cover"></Link>
                                </div>
                            </div>
                            )
                        }

                    </div>
                </div>
            </section>
        );
    }
}
 
export default Services;