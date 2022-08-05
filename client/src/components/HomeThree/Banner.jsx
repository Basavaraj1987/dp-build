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
                <div id="home" className="uk-banner uk-dark main-banner item-bg3">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="uk-container">
                                <div className="main-banner-content">
                                    <h1>Technology and <br /> experience</h1>
                                    <p>Our team is experienced with advanced latest technologies and we try to use suitable ones in our client projects! We try not to let your project down anyway!</p>
                                    <a href="#contact" className="uk-button uk-button-default">Get Started</a>
                                    <Link 
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        to="#" 
                                        className="video-btn popup-youtube">
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