import React, { Component } from "react";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import axios from "axios";
import Url from "./../../configure.js";

class Inquiry extends Component {
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
        axios.get(Url.baseUrl + "api/get-inquiry").then((response) => {
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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Message</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.list.map((data, i) => (
                                <tr key={data.id}>
                                    <td>{i + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Inquiry;
