import React, { Component } from "react";
import Header from "../../layouts/front/Header";
import Footer from "../../layouts/front/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import Url from "../configure.js";
class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      contactList: [],
      successmsg: "",
      submitLoad: true,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    axios.get(Url.baseUrl + "api/get-contact").then((response) => {
      this.setState({
        contactList: response.data.data[0],
      });
    });
  }
  handleInputChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit(e) {
    e.preventDefault();
    var firstFormData = new FormData();
    firstFormData.append("name", this.state.name);
    firstFormData.append("email", this.state.email);
    firstFormData.append("phone", this.state.phone);
    firstFormData.append("message", this.state.message);
    this.setState({
      submitLoad: false,
    });
    axios
      .post(Url.baseUrl + "api/inquiry-add", firstFormData, {})
      .then((res) => {
        if (res.data.status === 200) {
          this.setState({
            successmsg: res.data.message,
            errMsgName: "",
            errMsgEmail: "",
            errMsgPhone: "",
            errMsgMes: "",
            submitLoad: true,
          });
          setTimeout(() => {
            this.setState({
              successmsg: "",
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          }, 1000);
        }
        if (res.data.status === "failed" && res.data.success === undefined) {
          this.setState({
            errMsgName: res.data.errors.name,
            errMsgEmail: res.data.errors.email,
            errMsgPhone: res.data.errors.phone,
            errMsgMes: res.data.errors.message,
            submitLoad: true,
          });
        }
      });
  }
  render() {
    return (
      <>
        <section className="contact-form-sec mt50 mb30">
          <div className="container">
            <div className="tp-head-cls text-center mb30">
              <h4 className="font40 clr-black bold">
                Feel Free to <span className="clr-yellow">Contact with us</span>
              </h4>
              <h3 style={{ color: "green" }}>{this.state.successmsg}</h3>
            </div>
            <div className="form-bx">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                      />
                      <span className="text-danger">
                        {this.state.errMsgName}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                      <span className="text-danger">
                        {this.state.errMsgEmail}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input
                        type="number"
                        name="phone"
                        placeholder="Phone Number"
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                      />
                      <span className="text-danger">
                        {this.state.errMsgPhone}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Write Message"
                        rows="4"
                        value={this.state.message}
                        onChange={this.handleInputChange}
                      ></textarea>
                      <span className="text-danger">
                        {this.state.errMsgMes}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group sub-btn">
                      {this.state.submitLoad === true ? (
                        <input type="submit" value="Send" />
                      ) : (
                        "Sending..."
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Contactus;
