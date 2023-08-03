import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Url from "./../../configure.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Faddslider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            subtitle: "",
            image: "",
            image_alt: "",
            file: null,
            status: 1,
            redirect: false,
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

    handleInputChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        var firstFormData = new FormData();
        firstFormData.append("title", this.state.title);
        firstFormData.append("subtitle", this.state.subtitle);
        firstFormData.append("image", this.state.image);
        firstFormData.append("status", this.state.status);
        firstFormData.append("image_alt", this.state.image_alt);

        this.setState({
            loading: true,
        });
        axios
            .post(Url.baseUrl + "api/addfslider", firstFormData, {})
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
                        errMsgSubTitle: res.data.errors.subtitle,
                        errMsgImg: res.data.errors.image,
                        errMsgMt: res.data.errors.image_alt,
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
                                <h2 className="m-0">Add Feature Slider</h2>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="/admin/dashboard">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Add Feature Slider
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
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgTitle}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subtitle">
                                                Subtitle
                                            </label>
                                            <input
                                                type="text"
                                                name="subtitle"
                                                className="form-control"
                                                id="subtitle"
                                                placeholder="Subtitle"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.subtitle}
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgSubTitle}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="image_alt">
                                                Image Alt Text
                                            </label>
                                            <input
                                                type="text"
                                                name="image_alt"
                                                className="form-control"
                                                id="image_alt"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.image_alt}
                                                placeholder="Image Alt Text"
                                                required
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgMt}
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
                                            <span className="text-danger">
                                                {this.state.errMsgImg}
                                            </span>
                                        </div>
                                        <img
                                            src={this.state.file}
                                            style={{ width: "100px" }}
                                        />

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
                                        <ToastContainer />
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
