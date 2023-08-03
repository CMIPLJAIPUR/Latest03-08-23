import MetaTags from "react-meta-tags";
import React, { Component } from "react";
import Header from "./../../layouts/front/Header";
import Footer from "./../../layouts/front/Footer";
import axios from "axios";
import Url from "./../configure.js";
import { Link } from "react-router-dom";
import Moment from "moment";
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setBlog: [],
        };
    }
    componentDidMount() {
        axios.get(Url.baseUrl + "api/get-blog").then((response) => {
            const itemsT = response.data.data;
            let setBlogs = [];
            for (let i = 0; i < itemsT.length; i++) {
                if (itemsT[i]["status"] === 1) {
                    setBlogs.push(itemsT[i]);
                }
            }

            this.setState({
                setBlog: setBlogs,
            });
        });
    }

    render() {
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
                                        Blog
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
                                                Blog
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
                <section className="blog-events">
                    <div className="container">
                        <div className="row">
                            {this.state.setBlog.length > 0 && (
                                <>
                                    {this.state.setBlog.map((data, i) => {
                                        return (
                                            <div
                                                className="col-lg-4 col-md-6 pb-5"
                                                key={i}
                                            >
                                                <div className="blog-events-main">
                                                    <div className="blog-events-img">
                                                        <Link
                                                            to={`/blog-detail/${data.slug}`}
                                                        >
                                                            <img
                                                                src={
                                                                    Url.baseUrl +
                                                                    `/public/uploads/blogs/` +
                                                                    data.image
                                                                }
                                                            />
                                                        </Link>
                                                    </div>

                                                    <div className="blog-events-details">
                                                        <div className="events-date">
                                                            <h3>
                                                                <span>
                                                                    {Moment(
                                                                        data.created_at
                                                                    ).format(
                                                                        "DD"
                                                                    )}
                                                                </span>
                                                                {Moment(
                                                                    data.created_at
                                                                ).format(
                                                                    "MMM yy"
                                                                )}
                                                            </h3>
                                                        </div>

                                                        <div className="Events-comments">
                                                            <ul>
                                                                <li>
                                                                    <i
                                                                        className="fa fa-commenting-o"
                                                                        aria-hidden="true"
                                                                    ></i>
                                                                    <span>
                                                                        {
                                                                            data.commentCount
                                                                        }{" "}
                                                                        &nbsp;
                                                                        Comment
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <i
                                                                        className="fa fa-user"
                                                                        aria-hidden="true"
                                                                    ></i>
                                                                    <span>
                                                                        By Admin
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="blog-events-main-heading">
                                                        <h3>{data.title}</h3>
                                                        <div className="blog-events-btn">
                                                            <Link
                                                                to={`/blog-detail/${data.slug}`}
                                                                className="theme-btn"
                                                            >
                                                                View More
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
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
export default Blog;
