import React, { Component } from "react";
import axios from "axios";
import Url from "./../../configure.js";
import "react-toastify/dist/ReactToastify.css";

export default class Addtechnology extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            image: "",
            image_alt: "",
            service_id: "",
            serviceList: [],
            file: null,
            status: 1,
            loading: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount() {
        this.fetchServiceData();
    }
    handleInputChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    fetchServiceData = () => {
        axios.get(Url.baseUrl + `api/get-service`).then((response) => {
            this.setState({
                serviceList: response.data.data,
            });
        });
    };

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0]),
        });
        this.setState({ image: event.target.files[0] });
    }
    handleSubmit(e) {
        e.preventDefault();
        var firstFormData = new FormData();
        firstFormData.append("name", this.state.name);
        firstFormData.append("image", this.state.image);
        firstFormData.append("service_id", this.state.service_id);
        firstFormData.append("status", this.state.status);
        firstFormData.append("image_alt", this.state.image_alt);

        this.setState({
            loading: true,
        });
        axios
            .post(Url.baseUrl + "api/technology-add", firstFormData, {})
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
                        errMsgName: res.data.errors.name,
                        errMsgSer: res.data.errors.service_id,
                        errMsgImg: res.data.errors.image,
                        errMsgMt: res.data.errors.image_alt,
                    });
                }
            })
            .catch((err) => console.log(err));
    }
    render() {
        const { serviceList } = this.state;
        let serList =
            serviceList.length > 0 &&
            serviceList.map((item, i) => {
                return (
                    <option key={i} value={item.id}>
                        {item.name}
                    </option>
                );
            }, this);
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
                            <img src="/assets/img/preloader.png" alt="press" />
                            <img
                                src="/assets/img/loader-bg.png"
                                className="circle"
                                alt="press-bg"
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
                                <h2 className="m-0">Add Service Technology</h2>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="/admin/dashboard">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Add Service Technology
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
                                            <label htmlFor="service">
                                                Service
                                            </label>
                                            <select
                                                name="service_id"
                                                className="form-control"
                                                id="service"
                                                value={this.state.service_id}
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                required
                                            >
                                                <option value="">
                                                    Select Service
                                                </option>
                                                {serList}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                Technology Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="Technology Name"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.name}
                                                required
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgName}
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
                                                placeholder="Image Alt Text"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.image_alt}
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
                                                required
                                            />
                                        </div>
                                        <span className="text-danger">
                                            {this.state.errMsgImg}
                                        </span>
                                        <img
                                            src={this.state.file}
                                            style={{ width: "100px" }}
                                            alt="..."
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
