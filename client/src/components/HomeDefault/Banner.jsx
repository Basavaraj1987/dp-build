import React from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

class Banner extends React.Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <>
        <div id="home" className="uk-banner uk-dark main-banner item-bg2">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="uk-container">
                <div className="main-banner-content">
                  <h1>
                  Philno <br /> Sophy
                  </h1>
                  <p>Our philosophy is to have no philosophy. </p>
                  <p>We do whatever it takes to make your brand famous. Because when you are famous, you push the limits of an individual’s memory & create a recall that lasts a lifetime.</p>

                  {/* <a href="#contact" className="uk-button uk-button-default">
                    Get Started
                  </a> */}

                  {/* <Link
                    onClick={(e) => {
                      e.preventDefault();
                      this.openModal();
                    }}
                    to="#"
                    className="video-btn popup-youtube"
                  >
                    <span uk-icon="play"></span> Watch Video
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="bk7McNUjWgw"
          onClose={() => this.setState({ isOpen: false })}
        />
      </>
    );
  }
}

export default Banner;
