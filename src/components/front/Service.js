import MetaTags from "react-meta-tags";
import React, { Component } from "react";
import Header from "./../../layouts/front/Header";
import Footer from "./../../layouts/front/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import Url from "./../configure.js";
class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceSt: "",
            serviceList: [],
        };
    }
    componentDidMount() {
        axios.get(Url.baseUrl + "api/get-st-service").then((response) => {
            this.setState({
                serviceSt: response.data.data[0],
            });
        });
        axios.get(Url.baseUrl + "api/get-service").then((response) => {
            this.setState({
                serviceList: response.data.data,
            });
        });
    }
    render() {
        return (
            <>
                <MetaTags>
                    <title>
                        WEB DEVELOPMENT | DIGITAL MARKETING | IT SERVICES JAIPUR
                    </title>
                    <meta
                        httpEquiv="refresh"
                        name="WEB DEVELOPMENT | DIGITAL MARKETING | IT SERVICES JAIPUR"
                        content="	We provide a range of web development & IT services. We are a one-stop solution for web, Software, & Mobile App development, web design & digital marketing"
                    />
                </MetaTags>
                <Header />
                <section className="banner-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner-name text-center">
                                    <h4 className="font40 inter bold clr-white">
                                        Services
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
                                                Our-Service
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-curv">
                        <img src="/assets/img/wave-1.png" alt="wave-1" />
                    </div>
                </section>

                <section className="about-sec ab-pg services mt20">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="ser-img">
                                    <img
                                        src={
                                            Url.baseUrl +
                                            "/public/uploads/service/" +
                                            this.state.serviceSt.image
                                        }
                                        alt={this.state.serviceList.image_alt}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="inner-txt">
                                    <h1 className="font18 medium clr-black">
                                        What We Do Offer
                                    </h1>
                                    <h2 className="font45 bold clr-black">
                                        {this.state.serviceSt.title}{" "}
                                        <span className="clr-yellow">
                                            {this.state.serviceSt.title2}
                                        </span>
                                    </h2>
                                    <h6 className="font25 medium clr-grey">
                                        {this.state.serviceSt.subtitle}
                                    </h6>
                                    <div className="details-bx">
                                        <p>
                                            {this.state.serviceSt.description}
                                        </p>
                                    </div>
                                    {/* <div className="mor-btn mt30">
									<a href="#" className="theme-btn">Read More</a>
								</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cmipl-services new-services bg-dark-blue">
                    <div className="container">
                        <div className="heading-bx text-center">
                            <h5 className="font18 medium clr-yellow">
                                Services
                            </h5>
                            <h3 className="font45 bold clr-white">
                                Bouquet of Digital and IT services
                            </h3>
                            <h4>Creative design solutions</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="inner-new-services">
                                    {this.state.serviceList.length > 0 && (
                                        <>
                                            {this.state.serviceList.map(
                                                (list, i) => (
                                                    <>
                                                        <div
                                                            className="ser-bx"
                                                            key={list.id}
                                                        >
                                                            <Link
                                                                to={`/service-detail/${list.id}`}
                                                            >
                                                                <div className="icon-bx">
                                                                    <img
                                                                        src={
                                                                            Url.baseUrl +
                                                                            "/public/uploads/service/" +
                                                                            list.service_logo
                                                                        }
                                                                        alt={
                                                                            list.image_alt
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="ser-name">
                                                                    {list.name}
                                                                </div>
                                                                <p>
                                                                    {
                                                                        list.description
                                                                    }
                                                                </p>
                                                            </Link>
                                                        </div>
                                                    </>
                                                )
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-curv">
                        <img src="/assets/img/top_wave_03.png" alt="wave_03" />
                    </div>
                    <div className="bottom-curv">
                        <img
                            src="/assets/img/bottom_wave_01.png"
                            alt="wave_01"
                        />
                    </div>
                </section>

                <section className="trasnsforming-sec work-process">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="trns-content">
                                    <div className="cont text-center">
                                        <h5 className="font18 medium clr-yellow">
                                            How We Work
                                        </h5>
                                        <h3 className="font45 bold clr-black">
                                            Our Works <span>Process</span>
                                        </h3>
                                        <p>
                                            The specific work process for our
                                            company is Identifying an
                                            opportunity, Defining the project
                                            scope and objectives, gathering
                                            requirements, Designing a
                                            solution,Developing and testing the
                                            solution,Deploying the solution and
                                            Maintaining and updating the
                                            solution.
                                        </p>
                                    </div>
                                    <div className="process-bx">
                                        <div className="pr-inner-bx">
                                            <div className="box-img">
                                                <div className="img">
                                                    <img
                                                        src="/assets/img/plan-1.png"
                                                        alt="Plan-1"
                                                    />
                                                </div>
                                                <div className="name">
                                                    PLANNING
                                                </div>
                                            </div>
                                            <div className="box-img blue">
                                                <div className="img">
                                                    <img
                                                        src="/assets/img/plan-2.png"
                                                        alt="Plan-2"
                                                    />
                                                </div>
                                                <div className="name">
                                                    DESIGN
                                                </div>
                                            </div>
                                            <div className="box-img">
                                                <div className="img">
                                                    <img
                                                        src="/assets/img/plan-3.png"
                                                        alt="Plan-3"
                                                    />
                                                </div>
                                                <div className="name">
                                                    FRONT END
                                                </div>
                                            </div>
                                            <div className="box-img blue">
                                                <div className="img">
                                                    <img
                                                        src="/assets/img/plan-4.png"
                                                        alt="Plan-4"
                                                    />
                                                </div>
                                                <div className="name">
                                                    DEVELOPMENT
                                                </div>
                                            </div>
                                            <div className="box-img">
                                                <div className="img">
                                                    <img
                                                        src="/assets/img/plan-5.png"
                                                        alt="Plan-5"
                                                    />
                                                </div>
                                                <div className="name">
                                                    TESTING
                                                </div>
                                            </div>
                                            <div className="box-img blue">
                                                <div className="img">
                                                    <img
                                                        src="/assets/img/plan-6.png"
                                                        alt="Plan-6"
                                                    />
                                                </div>
                                                <div className="name">
                                                    LAUNCH
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
export default Service;
