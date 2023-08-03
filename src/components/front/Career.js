import React, { Component } from "react";
import Header from "./../../layouts/front/Header";
import Footer from "./../../layouts/front/Footer";
import axios from "axios";
import $ from "jquery";
import { Link } from "react-router-dom";
import Url from "./../configure.js";
class Career extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            position: "",
            document: "",
            message: "",
            successmsg: "",
            datalist: [],
            submitLoad: true,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        axios.get(Url.baseUrl + "api/get-career").then((response) => {
            const itemsS = response.data.data;
            let dataS = [];
            for (let i = 0; i < itemsS.length; i++) {
                if (itemsS[i]["status"] === 1) {
                    dataS.push(itemsS[i]);
                }
            }
            this.setState({
                datalist: dataS,
            });
        });
    }

    handleInputChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleChange(event) {
        this.setState({ document: event.target.files[0] });
    }

    handleSubmit(e) {
        e.preventDefault();
        var firstFormData = new FormData();
        firstFormData.append("name", this.state.name);
        firstFormData.append("email", this.state.email);
        firstFormData.append("phone", this.state.phone);
        firstFormData.append("message", this.state.message);
        firstFormData.append("position", this.state.position);
        firstFormData.append("document", this.state.document);

        this.setState({
            submitLoad: false,
        });

        axios
            .post(Url.baseUrl + "api/join-team-add", firstFormData, {})
            .then((res) => {
                if (res.data.status === 200) {
                    this.setState({
                        successmsg: res.data.message,
                        errMsgName: "",
                        errMsgEmail: "",
                        errMsgPhone: "",
                        errMsgDoc: "",
                        errMsgPos: "",
                        errMsgMes: "",
                        submitLoad: true,
                    });
                    setTimeout(() => {
                        this.setState({
                            successmsg: "",
                            name: "",
                            email: "",
                            phone: "",
                            position: "",
                            document: "",
                            message: "",
                        });
                    }, 1000);
                    this.setState({});
                }
                if (
                    res.data.status === "failed" &&
                    res.data.success === undefined
                ) {
                    this.setState({
                        errMsgName: res.data.errors.name,
                        errMsgEmail: res.data.errors.email,
                        errMsgPhone: res.data.errors.phone,
                        errMsgDoc: res.data.errors.document,
                        errMsgPos: res.data.errors.position,
                        errMsgMes: res.data.errors.message,
                        submitLoad: true,
                    });
                }
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
                                        Careers
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
                                                Careers
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

                <section className="career-page-inner mt50">
                    <div className="container">
                        <div className="tp-head-cls text-center mb30">
                            <h4 className="font40 clr-black bold">
                                Why Career
                                <span className="clr-yellow"> With Us</span>
                            </h4>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="career-boxes">
                                    <div className="icon-box">
                                        <img
                                            src="/assets/img/career-1.png"
                                            alt="career"
                                        />
                                    </div>
                                    <div className="content">
                                        <h3 className="clr-black font20 rubik medium">
                                            Friendly Environment
                                        </h3>
                                        <p style={{ textAlign: "initial" }}>
                                            At Charumindworks, we believe that
                                            creating a positive and friendly
                                            working environment is essential to
                                            the success of our company. We
                                            strive to create a workplace culture
                                            that is inclusive, supportive, and
                                            respectful. We encourage open
                                            communication, collaboration, and
                                            teamwork, and we believe that
                                            everyone's opinions and
                                            contributions are valuable. We also
                                            organize various team-building
                                            activities and training sessions to
                                            foster a sense of community and
                                            belonging among our employees. We
                                            are committed to creating an
                                            environment where our employees can
                                            thrive both personally and
                                            professionally.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="career-boxes">
                                    <div className="icon-box">
                                        <img
                                            src="/assets/img/career-2.png"
                                            alt="career-2"
                                        />
                                    </div>
                                    <div className="content">
                                        <h3 className="clr-black font20 rubik medium">
                                            Teamwork
                                        </h3>
                                        <p style={{ textAlign: "initial" }}>
                                            At Charumindworks, we believe in
                                            teamwork and the power of
                                            collaboration. We recognize that
                                            teamwork is not just about working
                                            together on projects but also about
                                            building strong relationships and
                                            mutual respect among team members.
                                            We are committed to working together
                                            to achieve our goals and deliver the
                                            best possible results for our
                                            clients. We value each team member's
                                            contribution and believe that by
                                            working together, we can leverage
                                            each other's strengths and overcome
                                            any challenges we may face.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="career-boxes">
                                    <div className="icon-box">
                                        <img
                                            src="/assets/img/career-3.png"
                                            alt="career-3"
                                        />
                                    </div>
                                    <div className="content">
                                        <h3 className="clr-black font20 rubik medium">
                                            Provident Fund
                                        </h3>
                                        <p style={{ textAlign: "initial" }}>
                                            At Charumindworks, we consider our
                                            employees to be the company's core
                                            achievement. We are dedicated and
                                            committed to providing the best
                                            financial services to our employees.
                                            As an additional employee benefit,
                                            we give our employees the facility
                                            of a provident fund as an investment
                                            in their future happiness and
                                            financial security.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="job-sec-cls mt50 pt40 pb40">
                    <div className="container">
                        <div className="tp-head-cls text-center mb30">
                            <h4 className="font40 clr-black bold">
                                Job{" "}
                                <span className="clr-yellow">
                                    Opportunities
                                </span>
                            </h4>
                        </div>
                        <div className="row">
                            {this.state.datalist.length > 0 && (
                                <>
                                    {this.state.datalist.map((data, i) => (
                                        <div className="col-lg-4" key={i}>
                                            <div className="job-box-cls">
                                                <div className="name clr-black font25 semiBold mb20">
                                                    {data.title}
                                                </div>
                                                <div className="opening-box">
                                                    <p>No. of Opening</p>
                                                    <span>
                                                        {data.no_of_opening}
                                                    </span>
                                                </div>
                                                <div className="detail">
                                                    <p>{data.subtitle}</p>
                                                    <div className="location">
                                                        <p>
                                                            <span>
                                                                Location
                                                                &nbsp;:&nbsp;
                                                            </span>
                                                            {data.location}
                                                        </p>
                                                    </div>
                                                    <div className="job-btns">
                                                        <a
                                                            href="#apply-form"
                                                            className="theme-btn apply"
                                                        >
                                                            Apply Now
                                                        </a>
                                                        <Link
                                                            to={`/career-detail/${data.id}`}
                                                            className="theme-btn view-btn"
                                                        >
                                                            View More
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </section>
                <section className="apply-form mt50 mb40" id="apply-form">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-inner">
                                    <div className="tp-head-cls mb30">
                                        <h4 className="font40 clr-white bold">
                                            Apply to Join{" "}
                                            <span className="clr-yellow">
                                                Our Team
                                            </span>
                                        </h4>
                                    </div>
                                    <h3 style={{ color: "green" }}>
                                        {this.state.successmsg}
                                    </h3>
                                    <div className="form-boxes">
                                        <form
                                            onSubmit={this.handleSubmit.bind(
                                                this
                                            )}
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={
                                                                this.state.name
                                                            }
                                                            onChange={
                                                                this
                                                                    .handleInputChange
                                                            }
                                                            required
                                                        />
                                                        <span className="text-danger">
                                                            {
                                                                this.state
                                                                    .errMsgName
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={
                                                                this.state.email
                                                            }
                                                            onChange={
                                                                this
                                                                    .handleInputChange
                                                            }
                                                            required
                                                        />
                                                        <span className="text-danger">
                                                            {
                                                                this.state
                                                                    .errMsgEmail
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>phone</label>
                                                        <input
                                                            type="number"
                                                            name="phone"
                                                            value={
                                                                this.state.phone
                                                            }
                                                            onChange={
                                                                this
                                                                    .handleInputChange
                                                            }
                                                            required
                                                        />
                                                        <span className="text-danger">
                                                            {
                                                                this.state
                                                                    .errMsgPhone
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>
                                                            Apply Position
                                                        </label>

                                                        {this.state.datalist
                                                            .length > 0 && (
                                                            <select
                                                                name="position"
                                                                value={
                                                                    this.state
                                                                        .position
                                                                }
                                                                onChange={
                                                                    this
                                                                        .handleInputChange
                                                                }
                                                            >
                                                                <option value="">
                                                                    Select
                                                                    Position
                                                                </option>
                                                                {this.state.datalist.map(
                                                                    (
                                                                        dataVal
                                                                    ) => (
                                                                        <option
                                                                            value={
                                                                                dataVal.title
                                                                            }
                                                                            key={
                                                                                dataVal.id
                                                                            }
                                                                        >
                                                                            {
                                                                                dataVal.title
                                                                            }
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>
                                                        )}

                                                        <span className="text-danger">
                                                            {
                                                                this.state
                                                                    .errMsgPos
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>
                                                            Your Resume
                                                        </label>
                                                        <input
                                                            type="file"
                                                            name="document"
                                                            onChange={
                                                                this
                                                                    .handleChange
                                                            }
                                                            accept="application/pdf,application/vnd.ms-excel"
                                                            required
                                                        />
                                                        <span className="text-danger">
                                                            {
                                                                this.state
                                                                    .errMsgDoc
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>
                                                            Message Here
                                                        </label>
                                                        <textarea
                                                            rows="3"
                                                            name="message"
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
                                                <div className="col-md-12">
                                                    <div className="form-group sub-btn">
                                                        {this.state
                                                            .submitLoad ===
                                                        true ? (
                                                            <button
                                                                type="submit"
                                                                className="theme-btn"
                                                            >
                                                                Apply Now
                                                            </button>
                                                        ) : (
                                                            "Sending..."
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
export default Career;
