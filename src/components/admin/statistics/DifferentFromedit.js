import React, { Component } from "react";
import axios from "axios";
import withRouter from "./../../../withRouter";
import "react-toastify/dist/ReactToastify.css";
import Url from "./../../configure.js";

class DifferentFromedit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            subtitle: "",
            description: "",
            //btnurl: "",
            listli: "",
            image: "",
            image_alt: "",
            formValues: [],
            file: null,
            loading: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.addFormFields = this.addFormFields.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    handleChanges = (i, e) => {
        let newFormValues = [...this.state.formValues];
        newFormValues[i][e.target.name] = e.target.value;
        this.setState({
            formValues: newFormValues,
        });
    };

    addFormFields = () => {
        this.setState({
            formValues: [...this.state.formValues, { name: "" }],
        });
    };

    removeFormFields = (i) => {
        let newFormValues = [...this.state.formValues];
        newFormValues.splice(i, 1);
        this.setState({
            formValues: newFormValues,
        });
    };

    fetchData = () => {
        axios
            .post(
                Url.baseUrl + `api/differentfrom-edit/${this.props.params.id}`
            )
            .then((response) => {
                var listName = [];
                response.data.data.listli.split("$").map((ft) => {
                    listName.push({ name: ft });
                });
                this.setState({
                    formValues: listName,
                });
                this.setState({
                    title: response.data.data.title,
                    subtitle: response.data.data.subtitle,
                    file:
                        Url.baseUrl +
                        "/public/uploads/differentfroms/" +
                        response.data.data.image,
                    description: response.data.data.description,
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

        //console.log(JSON.stringify(this.state.formValues)); return false;
        firstFormData.append("id", this.props.params.id);
        firstFormData.append("title", this.state.title);
        firstFormData.append("subtitle", this.state.subtitle);
        firstFormData.append("image", this.state.image);
        firstFormData.append("image_alt", this.state.image_alt);
        firstFormData.append("description", this.state.description);
        //firstFormData.append("btnurl", this.state.btnurl);
        firstFormData.append("listli", JSON.stringify(this.state.formValues));

        this.setState({
            loading: true,
        });
        axios
            .post(Url.baseUrl + "api/differentfrom-update", firstFormData)
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
                        errMsgDescription: res.data.errors.description,
                        errMsgLi: res.data.errors.listli,
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
                                <h2 className="m-0">Edit DifferentFrom</h2>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="/admin/dashboard">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Edit DifferentFrom
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
                                                required
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgSubTitle}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="color">
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
                                                {this.state.errMsgDescription}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="listli">
                                                List Li &nbsp;&nbsp;
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

                                            {this.state.formValues.map(
                                                (element, index) => (
                                                    <div
                                                        className="form-inline"
                                                        key={index}
                                                    >
                                                        <label>
                                                            {" "}
                                                            {index + 1}{" "}
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
                                                                this.handleChanges(
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
                                            <span className="text-danger">
                                                {this.state.errMsgLi}
                                            </span>
                                        </div>

                                        {/* <div className="form-group">
                      <label htmlFor="btnurl">Btnurl</label>
                      <input
                        type="text"
                        name="btnurl"
                        className="form-control"
                        id="btnurl"
                        placeholder="Btnurl"
                        onChange={this.handleInputChange}
                        value={this.state.btnurl}
                      />
                    </div> */}

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
                                            alt={this.state.image_alt}
                                        />
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
export default withRouter(DifferentFromedit);
