import React, { Component } from "react";
import { Button } from "reactstrap";
import { Navigate } from "react-router-dom";
import "./../../assets/plugins/fontawesome-free/css/all.min.css";
import "./../../assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "./../../assets/dist/css/adminlte.min.css";
//import proLoader from './../../assets/dist/img/AdminLTELogo.png'
export default class Header extends Component {
    state = {
        navigate: false,
        isLoggedIn: true,
    };

    componentDidMount() {
        if (localStorage.getItem("isLoggedIn") === null) {
            window.location = "/admin";
        }
    }

    onLogoutHandler = () => {
        localStorage.clear();
        this.setState({
            navigate: true,
        });
    };
    render() {
        const { navigate } = this.state;
        if (navigate) {
            return <Navigate to="/admin" push={true} />;
        }
        return (
            <div>
                <nav className="main-header navbar navbar-expand navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-widget="pushmenu"
                                href={() => false}
                                role="button"
                            >
                                <i className="fas fa-bars"></i>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link"
                                data-toggle="dropdown"
                                href={() => false}
                                aria-expanded="false"
                            >
                                <i className="far fa-user"></i>
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-lg dropdown-menu-right"
                                style={{ left: "inherit", Right: "0px" }}
                            >
                                <div className="dropdown-divider"></div>
                                {/* <a href="{{ url('admin/change-password') }}" className="dropdown-item">Change Password</a> */}
                                <div className="dropdown-divider"></div>
                                <Button
                                    className="dropdown-item"
                                    onClick={this.onLogoutHandler}
                                >
                                    Logout
                                </Button>
                                <div className="dropdown-divider"></div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
