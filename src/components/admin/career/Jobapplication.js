import React, { Component } from "react";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Url from "./../../configure.js";

class Jobapplication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: [],
        };
    }
    componentDidMount() {
        this.fetchData();
        setTimeout(function () {
            $("#example").DataTable({
                pagingType: "full_numbers",
                pageLength: 10,
                processing: true,
            });
        }, 500);
    }
    fetchData = () => {
        axios.get(Url.baseUrl + "api/get-join-team").then((response) => {
            this.setState({
                datalist: response.data.data,
            });
        });
    };

    deleteJoin = async (id) => {
        const isConfirm = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            return result.isConfirmed;
        });

        if (!isConfirm) {
            return;
        }

        await axios
            .delete(Url.baseUrl + `api/delete-job-application/${id}`)
            .then(({ data }) => {
                Swal.fire({
                    icon: "success",
                    text: data.message,
                });
                this.fetchData();
            })
            .catch(({ response: { data } }) => {
                Swal.fire({
                    text: data.message,
                    icon: "error",
                });
            });
    };

    render() {
        return (
            <div className="container-fluid py-4">
                <div className="table-responsive p-0 pb-2">
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
                                <th>Position</th>
                                <th>Resume</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.datalist.map((proData, i) => (
                                <tr key={proData.id}>
                                    <td>{i + 1}</td>
                                    <td>{proData.name}</td>
                                    <td>{proData.email}</td>
                                    <td>{proData.phone}</td>
                                    <td>{proData.position}</td>
                                    <td>
                                        <a
                                            href={
                                                Url.baseUrl +
                                                `/public/uploads/document/${proData.document}`
                                            }
                                            download
                                        >
                                            <i
                                                className="fa fa-download fa-lg"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </td>
                                    <td>
                                        <Button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                this.deleteJoin(proData.id)
                                            }
                                        >
                                            Delete
                                        </Button>
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

export default Jobapplication;
