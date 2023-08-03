import React, { Component } from "react";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Url from "./../../configure.js";

class TermCondition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = () => {
        axios.get(Url.baseUrl + "api/get-term-condition").then((response) => {
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
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.list.map((data, i) => (
                                <tr key={data.id}>
                                    <td>{i + 1}</td>
                                    <td>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: data.description,
                                            }}
                                        ></div>
                                    </td>
                                    <td>
                                        <Link
                                            to={`/admin/term-condition-edit/${data.id}`}
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

export default TermCondition;
