import React from 'react';

class Newsletter extends React.Component {
    render(){
        return (
            <>
                <div className="uk-newsletter newsletter-area">
                    <div className="uk-container">
                        <div className="newsletter-content">
                            <span className="sub-title">Newsletter</span>
                            <h2>Subscribe To Our Newsletter</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <form className="newsletter-form">
                                <input 
                                    type="email" 
                                    className="uk-input" 
                                    placeholder="Enter your email address" 
                                    name="EMAIL" 
                                    required 
                                />
                                <button 
                                    type="submit" 
                                    className="uk-button uk-button-default"
                                >
                                    Subscribe Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Newsletter;