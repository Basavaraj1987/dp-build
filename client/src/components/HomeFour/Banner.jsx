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
    render(){
        return (
            <>
                <div id="home" className="uk-banner uk-dark main-banner item-bg2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="uk-container">
                                <div className="main-banner-content">
                                    <h1>Together we <br /> achieve!</h1>
                                    <p>We study our clients interest from all possible ways so, we can assure that we catch all points to deliver with our offerings and work. Our team is experienced and focussed to make you happy!</p>
                                    <a href="#contact" className="uk-button uk-button-default">Get Started</a>

                                    <Link 
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        to="#" 
                                        className="video-btn popup-youtube"
                                    >
                                        <span uk-icon="play"></span> Watch Video
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ModalVideo 
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