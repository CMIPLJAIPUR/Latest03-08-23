import React, { Component } from "react";
import axios from "axios";
import withRouter from "./../../../withRouter";
import "react-toastify/dist/ReactToastify.css";
import Url from "./../../configure.js";

class EditBlogComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            comment: "",
            status: "",
            loading: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios
            .get(Url.baseUrl + `api/blog-comment-edit/${this.props.params.id}`)
            .then((response) => {
                this.setState({
                    name: response.data.data.name,
                    email: response.data.data.email,
                    comment: response.data.data.comment,
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
        firstFormData.append("name", this.state.name);
        firstFormData.append("email", this.state.email);
        firstFormData.append("comment", this.state.comment);
        firstFormData.append("status", this.state.status);

        this.setState({
            loading: true,
        });
        axios
            .post(Url.baseUrl + "api/blog-comment-update", firstFormData, {})
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
                        errMsgEmail: res.data.errors.email,
                        errMsgComment: res.data.errors.comment,
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
                                <h2 className="m-0">Edit Blog Comment</h2>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="/admin/dashboard">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Edit Blog Comment
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
                                                {this.state.errMsgName}
                                            </span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="email"
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
                                            <label htmlFor="comment">
                                                Comment
                                            </label>
                                            <textarea
                                                name="comment"
                                                className="form-control"
                                                id="comment"
                                                placeholder="Comment"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.comment}
                                                required
                                            ></textarea>
                                            <span className="text-danger">
                                                {this.state.errMsgComment}
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
export default withRouter(EditBlogComment);
