import React, { Component } from "react";
import axios from "axios";
import withRouter from "./../../../withRouter";
import Url from "./../../configure.js";
import CKEditor from "react-ckeditor-component";

class Privacypolicy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            loading: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios
            .get(
                Url.baseUrl + `api/privacy-policy-edit/${this.props.params.id}`
            )
            .then((response) => {
                this.setState({
                    description: response.data.data.description,
                });
            });
    };

    handleInputChange = (event) => {
        this.setState({ description: event.editor.getData() });
    };

    handleSubmit(e) {
        e.preventDefault();
        var firstFormData = new FormData();
        firstFormData.append("id", this.props.params.id);
        firstFormData.append("description", this.state.description);
        this.setState({
            loading: true,
        });
        axios
            .post(Url.baseUrl + "api/privacy-policy-update", firstFormData)
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
                        errMsgDes: res.data.errors.description,
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
                                alt="image_pre"
                            />
                            <img
                                src="/assets/img/loader-bg.png"
                                className="circle"
                                alt="image_pre_bg"
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
                                <h2 className="m-0">Edit Privacy Policy</h2>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="/admin/dashboard">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Privacy Policy
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
                                            <label htmlFor="description">
                                                Description
                                            </label>
                                            <CKEditor
                                                id="description"
                                                activeClass="p10"
                                                content={this.state.description}
                                                name="description"
                                                events={{
                                                    change: this
                                                        .handleInputChange,
                                                }}
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgDes}
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
export default withRouter(Privacypolicy);
