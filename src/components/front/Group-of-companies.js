import React, { Component } from "react";
import Header from "./../../layouts/front/Header";
import Footer from "./../../layouts/front/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import Url from "./../configure.js";
class GroupofCompanies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: [],
        };
    }

    componentDidMount() {
        axios.get(Url.baseUrl + "api/get-company-group").then((response) => {
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

    handleSubmit(e) {
        e.preventDefault();
        var firstFormData = new FormData();
        firstFormData.append("name", this.state.name);
        firstFormData.append("email", this.state.email);
        firstFormData.append("phone", this.state.phone);
        firstFormData.append("message", this.state.message);
        firstFormData.append("position", this.state.position);
        firstFormData.append("document", this.state.document);
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
                        loading: false,
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
                    }, 2000);
                    this.setState({});
                }
                if (
                    res.data.status === "failed" &&
                    res.data.success === undefined
                ) {
                    this.setState({
                        loading: false,
                        errMsgName: res.data.errors.name,
                        errMsgEmail: res.data.errors.email,
                        errMsgPhone: res.data.errors.phone,
                        errMsgDoc: res.data.errors.document,
                        errMsgPos: res.data.errors.position,
                        errMsgMes: res.data.errors.message,
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
                                        Group of Companies
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
                                                Group of Companies
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
                <section className="groups-sec mt50 mb50">
                    <div className="container">
                        <div className="row">
                            {this.state.datalist.length > 0 && (
                                <>
                                    {this.state.datalist.map((dataVal, i) => (
                                        <div className="col-lg-6" key={i}>
                                            <div className="group-boxes">
                                                <div className="com-img">
                                                    <img
                                                        src={
                                                            Url.baseUrl +
                                                            `/public/uploads/company-group/${dataVal.image}`
                                                        }
                                                        alt={dataVal.image_alt}
                                                    />
                                                </div>
                                                <div className="com-name text-center mt20 mb20">
                                                    <h3 className="font25 clr-black semiBold">
                                                        {dataVal.title}
                                                    </h3>
                                                </div>
                                                <div className="detail text-center">
                                                    <p>{dataVal.description}</p>
                                                </div>
                                                <div className="content">
                                                    <div className="cont-box">
                                                        <ul>
                                                            <li>
                                                                <i className="fa fa-phone"></i>{" "}
                                                                {dataVal.mobile}
                                                            </li>
                                                            <li>
                                                                <i className="fa fa-envelope"></i>{" "}
                                                                {dataVal.email}
                                                            </li>
                                                            <li>
                                                                <i
                                                                    className="fa fa-map-marker"
                                                                    aria-hidden="true"
                                                                ></i>{" "}
                                                                {
                                                                    dataVal.address
                                                                }
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="con-btn">
                                                        <a
                                                            href={
                                                                dataVal.btn_url
                                                            }
                                                            target="_blank"
                                                            className="theme-btn"
                                                            rel="noreferrer"
                                                        >
                                                            Visit Now
                                                        </a>
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
                <Footer />
            </>
        );
    }
}
export default GroupofCompanies;
