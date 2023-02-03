import { useAuth } from '../contexts/Auth'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import React from 'react'

const DashboardUI = () => {
    const { token } = useAuth();
    const [rebate, setRebate] = useState([]);
    const dataFetchedRef = useRef(false);

    const getRebate = async () => {
        const apiRebate = await axios.get(`${process.env.REACT_APP_API_URL}/totalRebate`, {
            headers:{
               'Authorization':`Bearer ${token}`, 
            }
        })
        setRebate(apiRebate.data.rebate);
    }

    useEffect(() => {
        if(dataFetchedRef.current) 
        {
            return;
        }
        dataFetchedRef.current = true;
        getRebate()
    })
return (
    <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row">
                <div className="col-lg-12 mb-4 order-0">
                    <div className="card">
                        <div className="d-flex align-items-end row">
                            <div className="col-sm-7">
                                <div className="card-body">
                                    <h5 className="card-title text-warning">Good Day Juan! 👋</h5>
                                    <p className="mb-4">
                                        Your Total Stars as of today have reached <span className="fw-bold">20,000
                                            points</span>. Keep up the good
                                        work!
                                    </p>
                                    <a href="/" className="btn btn-sm btn-outline-warning">View Genealogy</a>
                                </div>
                            </div>
                            <div className="col-sm-5 text-center text-sm-left">
                                <div className="card-body pb-0 px-0 px-md-4">
                                    <img src={process.env.PUBLIC_URL
                                        + "/assets/img/illustrations/man-with-laptop-light.png" } height="140"
                                        alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png"
                                        data-app-light-img="illustrations/man-with-laptop-light.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card mb-4"
                        style={{backgroundImage:"linear-gradient(to bottom right, #FFAB00, #FFE368)"}}>
                        <h5 className="card-header text-white"><i className='bx bx-line-chart'></i> Start-Up Savings</h5>
                        <div className="card-body">
                            <h6 className="card-text text-white">
                                Cycle No:1
                            </h6>
                            <p clas="mb-4"><strong className="text-white">Rebate Balance</strong> 
                            </p>
                            <h2>
                            <span
                                className="badge bg-warning">₱ {rebate}.00
                                </span>
                            </h2>

                            <p className="demo-inline-spacing">
                                <a className="btn btn-outline-dark mx-2" href="/"
                                    style={{pointerEvents:"none", borderColor:"white"}}>
                                    <i className='bx bxs-star mb-1 text-white'></i><span className="text-white">10,000
                                        points</span>
                                </a>
                                <a className="btn btn-warning" href="/">
                                    <i className='bx bxs-wallet mb-1'></i> Encash
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card mb-4"
                        style={{backgroundImage:"linear-gradient(to bottom right, #696CFF, #B6B7FF)"}}>
                        <h5 className="card-header text-white"><i className='bx bxs-chevrons-up'></i> Great Savings</h5>
                        <div className="card-body">
                            <h6 className="card-text text-white">
                                Cycle No:1
                            </h6>
                            <p clas="mb-1"><strong className="text-white">Rebate Balance</strong> 
                            </p>
                            <h2>
                                <span
                                    className="badge bg-primary">Working in Progress ...
                                </span>
                            </h2>
                            <p className="demo-inline-spacing">
                                <a className="btn btn-outline-primary mx-2" href="/"
                                    style={{pointerEvents: "none", borderColor:"white"}}>
                                    <i className='bx bxs-star text-white'></i><span className="text-white">Working in Progress ...</span>
                                </a>
                                <a className="btn btn-primary" href="/">
                                    <i className='bx bxs-wallet mb-1'></i> Encash
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
) 
// : ( 
//     <Navigate to="/" replace/>
//  );
}

export default DashboardUI