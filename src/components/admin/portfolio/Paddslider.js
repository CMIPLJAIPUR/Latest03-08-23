import React, { Component } from "react";
import axios from "axios";
import Url from "./../../configure.js";
export default class Paddslider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            subtitle: "",
            image: "",
            image_alt: "",
            file: null,
            status: 1,
            skill: [],
            btnurl: "",
            categoryList: [],
            category: "",
            color: "",
            redirect: false,
            skillList: [],
            loading: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeS = this.handleChangeS.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
    }
    getSkills() {
        axios.get(Url.baseUrl + "api/get-skill").then((res) => {
            this.setState({
                skillList: res.data.data,
            });
        });
    }
    selectCategory = (e) => {
        this.setState({ category: e.target.value });
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
    componentDidMount() {
        this.fetchcategoryData();
        this.getSkills();
    }
    fetchcategoryData = () => {
        axios.get(Url.baseUrl + `api/get-category`).then((response) => {
            this.setState({
                categoryList: response.data.data,
            });
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

        firstFormData.append("title", this.state.title);
        firstFormData.append("subtitle", this.state.subtitle);
        firstFormData.append("image", this.state.image);
        firstFormData.append("color", this.state.color);
        firstFormData.append("btnurl", this.state.btnurl);
        firstFormData.append("skill", this.state.skill);
        firstFormData.append("status", this.state.status);
        firstFormData.append("category", this.state.category);
        firstFormData.append("image_alt", this.state.image_alt);

        this.setState({
            loading: true,
        });
        axios
            .post(Url.baseUrl + "api/addpslider", firstFormData, {})
            .then((res) => {
                if (res.data.status === 200) {
                    console.log(res.data.status);
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
        const { categoryList } = this.state;
        let catList =
            categoryList.length > 0 &&
            categoryList.map((item, i) => {
                return (
                    <option key={i} value={item.id}>
                        {item.name}
                    </option>
                );
            }, this);

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
                            <img
                                src="/assets/img/preloader.png"
                                alt="image_pre1"
                            />
                            <img
                                src="/assets/img/loader-bg.png"
                                className="circle"
                                alt="image_pre2"
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
                                <h2 className="m-0">Add Portfolio Slider</h2>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="/admin/dashboard">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Add Portfolio Slider
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
                                            <label htmlFor="color">Color</label>
                                            <input
                                                type="text"
                                                name="color"
                                                className="form-control"
                                                id="color"
                                                placeholder="Backgournd Color"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.color}
                                                required
                                            />
                                            <span className="text-danger">
                                                {this.state.errMsgColor}
                                            </span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="btnurl">
                                                Btnurl
                                            </label>
                                            <input
                                                type="text"
                                                name="btnurl"
                                                className="form-control"
                                                id="btnurl"
                                                placeholder="Btnurl"
                                                onChange={
                                                    this.handleInputChange
                                                }
                                                value={this.state.btnurl}
                                            />
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
                                        <div className="form-group">
                                            <label htmlFor="category">
                                                Category
                                            </label>
                                            <select
                                                name="category"
                                                className="form-control"
                                                id="category"
                                                value={this.state.category}
                                                onChange={this.selectCategory}
                                                required
                                            >
                                                <option value="">
                                                    Select Category
                                                </option>
                                                {catList}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="skill">Skill</label>
                                            <select
                                                name="skill"
                                                className="form-control"
                                                id="skill"
                                                multiple={true}
                                                value={this.state.skill}
                                                onChange={this.handleChangeS}
                                                required
                                            >
                                                {options}
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
