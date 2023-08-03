import React, { Component } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import withRouter from "./../../../withRouter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Url from "./../../configure.js";

class Asomeedit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            short_desc: "",
            image: "",
            image_alt: "",
            file: null,
            status: 1,
            skill: [],
            skillList: [],
            loading: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeS = this.handleChangeS.bind(this);
    }

    componentDidMount() {
        this.fetchData();
        this.getSkills();
    }
    getSkills() {
        axios.get(Url.baseUrl + "api/get-skill").then((res) => {
            this.setState({
                skillList: res.data.data,
            });
        });
    }

    fetchData = () => {
        axios
            .post(Url.baseUrl + `api/awesome-edit/${this.props.params.id}`)
            .then((response) => {
                var value = [];
                response.data.data.skill.split(",").map((data, i) => {
                    value.push(data);
                });
                this.setState({
                    skill: value,
                    title: response.data.data.title,
                    short_desc: response.data.data.short_desc,
                    file:
                        Url.baseUrl +
                        "/public/uploads/awesome/" +
                        response.data.data.image,
                    status: response.data.data.status,
                    image_alt: response.data.data.image_alt,
                });
            });
    };

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
    handleChangeS(e) {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        this.setState({ skill: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        var firstFormData = new FormData();
        firstFormData.append("id", this.props.params.id);
        firstFormData.append("title", this.state.title);
        firstFormData.append("short_desc", this.state.short_desc);
        firstFormData.append("image", this.state.image);
        firstFormData.append("skill", this.state.skill);
        firstFormData.append("status", this.state.status);
        firstFormData.append("image_alt", this.state.image_alt);

        this.setState({
            loading: true,
        });
        axios
            .post(Url.baseUrl + "api/awesome-update", firstFormData)
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
                        errMsgTitle: res.data.errors.title,
                        errMsgShortDesc: res.data.errors.short_desc,
                        errMsgMt: res.data.errors.image_alt,
                    });
                }
            })
            .catch((err) => console.log(err));
    }
    render() {
        const dropdown = this.state.skillList;
        let options = dropdown.map((listoption) => {
            return (
                <option value={listoption.name} key={listoption.id}>
                    {listoption.name}
                </option>
            );
        });
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
                                <h2 className="m-0">
                                    Edit Awesome Services Slider
                                </h2>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="/admin/dashboard">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Edit Awesome Services Slider
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
                                            <label htmlFor="short_desc">
                                                Short Description
                                            </label>
                                            <input
                                                type="text"
                                                name="short_desc"
                                                className="form-control"
                                                id="short_desc"
                                                placeholder="Short Description"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.short_desc}
                                                required
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgShortDesc}
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
                                                placeholder="Image Alt Text"
                                                id="image_alt"
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
                                            <label htmlFor="skill">Skill</label>
                                            <select
                                                name="skill"
                                                className="form-control"
                                                id="skill"
                                                defaultValue={this.state.skill}
                                                multiple={true}
                                                value={this.state.skill}
                                                onChange={this.handleChangeS}
                                                required
                                            >
                                                {options}
                                            </select>
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
                                                required
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
export default withRouter(Asomeedit);
