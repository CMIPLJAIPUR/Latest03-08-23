import React from "react";
import Logomig from "./../../assets/dist/img/AdminLTELogo.png";
import Userimg from "./../../assets/dist/img/user2-160x160.jpg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Sidebar() {
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href={() => false} className="brand-link">
                    <img
                        src={Logomig}
                        alt="CMIPL"
                        className="brand-image img-circle elevation-3"
                        style={{ opacity: ".8" }}
                    />
                    <span className="brand-text font-weight-light">CMIPL</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img
                                src={Userimg}
                                className="img-circle elevation-2"
                                alt="User"
                            />
                        </div>
                        <div className="info">
                            <a href={() => false} className="d-block">
                                Admin
                            </a>
                        </div>
                    </div>
                    <div className="form-inline">
                        <div
                            className="input-group"
                            data-widget="sidebar-search"
                        >
                            <input
                                className="form-control form-control-sidebar"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            <li
                                className={
                                    splitLocation[2] === "dashboard"
                                        ? "active nav-item menu-open"
                                        : "nav-item menu-open"
                                }
                            >
                                <Link
                                    to="/admin/dashboard"
                                    className="nav-link nav-link-sel"
                                >
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>Dashboard</p>
                                </Link>
                            </li>
                            <li
                                className={
                                    splitLocation[2] === "sliderlist" ||
                                    splitLocation[2] === "addslider" ||
                                    splitLocation[2] === "editslider" ||
                                    splitLocation[2] === "fsliderlist" ||
                                    splitLocation[2] === "faddslider" ||
                                    splitLocation[2] === "feditslider" ||
                                    splitLocation[2] === "tsliderlist" ||
                                    splitLocation[2] === "taddslider" ||
                                    splitLocation[2] === "teditslider" ||
                                    splitLocation[2] === "tmsliderlist" ||
                                    splitLocation[2] === "tmaddslider" ||
                                    splitLocation[2] === "tmeditslider" ||
                                    splitLocation[2] === "ourlist" ||
                                    splitLocation[2] === "ouredit" ||
                                    splitLocation[2] === "df-list" ||
                                    splitLocation[2] === "df-edit" ||
                                    splitLocation[2] === "skill-list" ||
                                    splitLocation[2] === "skill-add" ||
                                    splitLocation[2] === "skill-edit"
                                        ? "nav-item menu-is-opening menu-open"
                                        : "nav-item"
                                }
                            >
                                <a
                                    href={() => false}
                                    className={
                                        splitLocation[2] === "sliderlist" ||
                                        splitLocation[2] === "addslider" ||
                                        splitLocation[2] === "editslider" ||
                                        splitLocation[2] === "fsliderlist" ||
                                        splitLocation[2] === "faddslider" ||
                                        splitLocation[2] === "feditslider" ||
                                        splitLocation[2] === "tsliderlist" ||
                                        splitLocation[2] === "taddslider" ||
                                        splitLocation[2] === "teditslider" ||
                                        splitLocation[2] === "tmsliderlist" ||
                                        splitLocation[2] === "tmaddslider" ||
                                        splitLocation[2] === "tmeditslider" ||
                                        splitLocation[2] === "ourlist" ||
                                        splitLocation[2] === "ouredit" ||
                                        splitLocation[2] === "df-list" ||
                                        splitLocation[2] === "df-edit" ||
                                        splitLocation[2] === "skill-list" ||
                                        splitLocation[2] === "skill-add" ||
                                        splitLocation[2] === "skill-edit"
                                            ? "active nav-link nav-link-sel"
                                            : "nav-link nav-link-sel"
                                    }
                                >
                                    <i className="nav-icon fas fa-home"></i>
                                    <p>
                                        Home
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul
                                    className="nav nav-treeviewss"
                                    style={
                                        splitLocation[2] === "sliderlist" ||
                                        splitLocation[2] === "addslider" ||
                                        splitLocation[2] === "editslider" ||
                                        splitLocation[2] === "fsliderlist" ||
                                        splitLocation[2] === "faddslider" ||
                                        splitLocation[2] === "feditslider" ||
                                        splitLocation[2] === "tsliderlist" ||
                                        splitLocation[2] === "taddslider" ||
                                        splitLocation[2] === "teditslider" ||
                                        splitLocation[2] === "tmsliderlist" ||
                                        splitLocation[2] === "tmaddslider" ||
                                        splitLocation[2] === "tmeditslider" ||
                                        splitLocation[2] === "ourlist" ||
                                        splitLocation[2] === "ouredit" ||
                                        splitLocation[2] === "df-list" ||
                                        splitLocation[2] === "df-edit" ||
                                        splitLocation[2] === "skill-list" ||
                                        splitLocation[2] === "skill-add" ||
                                        splitLocation[2] === "skill-edit"
                                            ? { display: "block" }
                                            : { display: "none" }
                                    }
                                >
                                    <li
                                        className={
                                            splitLocation[2] === "sliderlist" ||
                                            splitLocation[2] === "addslider" ||
                                            splitLocation[2] === "editslider"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/sliderlist"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Slider</p>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            splitLocation[2] ===
                                                "fsliderlist" ||
                                            splitLocation[2] === "faddslider" ||
                                            splitLocation[2] === "feditslider"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/fsliderlist"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Feature Slider</p>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            splitLocation[2] ===
                                                "tsliderlist" ||
                                            splitLocation[2] === "taddslider" ||
                                            splitLocation[2] === "teditslider"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/tsliderlist"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Technology Slider</p>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            splitLocation[2] ===
                                                "tmsliderlist" ||
                                            splitLocation[2] ===
                                                "tmaddslider" ||
                                            splitLocation[2] === "tmeditslider"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/tmsliderlist"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Testimonial Slider</p>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            splitLocation[2] === "ourlist" ||
                                            splitLocation[2] === "ouredit"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/ourlist"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Statistics</p>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            splitLocation[2] === "df-list" ||
                                            splitLocation[2] === "df-edit"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/df-list"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Different From</p>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            splitLocation[2] === "skill-list" ||
                                            splitLocation[2] === "skill-add" ||
                                            splitLocation[2] === "skill-edit"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/skill-list"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Skill Master</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li
                                className={
                                    splitLocation[2] === "abouttab-list" ||
                                    splitLocation[2] === "abouttab-add" ||
                                    splitLocation[2] === "abouttab-edit" ||
                                    splitLocation[2] === "proservice-list" ||
                                    splitLocation[2] === "proservice-add" ||
                                    splitLocation[2] === "proservice-edit" ||
                                    splitLocation[2] === "category-list" ||
                                    splitLocation[2] === "category-add" ||
                                    splitLocation[2] === "category-edit" ||
                                    splitLocation[2] === "asome-list" ||
                                    splitLocation[2] === "asome-edit" ||
                                    splitLocation[2] === "asome-add" ||
                                    splitLocation[2] === "trans-list" ||
                                    splitLocation[2] === "trans-edit"
                                        ? "nav-item menu-is-opening menu-open"
                                        : "nav-item"
                                }
                            >
                                <a
                                    href={() => false}
                                    className={
                                        splitLocation[2] === "abouttab-list" ||
                                        splitLocation[2] === "abouttab-add" ||
                                        splitLocation[2] === "abouttab-edit" ||
                                        splitLocation[2] ===
                                            "proservice-list" ||
                                        splitLocation[2] === "proservice-add" ||
                                        splitLocation[2] ===
                                            "proservice-edit" ||
                                        splitLocation[2] === "category-list" ||
                                        splitLocation[2] === "category-add" ||
                                        splitLocation[2] === "category-edit" ||
                                        splitLocation[2] === "asome-list" ||
                                        splitLocation[2] === "asome-edit" ||
                                        splitLocation[2] === "asome-add" ||
                                        splitLocation[2] === "trans-list" ||
                                        splitLocation[2] === "trans-edit"
                                            ? "active nav-link nav-link-sel"
                                            : "nav-link nav-link-sel"
                                    }
                                >
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        About
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul
                                    className="nav ss"
                                    style={
                                        splitLocation[2] === "abouttab-list" ||
                                        splitLocation[2] === "abouttab-add" ||
                                        splitLocation[2] === "abouttab-edit" ||
                                        splitLocation[2] ===
                                            "proservice-list" ||
                                        splitLocation[2] === "proservice-add" ||
                                        splitLocation[2] ===
                                            "proservice-edit" ||
                                        splitLocation[2] === "category-list" ||
                                        splitLocation[2] === "category-add" ||
                                        splitLocation[2] === "category-edit" ||
                                        splitLocation[2] === "asome-list" ||
                                        splitLocation[2] === "asome-edit" ||
                                        splitLocation[2] === "asome-add" ||
                                        splitLocation[2] === "trans-list" ||
                                        splitLocation[2] === "trans-edit"
                                            ? { display: "block" }
                                            : { display: "none" }
                                    }
                                >
                                    <li
                                        className={
                                            splitLocation[2] ===
                                                "abouttab-list" ||
                                            splitLocation[2] ===
                                                "abouttab-add" ||
                                            splitLocation[2] === "abouttab-edit"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/abouttab-list"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>About Tab List</p>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            splitLocation[2] === "asome-list" ||
                                            splitLocation[2] === "asome-add" ||
                                            splitLocation[2] === "asome-edit"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/asome-list"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Awesome services</p>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            splitLocation[2] ===
                                                "proservice-list" ||
                                            splitLocation[2] ===
                                                "proservice-add" ||
                                            splitLocation[2] ===
                                                "proservice-edit"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/proservice-list"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Professional Service</p>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            splitLocation[2] === "trans-list" ||
                                            splitLocation[2] === "trans-edit"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/trans-list"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Transforming About</p>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            splitLocation[2] ===
                                                "category-list" ||
                                            splitLocation[2] ===
                                                "category-add" ||
                                            splitLocation[2] === "category-edit"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/category-list"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Category List</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li
                                className={
                                    splitLocation[2] === "psliderlist" ||
                                    splitLocation[2] === "paddslider" ||
                                    splitLocation[2] === "peditslider" ||
                                    splitLocation[2] === "portfoliodt-list" ||
                                    splitLocation[2] === "portfoliodt-add" ||
                                    splitLocation[2] === "portfoliodt-edit"
                                        ? "nav-item menu-is-opening menu-open"
                                        : "nav-item"
                                }
                            >
                                <a
                                    href={() => false}
                                    className={
                                        splitLocation[2] === "psliderlist" ||
                                        splitLocation[2] === "paddslider" ||
                                        splitLocation[2] === "peditslider" ||
                                        splitLocation[2] ===
                                            "portfoliodt-list" ||
                                        splitLocation[2] ===
                                            "portfoliodt-add" ||
                                        splitLocation[2] === "portfoliodt-edit"
                                            ? "active nav-link nav-link-sel"
                                            : "nav-link nav-link-sel"
                                    }
                                >
                                    <i className="nav-icon far fa-image"></i>
                                    <p>
                                        Portfolio
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul
                                    className="nav nav-treeviewss"
                                    style={
                                        splitLocation[2] === "psliderlist" ||
                                        splitLocation[2] === "paddslider" ||
                                        splitLocation[2] === "peditslider" ||
                                        splitLocation[2] ===
                                            "portfoliodt-list" ||
                                        splitLocation[2] ===
                                            "portfoliodt-add" ||
                                        splitLocation[2] === "portfoliodt-edit"
                                            ? { display: "block" }
                                            : { display: "none" }
                                    }
                                >
                                    <li
                                        className={
                                            splitLocation[2] ===
                                                "psliderlist" ||
                                            splitLocation[2] === "paddslider" ||
                                            splitLocation[2] === "peditslider"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/psliderlist"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Portfolio</p>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            splitLocation[2] ===
                                                "portfoliodt-list" ||
                                            splitLocation[2] ===
                                                "portfoliodt-add" ||
                                            splitLocation[2] ===
                                                "portfoliodt-edit"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/portfoliodt-list"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Portfolio Details</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li
                                className={
                                    splitLocation[2] === "service-list" ||
                                    splitLocation[2] === "service-add" ||
                                    splitLocation[2] === "service-edit" ||
                                    splitLocation[2] === "our-service-list" ||
                                    splitLocation[2] === "our-service-edit" ||
                                    splitLocation[2] === "technology-list" ||
                                    splitLocation[2] === "technology-add" ||
                                    splitLocation[2] === "technology-edit"
                                        ? "nav-item menu-is-opening menu-open"
                                        : "nav-item"
                                }
                            >
                                <a
                                    href={() => false}
                                    className={
                                        splitLocation[2] === "service-list" ||
                                        splitLocation[2] === "service-add" ||
                                        splitLocation[2] === "service-edit" ||
                                        splitLocation[2] ===
                                            "our-service-list" ||
                                        splitLocation[2] ===
                                            "our-service-edit" ||
                                        splitLocation[2] ===
                                            "technology-list" ||
                                        splitLocation[2] === "technology-add" ||
                                        splitLocation[2] === "technology-edit"
                                            ? "active nav-link nav-link-sel"
                                            : "nav-link nav-link-sel"
                                    }
                                >
                                    <i className="nav-icon far fa-image"></i>
                                    <p>
                                        Services
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul
                                    className="nav nav-treeviewss"
                                    style={
                                        splitLocation[2] === "service-list" ||
                                        splitLocation[2] === "service-add" ||
                                        splitLocation[2] === "service-edit" ||
                                        splitLocation[2] ===
                                            "our-service-list" ||
                                        splitLocation[2] ===
                                            "our-service-edit" ||
                                        splitLocation[2] ===
                                            "technology-list" ||
                                        splitLocation[2] === "technology-add" ||
                                        splitLocation[2] === "technology-edit"
                                            ? { display: "block" }
                                            : { display: "none" }
                                    }
                                >
                                    <li
                                        className={
                                            splitLocation[2] ===
                                                "service-list" ||
                                            splitLocation[2] ===
                                                "service-add" ||
                                            splitLocation[2] === "service-edit"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/service-list"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Service</p>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            splitLocation[2] ===
                                                "our-service-list" ||
                                            splitLocation[2] ===
                                                "our-service-edit"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/our-service-list"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Our Service Statistic</p>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            splitLocation[2] ===
                                                "technology-list" ||
                                            splitLocation[2] ===
                                                "technology-add" ||
                                            splitLocation[2] ===
                                                "technology-edit"
                                                ? "active nav-item menu-open"
                                                : "nav-item menu-open"
                                        }
                                    >
                                        <Link
                                            to="/admin/technology-list"
                                            className="nav-link nav-link-sel"
                                        >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Service Technology</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className={
                                    splitLocation[2] === "careerlist" ||
                                    splitLocation[2] === "careeradd" ||
                                    splitLocation[2] === "careeredit"
                                        ? "active nav-item menu-open"
                                        : "nav-item menu-open"
                                }
                            >
                                <Link
                                    to="/admin/careerlist"
                                    className="nav-link nav-link-sel"
                                >
                                    <i className="fa fa-graduation-cap nav-icon"></i>
                                    <p>Careers</p>
                                </Link>
                            </li>
                            <li
                                className={
                                    splitLocation[2] === "job-application"
                                        ? "active nav-item menu-open"
                                        : "nav-item menu-open"
                                }
                            >
                                <Link
                                    to="/admin/job-application"
                                    className="nav-link nav-link-sel"
                                >
                                    <i className="fa fa-graduation-cap nav-icon"></i>
                                    <p>Job Application</p>
                                </Link>
                            </li>
                            <li
                                className={
                                    splitLocation[2] === "company-group-list" ||
                                    splitLocation[2] === "company-group-add" ||
                                    splitLocation[2] === "company-group-edit"
                                        ? "active nav-item menu-open"
                                        : "nav-item menu-open"
                                }
                            >
                                <Link
                                    to="/admin/company-group-list"
                                    className="nav-link nav-link-sel"
                                >
                                    <i className="fa fa-graduation-cap nav-icon"></i>
                                    <p> Group of Companies</p>
                                </Link>
                            </li>
                            <li
                                className={
                                    splitLocation[2] === "contact-list" ||
                                    splitLocation[2] === "contact-edit"
                                        ? "active nav-item menu-open"
                                        : "nav-item menu-open"
                                }
                            >
                                <Link
                                    to="/admin/contact-list"
                                    className="nav-link nav-link-sel"
                                >
                                    <i className="far fa-address-book nav-icon"></i>
                                    <p>Contact Settings</p>
                                </Link>
                            </li>
                            <li
                                className={
                                    splitLocation[2] === "inquiry-list"
                                        ? "active nav-item menu-open"
                                        : "nav-item menu-open"
                                }
                            >
                                <Link
                                    to="/admin/inquiry-list"
                                    className="nav-link nav-link-sel"
                                >
                                    <i className="far fa-address-book nav-icon"></i>
                                    <p>Inquiry List</p>
                                </Link>
                            </li>
                            <li
                                className={
                                    splitLocation[2] === "blog-list" ||
                                    splitLocation[2] === "blog-add" ||
                                    splitLocation[2] === "blog-edit"
                                        ? "active nav-item menu-open"
                                        : "nav-item menu-open"
                                }
                            >
                                <Link
                                    to="/admin/blog-list"
                                    className="nav-link nav-link-sel"
                                >
                                    <i className="far fa-address-book nav-icon"></i>
                                    <p>Blogs</p>
                                </Link>
                            </li>

                            <li
                                className={
                                    splitLocation[2] === "blog-comment-list" ||
                                    splitLocation[2] === "blog-comment-edit"
                                        ? "active nav-item menu-open"
                                        : "nav-item menu-open"
                                }
                            >
                                <Link
                                    to="/admin/blog-comment-list"
                                    className="nav-link nav-link-sel"
                                >
                                    <i className="far fa-address-book nav-icon"></i>
                                    <p>Blogs Comment</p>
                                </Link>
                            </li>

                            <li
                                className={
                                    splitLocation[2] === "faq-list"
                                        ? "active nav-item menu-open"
                                        : "nav-item menu-open"
                                }
                            >
                                <Link
                                    to="/admin/faq-list"
                                    className="nav-link nav-link-sel"
                                >
                                    <i className="far fa-address-book nav-icon"></i>
                                    <p>FAQ</p>
                                </Link>
                            </li>
                            <li
                                className={
                                    splitLocation[2] ===
                                        "privacy-policy-list" ||
                                    splitLocation[2] === "privacy-policy-edit"
                                        ? "active nav-item menu-open"
                                        : "nav-item menu-open"
                                }
                            >
                                <Link
                                    to="/admin/privacy-policy-list"
                                    className="nav-link nav-link-sel"
                                >
                                    <i className="fas fa-file nav-icon"></i>
                                    <p>Privacy Policy</p>
                                </Link>
                            </li>
                            <li
                                className={
                                    splitLocation[2] ===
                                        "term-condition-list" ||
                                    splitLocation[2] === "term-condition-edit"
                                        ? "active nav-item menu-open"
                                        : "nav-item menu-open"
                                }
                            >
                                <Link
                                    to="/admin/term-condition-list"
                                    className="nav-link nav-link-sel"
                                >
                                    <i className="fas fa-file nav-icon"></i>
                                    <p>Term & Condition</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* <aside className="main-sidebar sidebar-dark-primary elevation-4">

                <a href="" className="brand-link">
                    <img src={Logomig} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
                    <span className="brand-text font-weight-light">CMIPL</span>
                </a>
                <div className="sidebar">

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={Userimg} className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href={() => false} className="d-block">Admin</a>
                        </div>
                    </div>


                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className={splitLocation[2] === "dashboard" ? "active nav-item menu-open" : "nav-item menu-open"}>
                                <Link to='/admin/dashboard' className="nav-link nav-link-sel">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Dashboard
                                    </p>
                                </Link>
                            </li>
                            <li className={(splitLocation[2] === "sliderlist" || splitLocation[2] === "addslider" || splitLocation[2] === "editslider") ? "active nav-item menu-open" : "nav-item menu-open"}>
                                <Link to='/admin/sliderlist' className="nav-link nav-link-sel">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Slider
                                    </p>
                                </Link>
                            </li>
                            <li className={(splitLocation[2] === "fsliderlist" || splitLocation[2] === "faddslider" || splitLocation[2] === "feditslider") ? "active nav-item menu-open" : "nav-item menu-open"}>
                                <Link to='/admin/fsliderlist' className="nav-link nav-link-sel">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Feature Slider
                                    </p>
                                </Link>
                            </li>
                            <li className={(splitLocation[2] === "psliderlist" || splitLocation[2] === "paddslider" || splitLocation[2] === "peditslider")  ? "active nav-item menu-open" : "nav-item menu-open"}>
                                <Link to='/admin/psliderlist' className="nav-link nav-link-sel">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                    Portfolio
                                    </p>
                                </Link>
                            </li>
                            <li className={(splitLocation[2] === "portfoliodt-list" || splitLocation[2] === "portfoliodt-add" || splitLocation[2] === "portfoliodt-edit")  ? "active nav-item menu-open" : "nav-item menu-open"}>
                                <Link to='/admin/portfoliodt-list' className="nav-link nav-link-sel">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                    Portfolio Details
                                    </p>
                                </Link>
                            </li>
                            <li className={(splitLocation[2] === "tsliderlist" || splitLocation[2] === "taddslider" || splitLocation[2] === "teditslider")  ? "active nav-item menu-open" : "nav-item menu-open"}>
                                <Link to='/admin/tsliderlist' className="nav-link nav-link-sel">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                    Technology Slider
                                    </p>
                                </Link>
                            </li>
                            <li className={(splitLocation[2] === "tmsliderlist" || splitLocation[2] === "tmaddslider" || splitLocation[2] === "tmeditslider")  ? "active nav-item menu-open" : "nav-item menu-open"}>
                                <Link to='/admin/tmsliderlist' className="nav-link nav-link-sel">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                    Testimonial Slider
                                    </p>
                                </Link>
                            </li>
                            <li className={(splitLocation[2] === "ourlist" || splitLocation[2] === "ouredit")  ? "active nav-item menu-open" : "nav-item menu-open"}>
                                <Link to='/admin/ourlist' className="nav-link nav-link-sel">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                    Statistics
                                    </p>
                                </Link>
                            </li>
                            <li className={(splitLocation[2] === "df-list" || splitLocation[2] === "df-edit")  ? "active nav-item menu-open" : "nav-item menu-open"}>
                                <Link to='/admin/df-list' className="nav-link nav-link-sel">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                    Different From
                                    </p>
                                </Link>
                            </li>
                            <li className={(splitLocation[2] === "asome-list" || splitLocation[2] === "asome-edit")  ? "active nav-item menu-open" : "nav-item menu-open"}>
                                <Link to='/admin/asome-list' className="nav-link nav-link-sel">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                    Awesome services
                                    </p>
                                </Link>
                            </li>
                            <li className={(splitLocation[2] === "trans-list" || splitLocation[2] === "trans-edit")  ? "active nav-item menu-open" : "nav-item menu-open"}>
                                <Link to='/admin/trans-list' className="nav-link nav-link-sel">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                    Transforming About
                                    </p>
                                </Link>
                            </li>
                            <li className={(splitLocation[2] === "abouttab-list" || splitLocation[2] === "abouttab-add" || splitLocation[2] === "abouttab-edit")  ? "active nav-item menu-open" : "nav-item menu-open"}>
                                <Link to='/admin/abouttab-list' className="nav-link nav-link-sel">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                    About Tab List
                                    </p>
                                </Link>
                            </li>
                            <li className={(splitLocation[2] === "proservice-list" || splitLocation[2] === "proservice-add" || splitLocation[2] === "proservice-edit")  ? "active nav-item menu-open" : "nav-item menu-open"}>
                                <Link to='/admin/proservice-list' className="nav-link nav-link-sel">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                    Professional Service
                                    </p>
                                </Link>
                            </li>
                            <li className={(splitLocation[2] === "category-list" || splitLocation[2] === "category-add" || splitLocation[2] === "category-edit")  ? "active nav-item menu-open" : "nav-item menu-open"}>
                                <Link to='/admin/category-list' className="nav-link nav-link-sel">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                    Category List
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside> */}
        </>
    );
}
