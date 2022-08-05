import React from "react";

import contactImage from "../../assets/images/contact-image.jpg";

class Contact extends React.Component {
  render() {
    return (
      <>
        <section id="contact" className="contact-section uk-contact">
          <div className="uk-container-expand">
            <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
              <div className="item">
                <div className="contact-image" style={{ backgroundImage: `url(${contactImage})` }}>
                  <div className="contact-info">
                    <h3>27 Division St, New York, NY 10002, USA</h3>
                    <ul>
                      <li>
                        Email:{" "}
                        <a href="mailto:hello@gunter.com">hello@gunter.com</a>
                      </li>
                      <li>
                        Phone: <a href="tel:+321948754">+ (321) 948 754</a>
                      </li>
                      <li>
                        Fax: <a href="tel:+123849457">+ (123) 849 457</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="contact-form">
                  <div className="uk-section-title section-title">
                    <span>Let’s Talk</span>
                    <h2>Want to work with our team?</h2>
                    <div className="bar"></div>
                  </div>

                  <form id="contactForm">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                      <div className="item uk-margin">
                        <input
                          type="text"
                          className="uk-input"
                          name="name"
                          id="name"
                          placeholder="Name"
                        />
                      </div>

                      <div className="item uk-margin">
                        <input
                          type="email"
                          className="uk-input"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>

                      <div className="item uk-margin">
                        <input
                          type="text"
                          className="uk-input"
                          placeholder="Phone"
                        />
                      </div>

                      <div className="item uk-margin">
                        <input
                          type="text"
                          className="uk-input"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>

                    <div className="item">
                      <textarea
                        name="message"
                        className="uk-textarea"
                        id="message"
                        cols="30"
                        rows="4"
                        placeholder="Your Message"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="uk-button uk-button-default"
                    >
                      Submit Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
