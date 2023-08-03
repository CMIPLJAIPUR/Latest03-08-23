import React, { Component } from "react";
import axios from "axios";
import withRouter from "./../../../withRouter";
import "react-toastify/dist/ReactToastify.css";
import Url from "./../../configure.js";

class Editcompanygroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            image: "",
            file: "",
            email: "",
            mobile: "",
            status: 1,
            image_alt: "",
            address: "",
            btn_url: "",
            loading: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0]),
        });
        this.setState({ image: event.target.files[0] });
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios
            .post(
                Url.baseUrl + `api/company-group-edit/${this.props.params.id}`
            )
            .then((response) => {
                this.setState({
                    title: response.data.data.title,
                    description: response.data.data.description,
                    email: response.data.data.email,
                    mobile: response.data.data.mobile,
                    address: response.data.data.address,
                    file:
                        Url.baseUrl +
                        `/public/uploads/company-group/` +
                        response.data.data.image,
                    image_alt: response.data.data.image_alt,
                    btn_url: response.data.data.btn_url,
                    status: response.data.data.status,
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
        firstFormData.append("title", this.state.title);
        firstFormData.append("description", this.state.description);
        firstFormData.append("email", this.state.email);
        firstFormData.append("mobile", this.state.mobile);
        firstFormData.append("address", this.state.address);
        firstFormData.append("image", this.state.image);
        firstFormData.append("image_alt", this.state.image_alt);
        firstFormData.append("btn_url", this.state.btn_url);
        firstFormData.append("status", this.state.status);

        this.setState({
            loading: true,
        });
        axios
            .post(Url.baseUrl + "api/company-group-update", firstFormData, {})
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
                        errMsgTitle: res.data.errors.title,
                        errMsgDes: res.data.errors.description,
                        errMsgAdd: res.data.errors.address,
                        errMsgAlt: res.data.errors.image_alt,
                        errMsgEmail: res.data.errors.email,
                        errMsgMobile: res.data.errors.mobile,
                        errMsgBtn: res.data.errors.btn_url,
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
                            <img src="/assets/img/preloader.png" />
                            <img
                                src="/assets/img/loader-bg.png"
                                className="circle"
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
                                <h2 className="m-0">Edit Group of Companies</h2>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="/admin/dashboard">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Edit Group of Companies
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
                                            <label htmlFor="title">Title</label>
                                            <input
                                                type="text"
                                                name="title"
                                                className="form-control"
                                                id="title"
                                                placeholder="Title"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.title}
                                                required
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgTitle}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">
                                                Description
                                            </label>
                                            <textarea
                                                name="description"
                                                className="form-control"
                                                id="description"
                                                placeholder="Description"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.description}
                                                required
                                            ></textarea>

                                            <span className="text-danger">
                                                {this.state.errMsgDes}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Email"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.email}
                                                required
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgEmail}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="mobile">
                                                Mobile
                                            </label>
                                            <input
                                                type="text"
                                                name="mobile"
                                                className="form-control"
                                                id="mobile"
                                                placeholder="Mobile"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.mobile}
                                                required
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgMobile}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="address">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                className="form-control"
                                                id="address"
                                                placeholder="Address"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.address}
                                                required
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgAdd}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="btn_url">
                                                Button URL
                                            </label>
                                            <input
                                                type="text"
                                                name="btn_url"
                                                className="form-control"
                                                id="btn_url"
                                                placeholder="btn_url"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.btn_url}
                                                required
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgBtn}
                                            </span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="image">Image</label>
                                            <input
                                                type="file"
                                                name="image"
                                                className="form-control"
                                                id="image"
                                                placeholder="Image"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <img
                                            src={this.state.file}
                                            style={{ width: "100px" }}
                                        />

                                        <div className="form-group">
                                            <label htmlFor="image_alt">
                                                Image Alt
                                            </label>
                                            <input
                                                type="text"
                                                name="image_alt"
                                                className="form-control"
                                                id="image_alt"
                                                placeholder="Image Alt"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.image_alt}
                                                required
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgAlt}
                                            </span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="status">
                                                Status
                                            </label>
                                            <select
                                                name="status"
                                                className="form-control"
                                                id="status"
                                                value={this.state.status}
                                                onChange={
                                                    this.handleInputChange
                                                }
                                            >
                                                <option value="1">
                                                    Active
                                                </option>
                                                <option value="0">
                                                    Inactive
                                                </option>
                                            </select>
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
export default withRouter(Editcompanygroup);
