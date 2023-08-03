import React, { Component } from "react";
import Header from "./../../layouts/front/Header";
import Footer from "./../../layouts/front/Footer";
import axios from "axios";
import Url from "./../configure.js";
import withRouter from "./../../withRouter";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
class Servicedetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceSt: null,
            technologyList: [],
            contactList: [],
        };
    }
    componentDidMount() {
        axios
            .get(Url.baseUrl + `api/service-edit/${this.props.params.id}`)
            .then((response) => {
                this.setState({
                    serviceSt: response.data.data,
                });
            });
        axios
            .get(Url.baseUrl + `api/get-technology-by/${this.props.params.id}`)
            .then((response) => {
                this.setState({
                    technologyList: response.data.data,
                });
            });
        axios.get(Url.baseUrl + "api/get-contact").then((response) => {
            this.setState({
                contactList: response.data.data[0],
            });
        });
        window.scrollTo(0, 0);
    }
    render() {
        const optionsTechnology = {
            loop: true,
            margin: 60,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        };
        return (
            <>
                <Header />
                {this.state.serviceSt !== null ? (
                    <div>
                        <section className="banner-sec">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="banner-name text-center">
                                            <h4 className="font40 inter bold clr-white">
                                                {this.state.serviceSt.name}
                                            </h4>
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item">
                                                        <a href="/">Home</a>
                                                    </li>
                                                    <li
                                                        className="breadcrumb-item active"
                                                        aria-current="page"
                                                    >
                                                        {
                                                            this.state.serviceSt
                                                                .name
                                                        }
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-curv">
                                <img
                                    src="/assets/img/wave-1.png"
                                    alt="wave-1"
                                />
                            </div>
                        </section>
                        <section className="ser-new-detail mt50">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="service-img">
                                            <img
                                                src={
                                                    Url.baseUrl +
                                                    "/public/uploads/service/" +
                                                    this.state.serviceSt.image
                                                }
                                                alt={
                                                    this.state.serviceSt
                                                        .image_alt
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="serv-detail">
                                            <h3 className="font20 medium clr-black">
                                                {this.state.serviceSt.name}
                                            </h3>
                                            <h4 className="font40 bold clr-black">
                                                {this.state.serviceSt.title}
                                            </h4>
                                            <div className="inner-content">
                                                <h5 className="font16">
                                                    {
                                                        this.state.serviceSt
                                                            .subtitle
                                                    }
                                                </h5>
                                                <p>
                                                    {
                                                        this.state.serviceSt
                                                            .description
                                                    }
                                                </p>
                                            </div>
                                            <div className="boxes-des">
                                                <ul>
                                                    <li>
                                                        <div className="bx-cls">
                                                            <div className="ic-img">
                                                                <img
                                                                    src="/assets/img/new-ser-ic-1.png"
                                                                    alt="new-ser-ic-1.png"
                                                                />
                                                            </div>
                                                            <div className="nam">
                                                                Qualified Web
                                                                Resources
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bx-cls">
                                                            <div className="ic-img">
                                                                <img
                                                                    src="/assets/img/new-ser-ic-2.png"
                                                                    alt="new-ser-ic-2.png"
                                                                />
                                                            </div>
                                                            <div className="nam">
                                                                User Centric
                                                                Solutions
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bx-cls">
                                                            <div className="ic-img">
                                                                <img
                                                                    src="/assets/img/new-ser-ic-3.png"
                                                                    alt="new-ser-ic-3.png"
                                                                />
                                                            </div>
                                                            <div className="nam">
                                                                State of the Art
                                                                Facility
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bx-cls">
                                                            <div className="ic-img">
                                                                <img
                                                                    src="/assets/img/new-ser-ic-4.png"
                                                                    alt="new-ser-ic-4.png"
                                                                />
                                                            </div>
                                                            <div className="nam">
                                                                Proven Track
                                                                Record
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bx-cls">
                                                            <div className="ic-img">
                                                                <img
                                                                    src="/assets/img/new-ser-ic-5.png"
                                                                    alt="new-ser-ic-5.png"
                                                                />
                                                            </div>
                                                            <div className="nam">
                                                                Standardized
                                                                Approach
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bx-cls">
                                                            <div className="ic-img">
                                                                <img
                                                                    src="/assets/img/new-ser-ic-6.png"
                                                                    alt="new-ser-ic-6.png"
                                                                />
                                                            </div>
                                                            <div className="nam">
                                                                Authorized
                                                                Credentials
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="service-new-content mt50 pt30 pb30">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-contnet">
                                            <div className="txt-bx">
                                                <ul>
                                                    <li>
                                                        {
                                                            this.state.serviceSt
                                                                .advantage_1
                                                        }
                                                    </li>
                                                    <li>
                                                        {
                                                            this.state.serviceSt
                                                                .advantage_2
                                                        }
                                                    </li>
                                                    <li>
                                                        {
                                                            this.state.serviceSt
                                                                .advantage_3
                                                        }
                                                    </li>
                                                    <li>
                                                        {
                                                            this.state.serviceSt
                                                                .advantage_4
                                                        }
                                                    </li>
                                                    <li>
                                                        {
                                                            this.state.serviceSt
                                                                .advantage_5
                                                        }
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="inner-text">
                                                <p>
                                                    {
                                                        this.state.serviceSt
                                                            .description1
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="technology-slider">
                                            <div className="" id="technology">
                                                {this.state.technologyList
                                                    .length > 0 && (
                                                    <OwlCarousel
                                                        {...optionsTechnology}
                                                    >
                                                        {this.state.technologyList.map(
                                                            (data, key) => (
                                                                <div
                                                                    className="item"
                                                                    key={key}
                                                                >
                                                                    <div className="tect-box">
                                                                        <div className="img">
                                                                            <img
                                                                                src={
                                                                                    Url.baseUrl +
                                                                                    "/public/uploads/technology/" +
                                                                                    data.image
                                                                                }
                                                                                alt={
                                                                                    data.image_alt
                                                                                }
                                                                            />
                                                                        </div>
                                                                        <div className="tech-name">
                                                                            {
                                                                                data.name
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </OwlCarousel>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="ser-new-detail comp-ind mt50">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="service-img">
                                            <img
                                                src={
                                                    Url.baseUrl +
                                                    "/public/uploads/service/" +
                                                    this.state.serviceSt.image2
                                                }
                                                alt={
                                                    this.state.serviceSt
                                                        .image_alt2
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="serv-detail">
                                            <h3 className="font20 medium clr-black">
                                                {this.state.serviceSt.name}
                                            </h3>
                                            <h4 className="font40 bold clr-black">
                                                {this.state.serviceSt.title2}
                                            </h4>
                                            <div className="inner-content">
                                                {/* <h5 className="font16">
                {this.state.serviceSt.tittle2}
                </h5> */}
                                                <p>
                                                    {
                                                        this.state.serviceSt
                                                            .description2
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="get-in-tch-bx mt50 pt40 pb40">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="map-bx">
                                            <iframe
                                                src={
                                                    this.state.contactList
                                                        .map_embed_url
                                                }
                                                width="100%"
                                                height="550"
                                                style={{ border: "0" }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title="charumindworks location"
                                            ></iframe>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-detail">
                                            <h3 className="font25 clr-yellow medium">
                                                Contact Us
                                            </h3>
                                            <h3 className="font45 clr-white bold">
                                                Get in Touch
                                            </h3>
                                            <p className="clr-white">
                                                Come and visit our quarters or
                                                simply send us an email anytime
                                                you want. We are open to all
                                                suggestions from our audience.
                                            </p>
                                            <div className="detail-bx">
                                                <ul>
                                                    <li>
                                                        <div className="icon-bx">
                                                            <img
                                                                src="/assets/img/get-ic-1.png"
                                                                alt="get-ic-1.png"
                                                            />
                                                        </div>
                                                        <div className="det">
                                                            <h5 className="font16 medium clr-yellow">
                                                                Visit Us:
                                                            </h5>
                                                            <p>
                                                                {
                                                                    this.state
                                                                        .contactList
                                                                        .visit_us
                                                                }
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-bx">
                                                            <img
                                                                src="/assets/img/get-ic-2.png"
                                                                alt="get-ic-2.png"
                                                            />
                                                        </div>
                                                        <div className="det">
                                                            <h5 className="font16 medium clr-yellow">
                                                                Mail Us:
                                                            </h5>
                                                            <a href="mailto:info@charumindworks.com">
                                                                {
                                                                    this.state
                                                                        .contactList
                                                                        .mail_id
                                                                }
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-bx">
                                                            <img
                                                                src="/assets/img/get-ic-3.png"
                                                                alt="get-ic-3.png"
                                                            />
                                                        </div>
                                                        <div className="det">
                                                            <h5 className="font16 medium clr-yellow">
                                                                Phone Us:
                                                            </h5>
                                                            <p>
                                                                {
                                                                    this.state
                                                                        .contactList
                                                                        .phone_no
                                                                }
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                ) : (
                    <h3 style={{ textAlign: "center", margin: "150px" }}>
                        Data not found
                    </h3>
                )}

                <Footer />
            </>
        );
    }
}
export default withRouter(Servicedetail);
