import React from 'react';
import { Link } from 'react-router-dom';
import NavigationFour from '../Navigation/NavigationFour';
import OwlCarousel from 'react-owl-carousel3';
// import Collapsible from 'react-collapsible';
import blogImage from '../../assets/images/blog-details.jpg';
import Footer from '../Common/Footer';
import ServiceData from '../../assets/json/serviceData.json';

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
        const services = ServiceData;

        this.setState({ services });

        const slug = window.location.href.split("/").pop();
        const currentservice = [];

        services.map(singleservice => {
                if(slug == singleservice.slug){
                    currentservice.name = singleservice.name;
                    currentservice.content1 = singleservice.content1;
                    currentservice.content2 = singleservice.content2;
                    currentservice.image = singleservice.image;
                    this.setState({ currentservice });
                }
                return null;
            }
        );
    }

    render(){
        const currentservice = this.state.currentservice;

        this.state.services.map(otherservice =>
            otherservice.links = '/service-details/'+otherservice.name.replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-').toLowerCase() // collapse dashes
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
                                        <div dangerouslySetInnerHTML={{ __html: currentservice.content1 }}></div>

                                        <OwlCarousel
                                            className="services-image-slides owl-carousel owl-theme"
                                            {...options}
                                        >
                                            <div className="item">
                                                <img src={blogImage} alt="img" />
                                            </div>

                                        </OwlCarousel>

                                        <div dangerouslySetInnerHTML={{ __html: currentservice.content2 }}></div>
                                    </div>
                                </div>

                                <div className="uk-sidebar uk-width-1-5 uk-flex-first@l uk-first-column">
                                    <div className="widget widget_search">

                                        <h3 class="widget-title">Give your Brand that Push</h3>
                                        <div class="bar"></div>

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
                                                this.state.services.map(otherservice =>
                                                    <li><Link to={otherservice.links} className="actives">{otherservice.name} <i className={otherservice.icon}></i></Link></li>
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