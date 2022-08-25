import React from 'react';
import footerShape from '../../assets/images/footer-shape1.png';

class Newsletter extends React.Component {

    state = {
        term: ''
    };

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <section className="subscribe-area uk-section uk-dark uk-subscribe bg-gray">
                <div className="uk-container">
                    <div className="uk-grid1 uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                        <div className="item">
                            <h3>Give your Brand that Push</h3>
                        </div>
                        <br />
                        <form style={{ width: '100%' }}>
                            <div className='uk-grid uk-grid-match uk-grid-medium uk-child-width-1-4@m uk-child-width-1-1@s'>
                                <div className='item uk-margin'>
                                    <input type="text" className="uk-input" placeholder="your name" style={{ marginTop: '20px' }} />
                                </div>
                                <div className='item uk-margin'>
                                    <input type="text" className="uk-input" placeholder="your email" />
                                </div>
                                <div className='item uk-margin'>
                                    <input type="text" className="uk-input" placeholder="your phone" />
                                </div>
                                <div className='item uk-margin'>
                                    <select className="uk-input">
                                        <option value="Branding">Branding</option>
                                        <option value="Creative">Creative</option>
                                        <option value="Social Media Marketing">Social Media Marketing</option>
                                        <option value="Website">Website</option>
                                        <option value="SEO">SEO</option>
                                        <option value="Influencer Marketing">Influencer Marketing</option>
                                        <option value="Content Marketing">Content Marketing</option>
                                        <option value="Performance Marketing">Performance Marketing</option>
                                        <option value="Video & Animation">Video & Animation</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ width: '100%' }}>
                                <br />
                                <div className='item' style={{ width: '25%' }}>
                                    <input type="submit" value="Submit" className='uk-button uk-button-default' style={{ top: 'auto' }} />
                                </div>
                            </div>
                        </form>

                        {/* <div className="item">
                            <form 
                                className="newsletter-form"
                                onSubmit={this.onFormSubmit}
                            >
                                <input 
                                    type="email" 
                                    className="uk-input" 
                                    placeholder="name@gmail.com" 
                                    value={this.state.term}
                                    onChange={v => this.setState({ term: v.target.value })}
                                />

                                <button 
                                    type="submit" 
                                    className="uk-button uk-button-default"
                                >
                                    Subscribe Now
                                </button>
                            </form>
                        </div> */}
                    </div>
                </div>

                <div className="shape">
                    <img src={footerShape} alt="shape" />
                </div>
            </section>
        );
    }
}

export default Newsletter;