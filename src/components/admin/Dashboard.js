import React, { Component } from "react";
import { Navigate } from "react-router-dom";
class Dashboard extends Component {
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
        //const user = JSON.parse(localStorage.getItem("userData"));
        const { navigate } = this.state;
        if (navigate) {
            return <Navigate to="/admin" push={true} />;
        }
        return (
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h2>Welcome To Dashboard</h2>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Dashboard;
