import React, { Component } from "react";
import Header from "./../../layouts/front/Header";
import Footer from "./../../layouts/front/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import Url from "./../configure.js";
class Privacy extends Component {
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
                                        Privacy Policy
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
                                                Privacy Policy
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

                <section className="cont-sec-cls mt50">
                    <div className="container">
                        <div
                            className="privacyContent"
                            dangerouslySetInnerHTML={{
                                __html: this.state.datalist.description,
                            }}
                        ></div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }
}
export default Privacy;
