import React, { Component } from "react";
import Header from "./../../layouts/front/Header";
import Footer from "./../../layouts/front/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import Url from "./../configure.js";
import withRouter from "./../../withRouter";
class CareerDetail extends Component {
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
            datalistDrop: [],
            submitLoad: true,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ document: event.target.files[0] });
    }
    componentDidMount() {
        axios
            .post(Url.baseUrl + `api/career-edit/${this.props.params.id}`)
            .then((response) => {
                this.setState({
                    datalist: response.data.data,
                });
            });

        axios.get(Url.baseUrl + "api/get-career").then((response) => {
            const itemsS = response.data.data;
            let dataS = [];
            for (let i = 0; i < itemsS.length; i++) {
                if (itemsS[i]["status"] === 1) {
                    dataS.push(itemsS[i]);
                }
            }
            this.setState({
                datalistDrop: dataS,
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
                                        {this.state.datalist &&
                                            this.state.datalist.title}
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
                                                {this.state.datalist &&
                                                    this.state.datalist.title}
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
                <section className="job-detail-sec mt50">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="details">
                                    <h3>
                                        No. of Vacancies : &nbsp;
                                        {this.state.datalist &&
                                            this.state.datalist.no_of_opening}
                                    </h3>
                                    <h5>Job Description:</h5>
                                    <p>
                                        {this.state.datalist &&
                                            this.state.datalist.subtitle}
                                    </p>
                                    <h5>Roles & Responsibilities:</h5>

                                    {
                                        <ol>
                                            {this.state.datalist &&
                                                this.state.datalist.role_response
                                                    ?.split("$")
                                                    .map((data, index) => (
                                                        <li key={index}>
                                                            {data}
                                                        </li>
                                                    ))}
                                        </ol>
                                    }
                                    <h5>Skills & Qualifications:</h5>
                                    {
                                        <ol>
                                            {this.state.datalist &&
                                                this.state.datalist.skill
                                                    ?.split("$")
                                                    .map((data, index) => (
                                                        <li key={index}>
                                                            {data}
                                                        </li>
                                                    ))}
                                        </ol>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="apply-form mt50 mb40">
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
                                                        {this.state.datalistDrop
                                                            .length > 0 && (
                                                            <select
                                                                name="position"
                                                                onChange={
                                                                    this
                                                                        .handleInputChange
                                                                }
                                                            >
                                                                <option value="">
                                                                    Select
                                                                    Position
                                                                </option>
                                                                {this.state.datalistDrop.map(
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
export default withRouter(CareerDetail);
