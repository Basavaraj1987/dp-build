import React from 'react';
import { Link } from 'react-router-dom';
import ServiceData from '../../assets/json/serviceData.json';

 
class Services extends React.Component {

    state = {
        servicescontent: []
    }

    componentDidMount(){
        const servicescontent = ServiceData;
        this.setState({ servicescontent });
    }

    render(){

        this.state.servicescontent.map(service =>
            service.links = '/service-details/'+service.name.replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-').toLowerCase() // collapse dashes
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

                            <div key={service.id} className="item">
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