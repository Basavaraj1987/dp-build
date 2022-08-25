import React from "react";
import { Link } from "react-router-dom";
import "isomorphic-fetch";

class LeadForm extends React.Component {
  state = {
    submitting: false,
    submitted: false,
    buttonState: "",
    formFields: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      text: "",
    },
  };

  onSubmit = (e) => {
    e.preventDefault();
    const data = this.state.formFields;
    fetch("/api/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        this.setState({ submitted: true });
      }
      let formFields = Object.assign({}, this.state.formFields);
      formFields.name = "";
      formFields.email = "";
      formFields.phone = "";
      formFields.subject = "";
      formFields.text = "";
      this.setState({ formFields });
    });
  };

  nameChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.name = e.target.value;
    this.setState({ formFields });
  };

  emailChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.email = e.target.value;
    this.setState({ formFields });
  };

  phoneChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.phone = e.target.value;
    this.setState({ formFields });
  };

  subjectChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.subject = e.target.value;
    this.setState({ formFields });
  };

  textChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.text = e.target.value;
    this.setState({ formFields });
  };

  onHideSuccess = () => {
    this.setState({ submitted: false });
  };

  successMessage = () => {
    if (this.state.submitted) {
      return (
        <div className="alert-success" uk-alert-success>
          <Link
            to="#"
            onClick={this.onHideSuccess}
            className="uk-alert-close"
            uk-close="true"
          ></Link>
          <h3>Thank you</h3>
          <p>We will connect you soon.</p>
        </div>
      );
    }
  };

  render() {
    return (
      <>
        <section
          id="contact"
          className="contact-area uk-dark uk-contact uk-section"
        >
          <div className="uk-container">

            <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
              <div className="item">
                <div className="main-banner-content" style={{ flexDirection: "column", maxWidth: '650px' }}>
                  <h1 style={{ fontSize: '53px', textTransform: 'uppercase' }}>Want to Push your Brand to the Top of Consumer's Mind?</h1>
                  <h4>Push the limits of branding, marketing & advertising with Digipuush.</h4>
                </div>
              </div>

              <div className="item">
                <form id="contactForm" onSubmit={this.onSubmit}>
                  <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-1@m uk-child-width-1-1@s">
                    <div className="item uk-margin">
                      <input
                        type="text"
                        className="uk-input"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={this.state.formFields.name}
                        onChange={this.nameChangeHandler}
                        required={true}
                      />
                    </div>

                    <div className="item uk-margin">
                      <input
                        type="email"
                        className="uk-input"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={this.state.formFields.email}
                        onChange={this.emailChangeHandler}
                        required={true}
                      />
                    </div>

                    <div className="item uk-margin">
                      <input
                        type="text"
                        className="uk-input"
                        placeholder="Phone"
                        value={this.state.formFields.phone}
                        onChange={this.phoneChangeHandler}
                        required={true}
                      />
                    </div>

                    <div className="item uk-margin">
                      <select
                        type="text"
                        className="uk-input"
                        name="subject"
                        value={this.state.formFields.subject}
                        onChange={this.subjectChangeHandler}
                        required={true}
                      >
                      <option value="">Your services</option>
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

                  <button type="submit" className="uk-button uk-button-default">
                    Submit Message
                  </button>
                </form>
                {this.successMessage()}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default LeadForm;
