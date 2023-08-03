import React, { Component } from "react";
import axios from "axios";
import withRouter from "./../../../withRouter";
import "react-toastify/dist/ReactToastify.css";
import Url from "./../../configure.js";

class Editslider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            designation: "",
            testimonial: "",
            image: "",
            image_alt: "",
            file: null,
            status: 1,
            star_rating: "",
            redirect: false,
            loading: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios
            .post(Url.baseUrl + `api/gettmslideredit/${this.props.params.id}`)
            .then((response) => {
                this.setState({
                    name: response.data.data.name,
                    designation: response.data.data.designation,
                    testimonial: response.data.data.testimonial,
                    star_rating: response.data.data.star_rating,
                    file:
                        Url.baseUrl +
                        "/public/uploads/testimonial/" +
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

    handleSubmit(e) {
        e.preventDefault();
        var firstFormData = new FormData();
        firstFormData.append("id", this.props.params.id);
        firstFormData.append("name", this.state.name);
        firstFormData.append("designation", this.state.designation);
        firstFormData.append("testimonial", this.state.testimonial);
        firstFormData.append("image", this.state.image);
        firstFormData.append("image_alt", this.state.image_alt);
        firstFormData.append("star_rating", this.state.star_rating);
        firstFormData.append("status", this.state.status);

        this.setState({
            loading: true,
        });
        axios
            .post(Url.baseUrl + "api/updatetmslider", firstFormData, {})
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
                        errMsgname: res.data.errors.name,
                        errMsgDg: res.data.errors.designation,
                        errMsgTm: res.data.errors.testimonial,
                        errMsgSt: res.data.errors.star_rating,
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
                            <img
                                src="/assets/img/preloader.png"
                                alt="preloader"
                            />
                            <img
                                src="/assets/img/loader-bg.png"
                                alt="preloader-bg"
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
                                <h2 className="m-0">Edit Testimonial</h2>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="/admin/dashboard">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Edit Testimonial Slider
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
                                            <label htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="Name"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.name}
                                                required
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgname}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="designation">
                                                Designation
                                            </label>
                                            <input
                                                type="text"
                                                name="designation"
                                                className="form-control"
                                                id="designation"
                                                placeholder="Designation"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.designation}
                                                required
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgSubDes}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="testimonial">
                                                Testimonial
                                            </label>
                                            <input
                                                type="text"
                                                name="testimonial"
                                                className="form-control"
                                                id="testimonial"
                                                placeholder="Testimonial"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.testimonial}
                                                required
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgTm}
                                            </span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="star_rating">
                                                Star Rating
                                            </label>
                                            <select
                                                className="form-control"
                                                name="star_rating"
                                                id="star_rating"
                                                value={this.state.star_rating}
                                                onChange={
                                                    this.handleInputChange
                                                }
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
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
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <img
                                            src={this.state.file}
                                            style={{ width: "100px" }}
                                            alt={this.state.image_alt}
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
export default withRouter(Editslider);
