import React from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import LeadForm from "./LeadForm";

class Banner extends React.Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {

    var content = "";

    const printNumbers1To36 = () => {
      const mainrow = 12;
      const row = [];
      var numrows = 37;

    for (var i = 0; i < mainrow; i++) {
      content.push(<div className="plane plane-"></div>);

    }
      return content;
    };


    return (
      <>
        <div id="home" className="uk-banner uk-dark main-banner">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="uk-container">
                <div className="main-banner-content" style={{ flexDirection: "column", maxWidth: '650px' }}>

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

                <div className="main-wrapper" style={{ marginRight: "20%" }}>
                  <LeadForm />  
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
