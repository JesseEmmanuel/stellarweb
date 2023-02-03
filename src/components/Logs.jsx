import { useAuth } from "../contexts/Auth";
import { useState, useEffect, useRef } from "react";
import StartupLogPagination from "./logdata/StartupLogPagination";
import StartupLogData from "./logdata/StartupLogData";
import axios from "axios";

function Logs() {

    const { token } = useAuth()
    const [startupLogs, setStartupLogs] = useState([])
    const dataFetchedRef = useRef(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [rowPerPage] = useState(10);

    const getStartupLogs = async () => {
        const apiStartupLogs = await axios.get(`${process.env.REACT_APP_API_URL}/startupLogs`, {
            headers: {
                'Authorization' : `Bearer ${token}`,
            }
        })
        setStartupLogs(apiStartupLogs.data.logs)
    }

    useEffect(() => {
        if(dataFetchedRef.current) 
        {
            return;
        }
        dataFetchedRef.current = true;
        getStartupLogs();
    });

// Get current Data
    const indexOfLastData = currentPage * rowPerPage;
    const indexOfFirstData = indexOfLastData - rowPerPage;
    const currentData = startupLogs.slice(indexOfFirstData, indexOfLastData);
    // console.log(currentData);

// Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


return (
<div className="content-wrapper">
    <div className="container-xxl flex-grow-1 container-p-y">
        <h5 className="py-3 my-4">Transaction/Logs</h5>

        <div className="row">
            <div className="col-xl-12">
                <div className="nav-align-top mb-4">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <button type="button" className="nav-link active" role="tab" data-bs-toggle="tab"
                                data-bs-target="#startup" aria-controls="navs-top-home" aria-selected="true">
                                Startup Savings
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#great" aria-controls="navs-top-profile"
                                aria-selected="false">
                                Great Savings
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="startup" role="tabpanel">
                            <div className="table-responsive text-nowrap">
                                <table className="table card-table">
                                    <thead>
                                        <tr>
                                            <th>New User</th>
                                            <th>Sponsor</th>
                                            <th>Updated Rebates</th>
                                            <th>Updated Stars</th>
                                            <th>Date/Time</th>
                                        </tr>
                                    </thead>
                                    <StartupLogData startupLogs={currentData} />
                                </table>
                                <StartupLogPagination rowPerPage={rowPerPage} totalRows={startupLogs.length} paginate={paginate} />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="great" role="tabpanel">
                            <div className="table-responsive text-nowrap">
                                <table className="table card-table">
                                    <thead>
                                        <tr>
                                            <th>Date/Time</th>
                                            <th>Name</th>
                                            <th>UserID</th>
                                            <th>Stars Earned</th>
                                            <th>Rebates Earned</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">
                                        <tr>
                                            {/* <td><i className="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>January 1, 2023/2:00PM</strong>
                                            </td>
                                            <td>
                                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/1.png"}
                                                    className="w-px-40 h-auto rounded-circle" alt='' />
                                                Juan DeLa Cruz
                                            </td>
                                            <td>123456789</td>
                                            <td>0</td>
                                            <td>Php 50</td>
                                            <td><span className="badge bg-label-primary me-1">Active</span></td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Logs