import React, { Component } from "react";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

import axios from "axios";
import { Link } from "react-router-dom";
import Url from "./../../configure.js";

class Ourlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }
    componentDidMount() {
        this.fetchData();
        setTimeout(function () {
            $("#example").DataTable().destroy();
            $("#example").DataTable({
                pagingType: "full_numbers",
                pageLength: 10,
                processing: true,
                destroy: true,
            });
        }, 1000);
    }
    fetchData = () => {
        axios.get(Url.baseUrl + "api/get-contact").then((response) => {
            this.setState({
                list: response.data.data,
            });
        });
    };

    render() {
        return (
            <div className="container-fluid py-4">
                <div className="table-responsive p-0 pb-2">
                    <div className="search"></div>
                    <table
                        id="example"
                        className="table align-items-center justify-content-center mb-0"
                    >
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Visit Us</th>
                                <th>Mail Id</th>
                                <th>Phone No.</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.list.map((data, i) => (
                                <tr key={data.id}>
                                    <td>{i + 1}</td>
                                    <td>{data.visit_us}</td>
                                    <td>{data.mail_id}</td>
                                    <td>{data.phone_no}</td>
                                    <td>
                                        <Link
                                            to={`/admin/contact-edit/${data.id}`}
                                            className="btn btn-primary btn-sm me-2"
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Ourlist;
