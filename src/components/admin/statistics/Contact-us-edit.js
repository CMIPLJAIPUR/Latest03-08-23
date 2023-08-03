import React, { Component } from "react";
import axios from "axios";
import withRouter from "./../../../withRouter";
import "react-toastify/dist/ReactToastify.css";
import Url from "./../../configure.js";

class Contactedit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visit_us: "",
            mail_id: "",
            phone_no: "",
            map_embed_url: "",
            loading: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios
            .get(Url.baseUrl + `api/contact-edit/${this.props.params.id}`)
            .then((response) => {
                this.setState({
                    visit_us: response.data.data.visit_us,
                    mail_id: response.data.data.mail_id,
                    phone_no: response.data.data.phone_no,
                    map_embed_url: response.data.data.map_embed_url,
                });
            });
    };

    handleInputChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        var firstFormData = new FormData();
        firstFormData.append("id", this.props.params.id);
        firstFormData.append("visit_us", this.state.visit_us);
        firstFormData.append("mail_id", this.state.mail_id);
        firstFormData.append("phone_no", this.state.phone_no);
        firstFormData.append("map_embed_url", this.state.map_embed_url);
        this.setState({
            loading: true,
        });
        axios
            .post(Url.baseUrl + "api/contact-update", firstFormData)
            .then((res) => {
                if (res.data.status === 200) {
                    this.setState({
                        loading: false,
                    });
                    window.history.back();
                }
                if (
                    res.data.status === "failed" &&
                    res.data.success === undefined
                ) {
                    this.setState({
                        loading: false,
                        errMsgVi: res.data.errors.visit_us,
                        errMsgMail: res.data.errors.mail_id,
                        errMsgPh: res.data.errors.phone_no,
                        errMsgMap: res.data.errors.map_embed_url,
                    });
                }
            })
            .catch((err) => console.log(err));
    }
    render() {
        return (
            <>
                {this.state.loading ? (
                    <div
                        className="loader"
                        style={{
                            left: "50%",
                            top: "50%",
                            transform: "translate3d(-50%, -50%, 0px)",
                        }}
                    >
                        <div className="imgs">
                            <img
                                src="/assets/img/preloader.png"
                                alt="preloader"
                            />
                            <img
                                src="/assets/img/loader-bg.png"
                                className="circle"
                                alt="preloader-bg"
                            />
                        </div>
                    </div>
                ) : (
                    ""
                )}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h2 className="m-0">Edit Contact Detail</h2>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="/admin/dashboard">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Edit Contact Detail
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <form
                                    id="quickForm"
                                    onSubmit={this.handleSubmit.bind(this)}
                                >
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="visit_us">
                                                Visit Us
                                            </label>
                                            <input
                                                type="text"
                                                name="visit_us"
                                                className="form-control"
                                                id="visit_us"
                                                placeholder="Visit Us"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.visit_us}
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgVi}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="mail_id">
                                                Subtitle
                                            </label>
                                            <input
                                                type="text"
                                                name="mail_id"
                                                className="form-control"
                                                id="mail_id"
                                                placeholder="Mail Id"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.mail_id}
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgMail}
                                            </span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone_no">
                                                Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                name="phone_no"
                                                className="form-control"
                                                id="phone_no"
                                                placeholder="Phone Number"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.phone_no}
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgPh}
                                            </span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="map_embed_url">
                                                Map Embed Src
                                            </label>
                                            <input
                                                type="text"
                                                name="map_embed_url"
                                                className="form-control"
                                                id="map_embed_url"
                                                placeholder="Map Embed Src"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.map_embed_url}
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgMap}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default withRouter(Contactedit);
