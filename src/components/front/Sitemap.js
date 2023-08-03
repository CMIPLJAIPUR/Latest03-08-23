import React, { Component } from "react";
import Header from "./../../layouts/front/Header";
import Footer from "./../../layouts/front/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import Url from "./../configure.js";
class Sitemap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: [],
        };
    }

    componentDidMount() {
        axios.get(Url.baseUrl + "api/get-privacy-policy").then((response) => {
            this.setState({
                datalist: response.data.data[0],
            });
        });
    }
    render() {
        return (
            <>
                <Header />
                <section className="banner-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner-name text-center">
                                    <h4 className="font40 inter bold clr-white">
                                        Sitemap
                                    </h4>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li
                                                className="breadcrumb-item active"
                                                aria-current="page"
                                            >
                                                Sitemap
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-curv">
                        <img src="/assets/img/wave-1.png" alt="Contact" />
                    </div>
                </section>

                <section className="sitemap-page mt50 mb40">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="inner">
                                    <div className="com-name font40 clr-black bold text-center">
                                        <span className="clr-yellow">
                                            Charu
                                        </span>{" "}
                                        Mindworks
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us">About Us</Link>
                                            <ul>
                                                <li>
                                                    <Link to="/group-of-companies">
                                                        Group of Companies
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/portfolio">
                                                Portfolio
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/testimonial">
                                                Testimonials
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us">
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }
}
export default Sitemap;
