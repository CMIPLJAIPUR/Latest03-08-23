import React, { Component } from "react";
import Header from "./../../layouts/front/Header";
import Footer from "./../../layouts/front/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import Url from "./../configure.js";
import withRouter from "./../../withRouter";
class Portfoliodetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioList: [],
            getport: [],
            getportImg: [],
            multiImg: [],
            setLightBoxDisplay: false,
            imageToShow: "",
            name: "",
            email: "",
            phone: "",
            message: "",
            successmsg: "",
            submitLoad: true,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount() {
        //setTimeout(() => {
        axios
            .post(
                Url.baseUrl +
                    `api/get-portfolio-detail-front/${this.props.params.id}`
            )
            .then((response) => {
                const multiImgs = [];
                response.data.data.get_images.map((val, key) =>
                    multiImgs.push(
                        `${Url.baseUrl}public/uploads/portfoliodetail/${val.image}`
                    )
                );

                this.setState({
                    portfolioList: response.data.data,
                    multiImg: multiImgs,
                    getport: response.data.data.get_portfolio[0],
                    getportImg: response.data.data.get_images,
                });
            });
        //}, 500);
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
    showImage = (image) => {
        this.setState({
            imageToShow: image,
            setLightBoxDisplay: true,
        });
    };

    showNext = (e) => {
        e.stopPropagation();
        let currentIndex = this.state.multiImg.indexOf(this.state.imageToShow);

        if (currentIndex >= this.state.multiImg.length - 1) {
            this.setState({
                setLightBoxDisplay: false,
            });
        } else {
            let nextImage = this.state.multiImg[currentIndex + 1];
            this.setState({
                imageToShow: nextImage,
            });
        }
    };

    showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = this.state.multiImg.indexOf(this.state.imageToShow);
        if (currentIndex <= 0) {
            this.setState({
                setLightBoxDisplay: false,
            });
        } else {
            let nextImage = this.state.multiImg[currentIndex - 1];
            this.setState({
                imageToShow: nextImage,
            });
        }
    };

    hideLightBox = () => {
        this.setState({
            setLightBoxDisplay: false,
        });
    };

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
                                        {this.state.getport.length !== 0 ? (
                                            <>{this.state.getport.title}</>
                                        ) : (
                                            ""
                                        )}
                                    </h4>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="/portfolio">
                                                    Portfolio
                                                </Link>
                                            </li>
                                            {this.state.getport.length !== 0 ? (
                                                <li
                                                    className="breadcrumb-item active"
                                                    aria-current="page"
                                                >
                                                    {this.state.getport.title}
                                                </li>
                                            ) : (
                                                ""
                                            )}
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

                {this.state.portfolioList.length !== 0 ? (
                    <>
                        <section className="project-infor-cls mt50">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="side-new-br">
                                            <div className="project-info">
                                                <h3 className="font22 clr-yellow medium">
                                                    Project Details
                                                </h3>
                                                <div className="det-bx">
                                                    <ul>
                                                        <li>
                                                            <span>
                                                                Client
                                                                &nbsp;:&nbsp;
                                                            </span>
                                                            {
                                                                this.state
                                                                    .portfolioList
                                                                    .client_name
                                                            }
                                                        </li>
                                                        <li>
                                                            <span>
                                                                Date
                                                                &nbsp;:&nbsp;
                                                            </span>{" "}
                                                            {
                                                                this.state
                                                                    .portfolioList
                                                                    .date
                                                            }
                                                        </li>
                                                        <li>
                                                            <span>
                                                                Trade
                                                                &nbsp;:&nbsp;
                                                            </span>{" "}
                                                            {
                                                                this.state
                                                                    .portfolioList
                                                                    .trade
                                                            }
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="shre-box">
                                                    <h3 className="font22 clr-yellow medium">
                                                        Share It
                                                    </h3>
                                                    <div className="social">
                                                        <a
                                                            href={
                                                                this.state
                                                                    .portfolioList
                                                                    .fb
                                                                    ? this.state
                                                                          .portfolioList
                                                                          .fb
                                                                    : "#"
                                                            }
                                                        >
                                                            <i
                                                                className="fa fa-facebook"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                        <a
                                                            href={
                                                                this.state
                                                                    .portfolioList
                                                                    .yt
                                                                    ? this.state
                                                                          .portfolioList
                                                                          .yt
                                                                    : "#"
                                                            }
                                                        >
                                                            <i
                                                                className="fa fa-youtube-play"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                        <a
                                                            href={
                                                                this.state
                                                                    .portfolioList
                                                                    .tw
                                                                    ? this.state
                                                                          .portfolioList
                                                                          .tw
                                                                    : "#"
                                                            }
                                                        >
                                                            <i
                                                                className="fa fa-twitter"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                        <a
                                                            href={
                                                                this.state
                                                                    .portfolioList
                                                                    .ln
                                                                    ? this.state
                                                                          .portfolioList
                                                                          .ln
                                                                    : "#"
                                                            }
                                                        >
                                                            <i
                                                                className="fa fa-linkedin"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                        <a
                                                            href={
                                                                this.state
                                                                    .portfolioList
                                                                    .in
                                                                    ? this.state
                                                                          .portfolioList
                                                                          .in
                                                                    : "#"
                                                            }
                                                        >
                                                            <i
                                                                className="fa fa-instagram"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="project-info tech hed-cls">
                                                <h3 className="font22 clr-yellow medium ">
                                                    Moodle ({" "}
                                                    {this.state.getport.title} )
                                                </h3>
                                                <ul className="info-cls">
                                                    {this.state.getport.skill
                                                        ?.split(",")
                                                        .map((item, k) => (
                                                            <li
                                                                key={k}
                                                                style={{
                                                                    textTransform:
                                                                        "uppercase",
                                                                }}
                                                            >
                                                                {item}
                                                            </li>
                                                        ))}
                                                </ul>
                                                <div className="com-info">
                                                    <div className="inner-bx">
                                                        <div className="ic-bx">
                                                            <i
                                                                className="fa fa-users"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </div>
                                                        <div className="name font20 clr-yellow medium">
                                                            Team
                                                        </div>
                                                        <p>
                                                            {
                                                                this.state
                                                                    .portfolioList
                                                                    .team_member
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="inner-bx">
                                                        <div className="ic-bx">
                                                            <i
                                                                className="fa fa-calendar"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </div>
                                                        <div className="name font20 clr-yellow medium">
                                                            Time
                                                        </div>
                                                        <p>
                                                            {
                                                                this.state
                                                                    .portfolioList
                                                                    .project_time
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="inner-bx">
                                                        <div className="ic-bx">
                                                            <i
                                                                className="fa fa-cog"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </div>
                                                        <div className="name font20 clr-yellow medium">
                                                            Technology
                                                        </div>
                                                        <p>
                                                            {
                                                                this.state
                                                                    .portfolioList
                                                                    .technology
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="inner-bx">
                                                        <div className="ic-bx">
                                                            <i
                                                                className="fa fa-television"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </div>
                                                        <div className="name font20 clr-yellow medium">
                                                            Platform
                                                        </div>
                                                        <p>
                                                            {
                                                                this.state
                                                                    .portfolioList
                                                                    .plateform
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="port-details">
                                            <div className="innr first">
                                                <h3>
                                                    Project{" "}
                                                    <span>Information</span>
                                                </h3>
                                                <p>
                                                    {
                                                        this.state.portfolioList
                                                            .project_info
                                                    }
                                                </p>
                                            </div>
                                            <div className="innr">
                                                <h3>
                                                    Development{" "}
                                                    <span>Approach</span>
                                                </h3>
                                                <p>
                                                    {
                                                        this.state.portfolioList
                                                            .dev_appro
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="project-shots">
                                            <h3 className="text-center">
                                                More <span>Shots</span>
                                            </h3>
                                            <div className="row justify-content-center">
                                                {this.state.multiImg.map(
                                                    (image, i) => (
                                                        <div
                                                            className="col-md-4"
                                                            key={i}
                                                        >
                                                            <div className="box-img">
                                                                <img
                                                                    className="img-fluid"
                                                                    onClick={() =>
                                                                        this.showImage(
                                                                            image
                                                                        )
                                                                    }
                                                                    src={image}
                                                                    alt={
                                                                        this
                                                                            .state
                                                                            .portfolioList
                                                                            .image_alt
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                                {this.state
                                                    .setLightBoxDisplay ? (
                                                    <div
                                                        id="lightbox"
                                                        onClick={
                                                            this.hideLightBox
                                                        }
                                                    >
                                                        <button
                                                            onClick={
                                                                this.showPrev
                                                            }
                                                        >
                                                            {"<"}
                                                        </button>
                                                        <img
                                                            id="lightbox-img"
                                                            src={
                                                                this.state
                                                                    .imageToShow
                                                            }
                                                            alt={
                                                                this.state
                                                                    .portfolioList
                                                                    .image_alt
                                                            }
                                                        />
                                                        <button
                                                            onClick={
                                                                this.showNext
                                                            }
                                                        >
                                                            {">"}
                                                        </button>
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="query-form mt50 pt40 pb40">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="frm-bx">
                                            <h3>
                                                Send Your <span>Query</span>
                                            </h3>
                                            <h3 style={{ color: "green" }}>
                                                {this.state.successmsg}
                                            </h3>
                                            <div className="form">
                                                <form
                                                    onSubmit={this.handleSubmit.bind(
                                                        this
                                                    )}
                                                >
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    placeholder="Name"
                                                                    value={
                                                                        this
                                                                            .state
                                                                            .name
                                                                    }
                                                                    onChange={
                                                                        this
                                                                            .handleInputChange
                                                                    }
                                                                />
                                                                <span className="text-danger">
                                                                    {
                                                                        this
                                                                            .state
                                                                            .errMsgName
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    placeholder="Email"
                                                                    value={
                                                                        this
                                                                            .state
                                                                            .email
                                                                    }
                                                                    onChange={
                                                                        this
                                                                            .handleInputChange
                                                                    }
                                                                />
                                                                <span className="text-danger">
                                                                    {
                                                                        this
                                                                            .state
                                                                            .errMsgEmail
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <input
                                                                    type="text"
                                                                    name="phone"
                                                                    placeholder="Phone Number"
                                                                    value={
                                                                        this
                                                                            .state
                                                                            .phone
                                                                    }
                                                                    onChange={
                                                                        this
                                                                            .handleInputChange
                                                                    }
                                                                />
                                                                <span className="text-danger">
                                                                    {
                                                                        this
                                                                            .state
                                                                            .errMsgPhone
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <textarea
                                                                    name="message"
                                                                    placeholder="Your Comment"
                                                                    value={
                                                                        this
                                                                            .state
                                                                            .message
                                                                    }
                                                                    onChange={
                                                                        this
                                                                            .handleInputChange
                                                                    }
                                                                ></textarea>
                                                                <span className="text-danger">
                                                                    {
                                                                        this
                                                                            .state
                                                                            .errMsgMes
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            {this.state
                                                                .submitLoad ===
                                                            true ? (
                                                                <input
                                                                    type="submit"
                                                                    name=""
                                                                    value="GET A QUOTE"
                                                                />
                                                            ) : (
                                                                "Sending..."
                                                            )}
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <h3 style={{ textAlign: "center", padding: "40px" }}>
                        Data not found
                    </h3>
                )}

                <Footer />
            </>
        );
    }
}
export default withRouter(Portfoliodetail);
