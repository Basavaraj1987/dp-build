import React from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
 
class Banner extends React.Component {
    state = {
        isOpen: false
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    onFormHandling = (e) => {
        e.preventDefault()
    }
    
    render(){
        let modalStyles = {overlay: {zIndex: 100000000000000}};
        return (
            <>
                <div id="home" className="uk-banner uk-dark main-banner banner-with-form">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="uk-container">
                                <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                                    <div className="item">
                                        <div className="main-banner-content">
                                            <h1>Trusted digital <br /> agency</h1>
                                            <p>We have built trust by delivering the best results for clients! Our team is focussed on meeting your online business ultimate targets! Let’s try with us!</p>
                                            <a href="#contact" className="uk-button uk-button-default">Get Started</a>
                                            <Link 
                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                to="#" 
                                                className="video-btn popup-youtube">
                                                    <span uk-icon="play"></span> Watch Video
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="main-banner-form">
                                            <form onSubmit={this.onFormHandling}>
                                                <div className="uk-margin">
                                                    <input type="text" className="uk-input" placeholder="Your Name" />
                                                </div>

                                                <div className="uk-margin">
                                                    <input type="email" className="uk-input" placeholder="Your Email" />
                                                </div>
                                                
                                                <div className="uk-margin">
                                                    <select className="uk-input">
                                                        <option> - Tell us what you need - </option>
                                                        <option>Link website</option>
                                                        <option>Link landing page</option>
                                                        <option>an iPhone app</option>
                                                        <option>an Android app</option>
                                                    </select>
                                                </div>

                                                <div className="uk-margin">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span>By checking this, you agree to our <Link to="#">Terms </Link> and <Link to="#">Privacy policy</Link></span>
                                                    </label>
                                                </div>

                                                <button type="submit" className="uk-button uk-button-default">Get Link Quote</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ModalVideo 
                    style={ modalStyles }
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='bk7McNUjWgw' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}
 
export default Banner;