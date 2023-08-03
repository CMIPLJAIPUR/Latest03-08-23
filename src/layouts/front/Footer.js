import React, { useEffect, Component } from "react";
import { Link } from "react-router-dom";
import Url from "./../../components/configure.js";
import axios from "axios";
import $ from "jquery";
class Footer extends Component {
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
        window.scrollTo(0, 0);
        var btn = $('#scrollTop');
        
        $(window).scroll(function() {
          if ($(window).scrollTop() > 300) {
            btn.addClass('add-top-show');
          } else {
            btn.removeClass('add-top-show');
          }
        });
        
        btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '300');
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
                if (
                    res.data.status === "failed" &&
                    res.data.success === undefined
                ) {
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
            <div>
                <footer>
                    <div className="top-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="logo-img">
                                        <Link to="/">
                                            <img
                                                src="/assets/img/cmipl-logo.png"
                                                alt="cmipl-logo"
                                            />
                                        </Link>
                                    </div>
                                    <div className="det">
                                        CMIPL is a platform that can meet your
                                        personal and global IT needs. We build
                                        magnificent websites with aesthetically
                                        alluring designs that are efficient for
                                        mobile devices and geared toward
                                        reaching specific business goals.
                                    </div>
                                    <div className="social">
                                        <a
                                            href="https://www.facebook.com/CharuMindworks/"
                                            target="_blank"
                                        >
                                            <i
                                                className="fa fa-facebook"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                        <a
                                            href="https://www.youtube.com/@CharuMindWorks"
                                            target="_blank"
                                        >
                                            <i
                                                className="fa fa-youtube-play"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                        <a
                                            href="https://twitter.com/charumindworks/"
                                            target="_blank"
                                        >
                                            <i
                                                className="fa fa-twitter"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/company/charumindworks/"
                                            target="_blank"
                                        >
                                            <i
                                                className="fa fa-linkedin"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                        <a
                                            href="https://www.instagram.com/charumindworks_/"
                                            target="_blank"
                                        >
                                            <i
                                                className="fa fa-instagram"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="footer-menus">
                                        <h3>About</h3>
                                        <div className="links">
                                            <ul>
                                                <li>
                                                    <Link to="/portfolio">
                                                        Portfolio
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/contact-us">
                                                        Contact Us
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/group-of-companies">
                                                        Group of Companies
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/faq">FAQ</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="footer-menus">
                                        <h3>Quick Links</h3>
                                        <div className="links">
                                            <ul>
                                                <li>
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="/career">
                                                        Careers
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/privacy-policy">
                                                        Privacy Policy
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/sitemap">
                                                        Sitemap
                                                    </Link>
                                                </li>
                                                {/* <li>
                                                <Link to="/term-condition">
                                                    Terms & Condition
                                                </Link>
                                            </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer-address">
                                        <h3>Subscribe</h3>
                                        <div className="det">
                                            If you wish to receive our latest
                                            news in your email box, just
                                            subscribe to our newsletter. We
                                            won’t spam you, we promise!
                                        </div>
                                        <div className="form-bx">
                                            <form>
                                                <input
                                                    type="email"
                                                    name=""
                                                    placeholder="Your email address"
                                                    required
                                                />
                                                <button type="submit">
                                                    <i
                                                        className="fa fa-envelope"
                                                        aria-hidden="true"
                                                    ></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bootom-footer">
                        <div className="container">
                            <div className="copy-box text-center font14 clr-white">
                                Copyright by charumindworks.com. All rights
                                reserved.
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="wats-app-btn">
                    <a href="https://api.whatsapp.com/send?phone=9950216113" target="_blank">
                        <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                </div>
                <a id="scrollTop">
                <i class="fa fa-angle-up" aria-hidden="true"></i>
                </a>
                <div className="enquiry-btn">
                    <a
                        href="/#"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                    >
                        Enquiry Now
                    </a>
                </div>

                <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="font25 clr-black bold">
                                    Feel Free to{" "}
                                    <span className="clr-yellow">
                                        Contact with us
                                    </span>
                                </h4>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <section className="contact-form-sec mt50 mb30">
                                    <div className="container">
                                        <div className="tp-head-cls text-center mb30">
                                            <h3 style={{ color: "green" }}>
                                                {this.state.successmsg}
                                            </h3>
                                        </div>
                                        <div className="form-bx">
                                            <form
                                                onSubmit={this.handleSubmit.bind(
                                                    this
                                                )}
                                            >
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                placeholder="Name"
                                                                value={
                                                                    this.state
                                                                        .name
                                                                }
                                                                onChange={
                                                                    this
                                                                        .handleInputChange
                                                                }
                                                            />
                                                            <span className="text-danger">
                                                                {
                                                                    this.state
                                                                        .errMsgName
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                placeholder="Email Address"
                                                                value={
                                                                    this.state
                                                                        .email
                                                                }
                                                                onChange={
                                                                    this
                                                                        .handleInputChange
                                                                }
                                                            />
                                                            <span className="text-danger">
                                                                {
                                                                    this.state
                                                                        .errMsgEmail
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="number"
                                                                name="phone"
                                                                placeholder="Phone Number"
                                                                value={
                                                                    this.state
                                                                        .phone
                                                                }
                                                                onChange={
                                                                    this
                                                                        .handleInputChange
                                                                }
                                                            />
                                                            <span className="text-danger">
                                                                {
                                                                    this.state
                                                                        .errMsgPhone
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <textarea
                                                                name="message"
                                                                placeholder="Write Message"
                                                                rows="4"
                                                                value={
                                                                    this.state
                                                                        .message
                                                                }
                                                                onChange={
                                                                    this
                                                                        .handleInputChange
                                                                }
                                                            ></textarea>
                                                            <span className="text-danger">
                                                                {
                                                                    this.state
                                                                        .errMsgMes
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group sub-btn">
                                                            {this.state
                                                                .submitLoad ===
                                                                true ? (
                                                                <input
                                                                    type="submit"
                                                                    value="Send"
                                                                />
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;
