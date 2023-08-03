import React, { Component } from "react";
import axios from "axios";
import withRouter from "./../../../withRouter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Url from "./../../configure.js";

class EditCareer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            subtitle: "",
            location: "",
            no_of_opening: "",
            role_response: "",
            skill: "",
            status: 1,
            rolesValues: [],
            skillValues: [],
            loading: false,
        };
        this.addFormFields = this.addFormFields.bind(this);
        this.addFormFieldskill = this.addFormFieldskill.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios
            .post(Url.baseUrl + `api/career-edit/${this.props.params.id}`)
            .then((response) => {
                var listName = [];
                var listSkill = [];
                response.data.data.role_response.split("$").map((ft, ind) => {
                    listName.push({ name: ft });
                });
                response.data.data.skill.split("$").map((ft, ind) => {
                    listSkill.push({ name: ft });
                });
                this.setState({
                    rolesValues: listName,
                    skillValues: listSkill,
                });
                this.setState({
                    title: response.data.data.title,
                    subtitle: response.data.data.subtitle,
                    location: response.data.data.location,
                    no_of_opening: response.data.data.no_of_opening,
                    status: response.data.data.status,
                });
            });
    };

    addFormFields = () => {
        this.setState({
            rolesValues: [...this.state.rolesValues, { name: "" }],
        });
    };
    addFormFieldskill = () => {
        this.setState({
            skillValues: [...this.state.skillValues, { name: "" }],
        });
    };

    removeFormFields = (i) => {
        let newrolesValues = [...this.state.rolesValues];
        newrolesValues.splice(i, 1);
        this.setState({
            rolesValues: newrolesValues,
        });
    };

    removeFormFieldskill = (i) => {
        let newskillValues = [...this.state.skillValues];
        newskillValues.splice(i, 1);
        this.setState({
            skillValues: newskillValues,
        });
    };

    handleRoleChanges = (i, e) => {
        let newrolesValues = [...this.state.rolesValues];
        newrolesValues[i][e.target.name] = e.target.value;
        this.setState({
            rolesValues: newrolesValues,
        });
    };

    handleSkillChanges = (i, e) => {
        let newskillValues = [...this.state.skillValues];
        newskillValues[i][e.target.name] = e.target.value;
        this.setState({
            skillValues: newskillValues,
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
        firstFormData.append("subtitle", this.state.subtitle);
        firstFormData.append("location", this.state.location);
        firstFormData.append("no_of_opening", this.state.no_of_opening);
        firstFormData.append(
            "role_response",
            JSON.stringify(this.state.rolesValues)
        );
        firstFormData.append("skill", JSON.stringify(this.state.skillValues));
        firstFormData.append("status", this.state.status);

        this.setState({
            loading: true,
        });
        axios
            .post(Url.baseUrl + "api/career-update", firstFormData, {})
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
                        errMsgSub: res.data.errors.subtitle,
                        errMsgLoc: res.data.errors.location,
                        errMsgNo: res.data.errors.no_of_opening,
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
                                <h2 className="m-0">Edit Career</h2>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="/admin/dashboard">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Edit Career
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
                                                {this.state.errMsgSub}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="location">
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                name="location"
                                                className="form-control"
                                                id="location"
                                                placeholder="Location"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.location}
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgLoc}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="no_of_opening">
                                                Number of openings
                                            </label>
                                            <input
                                                type="text"
                                                name="no_of_opening"
                                                className="form-control"
                                                id="no_of_opening"
                                                placeholder="Number of openings"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.no_of_opening}
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgNo}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">
                                                Roles & Responsibilities
                                                &nbsp;&nbsp;
                                            </label>
                                            <button
                                                className="btn btn-info btn-sm"
                                                type="button"
                                                onClick={() =>
                                                    this.addFormFields()
                                                }
                                            >
                                                Add
                                            </button>

                                            {this.state.rolesValues.map(
                                                (element, index) => (
                                                    <div
                                                        className="form-inline"
                                                        key={index}
                                                    >
                                                        <label>
                                                            {index + 1}{" "}
                                                            &nbsp;&nbsp;&nbsp;
                                                        </label>
                                                        &nbsp;
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={
                                                                element.name ||
                                                                ""
                                                            }
                                                            onChange={(e) =>
                                                                this.handleRoleChanges(
                                                                    index,
                                                                    e
                                                                )
                                                            }
                                                            className="form-control"
                                                        />
                                                        {index ? (
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger btn-sm"
                                                                onClick={() =>
                                                                    this.removeFormFields(
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                X
                                                            </button>
                                                        ) : null}
                                                    </div>
                                                )
                                            )}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="listli">
                                                Skills & Qualifications
                                                &nbsp;&nbsp;
                                            </label>
                                            <button
                                                className="btn btn-info btn-sm"
                                                type="button"
                                                onClick={() =>
                                                    this.addFormFieldskill()
                                                }
                                            >
                                                Add
                                            </button>

                                            {this.state.skillValues.map(
                                                (element, index) => (
                                                    <div
                                                        className="form-inline"
                                                        key={index}
                                                    >
                                                        <label>
                                                            {index + 1}{" "}
                                                            &nbsp;&nbsp;&nbsp;
                                                        </label>
                                                        &nbsp;
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={
                                                                element.name ||
                                                                ""
                                                            }
                                                            onChange={(e) =>
                                                                this.handleSkillChanges(
                                                                    index,
                                                                    e
                                                                )
                                                            }
                                                            className="form-control"
                                                        />
                                                        {index ? (
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger btn-sm"
                                                                onClick={() =>
                                                                    this.removeFormFieldskill(
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                X
                                                            </button>
                                                        ) : null}
                                                    </div>
                                                )
                                            )}
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
export default withRouter(EditCareer);
