import { useAuth } from "../contexts/Auth";
import { useState, useEffect, useRef } from "react";
// import StartupLogPagination from "./logdata/GenealogyLogPagination";
// import StartupLogData from "./logdata/GenealogyLogData";
import EncashLogData from "./logdata/EncashLogData";
import EncashLogPagination from "./logdata/EncashLogPagination";
import GenealogyLogData from "./logdata/GenealogyLogData";
import GenealogyLogPagination from "./logdata/GenealogyLogPagination";
import axios from "axios";

function Logs() {

    const { token } = useAuth()
    const [userLogs, setUserLogs] = useState([])
    const [encashLogs, setEncashLogs] = useState([])
    const dataFetchedRef = useRef(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [rowPerPage] = useState(10);

    const getUserLogs = async () => {
        const apiStartupLogs = await axios.get(`${process.env.REACT_APP_API_URL}/userLogs`, {
            headers: {
                'Authorization' : `Bearer ${token}`,
            }
        })
        setUserLogs(apiStartupLogs.data.logs)
    }

    const getEncashLogs = async () => {
        const apiEncashLogs = await axios.get(`${process.env.REACT_APP_API_URL}/encashmentLogs`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        setEncashLogs(apiEncashLogs.data.encashmentLogs)
    }

    useEffect(() => {
        if(dataFetchedRef.current) 
        {
            return;
        }
        dataFetchedRef.current = true;
        getUserLogs();
        getEncashLogs();
    });

// Get current Data
    const indexOfLastData = currentPage * rowPerPage;
    const indexOfFirstData = indexOfLastData - rowPerPage;
    const currentUserLogs = userLogs.slice(indexOfFirstData, indexOfLastData);
    const currentEncashLogs = encashLogs.slice(indexOfFirstData, indexOfLastData);
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
                                User Logs
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#great" aria-controls="navs-top-profile"
                                aria-selected="false">
                                Encashment Logs
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="startup" role="tabpanel">
                            <div className="table-responsive text-nowrap">
                                <table className="table card-table">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Updated Rebates</th>
                                            <th>Date/Time</th>
                                        </tr>
                                    </thead>
                                    <GenealogyLogData userLogs={currentUserLogs} />
                                </table>
                                <GenealogyLogPagination rowPerPage={rowPerPage} totalRows={userLogs.length} paginate={paginate} />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="great" role="tabpanel">
                            <div className="table-responsive text-nowrap">
                                <table className="table card-table">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Encashed Amount</th>
                                            <th>Rebate Balance</th>
                                            <th>Claim</th>
                                            <th>Date/Time</th>
                                        </tr>
                                    </thead>
                                    <EncashLogData encashlogs={currentEncashLogs} />
                                </table>
                                <EncashLogPagination rowPerPage={rowPerPage} totalRows={encashLogs.length} paginate={paginate} />
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