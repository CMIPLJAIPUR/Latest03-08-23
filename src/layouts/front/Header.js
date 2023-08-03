import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
export default class Career extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHideSidenav: "hidden",
        };
    }
    componentDidMount() {
        $(".loader").delay(200).fadeOut(1000);
    }

    toggleSidenav() {
        var css = this.state.showHideSidenav === "hidden" ? "show" : "hidden";
        this.setState({ showHideSidenav: css });
    }

    render() {
        return (
            <div>
                <div className="loader">
                    <div className="imgs">
                        <img src="/assets/img/preloader.png" alt="headerImg" />
                        <img
                            src="/assets/img/loader-bg.png"
                            className="circle"
                            alt="headerImgSecond"
                        />
                    </div>
                </div>

                <header>
                    <div className="tp-header">
                        <nav className="navbar navbar-dark bg-dark fixed-top">
                            <div className="container">
                                <Link
                                    className="navbar-brand"
                                    aria-current="page"
                                    to="/"
                                >
                                    <img
                                        src="/assets/img/cmipl-logo.png"
                                        alt="cmipl-logo"
                                    />
                                </Link>
                                {/* <div className="search-btn bg-darkgrey">
                    <img src="/assets/img/search.png" alt="cmipl-logo" />
                  </div>
                  <div className="search-box form-group pd15 bg-white p-relative">
                    <form>
                      <input
                        type=""
                        className="form-control bg-darkgrey clr-lightaqva"
                        placeholder="Search"
                      />
                      <button>
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      </button>
                    </form>
                  </div> */}
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasDarkNavbar"
                                    aria-controls="offcanvasDarkNavbar"
                                >
                                    <span className="nav-menu-icon navBtn">
                                        <span className="nav-menu-icon-top"></span>
                                        <span className="nav-menu-icon-middle"></span>
                                        <span className="nav-menu-icon-bottom"></span>
                                    </span>
                                </button>
                                <div
                                    className="offcanvas offcanvas-end text-bg-dark"
                                    tabIndex="-1"
                                    id="offcanvasDarkNavbar"
                                    aria-labelledby="offcanvasDarkNavbarLabel"
                                >
                                    <div className="offcanvas-header">
                                        <button
                                            type="button"
                                            className="btn-close btn-close-white"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                            <li className="nav-item">
                                                <Link
                                                    to="/"
                                                    className="nav-link"
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link
                                                    to="/about-us"
                                                    className="nav-link"
                                                >
                                                    About Us
                                                </Link>
                                                <span
                                                    onClick={this.toggleSidenav.bind(
                                                        this
                                                    )}
                                                >
                                                    Test
                                                </span>
                                                {/* <ul className="dropdown-menu">
                                                    <li>
                                                        <Link
                                                            className="dropdown-item"
                                                            to="/group-of-companies"
                                                        >
                                                            Group of companies
                                                        </Link>
                                                    </li>
                                                </ul> */}
                                                <ul
                                                    className={`dropdown-menu ${this.state.showHideSidenav}`}
                                                >
                                                    <li>
                                                        <Link
                                                            className="dropdown-item"
                                                            to="/group-of-companies"
                                                        >
                                                            Group of companies
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/portfolio"
                                                    className="nav-link"
                                                >
                                                    Portfolio
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/service"
                                                    className="nav-link"
                                                >
                                                    Services
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/testimonial"
                                                    className="nav-link"
                                                >
                                                    Testimonials
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/career"
                                                    className="nav-link"
                                                >
                                                    Careers
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/faq"
                                                    className="nav-link"
                                                >
                                                    FAQ
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/blog"
                                                    className="nav-link"
                                                >
                                                    Blogs
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="/contact-us"
                                                    className="nav-link"
                                                >
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}
