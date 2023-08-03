import MetaTags from "react-meta-tags";
//import { format, parseISO } from "date-fns";
import { format } from "date-fns";
import Moment from "moment";
import React, { Component } from "react";
import Header from "./../../layouts/front/Header";
import Footer from "./../../layouts/front/Footer";
import axios from "axios";
import withRouter from "./../../withRouter";
import Url from "./../configure.js";
import { Link } from "react-router-dom";
import $ from "jquery";
class Blogdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setBlogBySlug: [],
            setBlogBy: [],
            name: "",
            email: "",
            comment: "",
            successMsg: "",
            commentCount: "",
            status: "0",
            itemss: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    fatchData = async () => {
        await axios
            .get(
                Url.baseUrl + "api/get-blog-slug/" + `${this.props.params.name}`
            )
            .then((response) => {
                this.setState({
                    setBlogBySlug: response.data.data[0],
                    commentCount: response.data.commentCount,
                });
            });
    };
    componentDidMount() {
        this.fatchData();
        axios.get(Url.baseUrl + "api/get-blog").then((response) => {
            const items = response.data.data;
            let blogS = [];
            for (let i = 0; i < 5; i++) {
                if (items[i]["status"] === 1) {
                    blogS.push(items[i]);
                }
            }

            this.setState({
                setBlogBy: blogS,
            });
        });
        axios.get(Url.baseUrl + "api/get-blog-comment").then((response) => {
            const items = response.data.data;

            this.setState({
                itemss: items,
            });
        });
        $(".blog-details-share-icon i").click(function () {
            $(".blog-details-share-icon").toggleClass("social");
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        var firstFormData = new FormData();
        firstFormData.append("name", this.state.name);
        firstFormData.append("blog_id", this.state.setBlogBySlug.id);
        firstFormData.append("email", this.state.email);
        firstFormData.append("comment", this.state.comment);
        firstFormData.append("status", this.state.status);

        this.setState({
            loading: true,
        });
        axios
            .post(Url.baseUrl + "api/blog-comment-add", firstFormData, {})
            .then((res) => {
                if (res.data.status === 200) {
                    this.setState({
                        loading: false,
                        successMsg: res.data.message,
                    });
                    this.fatchData();
                    setTimeout(() => {
                        this.setState({
                            successMsg: "",
                            name: "",
                            email: "",
                            comment: "",
                        });
                    }, 1000);
                }
                if (
                    res.data.status === "failed" &&
                    res.data.success === undefined
                ) {
                    this.setState({
                        loading: false,
                        errMsgName: res.data.errors.name,
                        errMsgEmail: res.data.errors.email,
                        errMsgComment: res.data.errors.comment,
                    });
                }
            })
            .catch((err) => console.log(err));
    }

    render() {
        let commentList = [];
        for (let i = 0; i < this.state.itemss.length; i++) {
            if (this.state.itemss[i]["status"] === 1) {
                if (
                    this.state.itemss[i]["blog_id"] ==
                    this.state.setBlogBySlug.id
                ) {
                    commentList.push(this.state.itemss[i]);
                }
            }
        }
        return (
            <>
                <MetaTags>
                    <title>
                        Website designs | Best portfolio websites and templates
                    </title>
                    <meta
                        httpEquiv="refresh"
                        name="Website designs | Best portfolio websites and templates"
                        content="Website designs developed on the most advanced technology platforms like to React. js, angular,Laravel, Magento, Word press and many more. Each web design is tailor-made and customized to your business objectives. For the most stunning websites reach out to us."
                    />
                </MetaTags>
                <Header />

                <section className="banner-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="banner-name text-center">
                                    <h4 className="font40 inter bold clr-white">
                                        Events
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
                                                Events
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-curv">
                        <img src="/assets/img/wave-1.png" />
                    </div>
                </section>
                <section className="blog-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="blog-details-main">
                                    <div className="blog-details-main-heading">
                                        <h2 className="bold font30 clr-black">
                                            {this.state.setBlogBySlug.title}
                                        </h2>
                                    </div>
                                    <div className="blog-details-img">
                                        <img
                                            src={
                                                Url.baseUrl +
                                                `/public/uploads/blogs/` +
                                                this.state.setBlogBySlug.image
                                            }
                                        />
                                    </div>
                                    <div className="blog-details-inner">
                                        <div className="blog-details-icon">
                                            <ul>
                                                <li className="clr-white">
                                                    <i
                                                        className="fa fa-commenting-o"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <span>
                                                        {
                                                            this.state
                                                                .commentCount
                                                        }{" "}
                                                        Comment
                                                    </span>
                                                </li>
                                                <li className="clr-white">
                                                    <i
                                                        className="fa fa-user"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <span>By Admin</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="blog-details-date">
                                            <h5 className="font14">
                                                {Moment(
                                                    this.state.setBlogBySlug
                                                        .created_at
                                                ).format("DD MMM, YYYY")}
                                            </h5>
                                        </div>

                                        <div className="blog-details-share-icon">
                                            <i
                                                className="fa fa-share-alt"
                                                aria-hidden="true"
                                            ></i>

                                            <div className="blog-details-share-icon-inner">
                                                <a
                                                    href={
                                                        `https://www.facebook.com/share.php?u=charumindworks.com/blog-detail/` +
                                                        this.state.setBlogBySlug
                                                            .slug
                                                    }
                                                >
                                                    <i
                                                        className="fa fa-facebook"
                                                        aria-hidden="true"
                                                    ></i>
                                                </a>
                                                {/* <a
                                                    href={
                                                        `https://www.instagram.com/sharer.php/u=charumindworks.com/blog-detail/` +
                                                        this.state.setBlogBySlug
                                                            .slug
                                                    }
                                                >
                                                    <i
                                                        className="fa fa-instagram"
                                                        aria-hidden="true"
                                                    ></i>
                                                </a> */}
                                                <a
                                                    href={
                                                        `https://twitter.com/intent/tweet?url=charumindworks.com/blog-detail/` +
                                                        this.state.setBlogBySlug
                                                            .slug
                                                    }
                                                >
                                                    <i
                                                        className="fa fa-twitter"
                                                        aria-hidden="true"
                                                    ></i>
                                                </a>
                                                <a
                                                    href={
                                                        `https://www.linkedin.com/sharing/share-offsite/?url=charumindworks.com/blog-detail/` +
                                                        this.state.setBlogBySlug
                                                            .slug
                                                    }
                                                >
                                                    <i
                                                        className="fa fa-linkedin"
                                                        aria-hidden="true"
                                                    ></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="details">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="details-inner-main">
                                    <div
                                        className="details-inner-main-heading"
                                        dangerouslySetInnerHTML={{
                                            __html: this.state.setBlogBySlug
                                                .description,
                                        }}
                                    ></div>
                                    <div className="blog-details-tags">
                                        <div className="blog-details-tags1">
                                            {this.state.setBlogBy.length >
                                                0 && (
                                                <ul>
                                                    {this.state.setBlogBy.map(
                                                        (dataB, j) => (
                                                            <li key={j}>
                                                                {dataB.title}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="comment">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="comment-main">
                                    <div className="comment-inner">
                                        <h3 className="clr-black">Comments:</h3>
                                        {commentList.length > 0 && (
                                            <>
                                                {commentList.map((data, l) => {
                                                    return (
                                                        <div
                                                            className="comment-details"
                                                            key={l}
                                                        >
                                                            <h3 className="font18 clr-black bold">
                                                                {data.name}
                                                            </h3>
                                                            <span>
                                                                {format(
                                                                    new Date(
                                                                        data.created_at
                                                                    ),
                                                                    "dd MMM yyyy"
                                                                )}
                                                            </span>
                                                            <p className="font14">
                                                                {data.comment}
                                                            </p>
                                                        </div>
                                                    );
                                                })}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="apply-form">
                                    <div className="form-inner">
                                        <div className="tp-head-cls mb30">
                                            <h4 className="font40 clr-white bold">
                                                Leave
                                                <span className="clr-yellow">
                                                    {" "}
                                                    a Reply
                                                </span>
                                            </h4>
                                        </div>
                                        <div className="form-boxes">
                                            <h3 style={{ color: "green" }}>
                                                {this.state.successMsg}
                                            </h3>
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
                                                                onChange={
                                                                    this
                                                                        .handleInputChange
                                                                }
                                                                value={
                                                                    this.state
                                                                        .name
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
                                                                onChange={
                                                                    this
                                                                        .handleInputChange
                                                                }
                                                                value={
                                                                    this.state
                                                                        .email
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
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>
                                                                Comment
                                                            </label>
                                                            <textarea
                                                                rows="3"
                                                                name="comment"
                                                                onChange={
                                                                    this
                                                                        .handleInputChange
                                                                }
                                                                value={
                                                                    this.state
                                                                        .comment
                                                                }
                                                            ></textarea>
                                                            <span className="text-danger">
                                                                {
                                                                    this.state
                                                                        .errMsgComment
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group sub-btn">
                                                            <button
                                                                type="submit"
                                                                className="theme-btn"
                                                            >
                                                                Apply Now
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
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
export default withRouter(Blogdetail);
