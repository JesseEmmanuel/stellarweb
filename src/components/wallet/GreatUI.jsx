import React from 'react'

function GreatUI() {
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                    <h4 className="pb-1 mb-4">Great Savings Wallet</h4>
                    <div className="col-md-6 col-lg-8 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <ul className="p-0 m-0">
                                    <li className="d-flex mb-4 pb-1">
                                        <div className="avatar flex-shrink-0 me-3">
                                            <img src={process.env.PUBLIC_URL+ "/assets/img/icons/unicons/cc-warning.png"}
                                                alt="User" className="rounded" />
                                        </div>
                                        <div
                                            className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                            <div className="me-2">
                                                <small className="text-muted d-block mb-1">Available</small>
                                                <h6 className="mb-0">Balance</h6>
                                            </div>
                                            <div className="user-progress d-flex align-items-center gap-1">
                                                <span className="text-muted">PHP</span>
                                                <h6 className="mb-0">100,00.00</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 pb-1">
                                        <div className="avatar flex-shrink-0 me-3">
                                            <img src={process.env.PUBLIC_URL+ "/assets/img/icons/unicons/cc-success.png"}
                                                alt="User" className="rounded" />
                                        </div>
                                        <div
                                            className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                            <div className="me-2">
                                                <small className="text-muted d-block mb-1">Amount</small>
                                                <h6 className="mb-0">To Encash</h6>
                                            </div>
                                            <div className="user-progress d-flex align-items-center gap-1">
                                                <span className="text-muted">PHP</span>
                                                <h6 className="mb-0">50,00.00</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 pb-1">
                                        <div className="avatar flex-shrink-0 me-3">
                                            <img src={process.env.PUBLIC_URL+ "/assets/img/icons/unicons/wallet.png"}
                                                alt="User" className="rounded" />
                                        </div>
                                        <div
                                            className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                            <div className="me-2">
                                                <small className="text-muted d-block mb-1">Total</small>
                                                <h6 className="mb-0">Amount</h6>
                                            </div>
                                            <div className="user-progress d-flex align-items-center gap-1">
                                                <span className="text-muted">PHP</span>
                                                <h6 className="mb-0">44,990.00</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <br />
                                    <div className="d-flex flex-row-reverse">
                                        <a className="btn btn-primary" href="#">
                                            <i className='bx bxs-plus-circle'></i> Encash
                                        </a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title text-warning"><strong>NOTE</strong></h5>
                                <p className="card-text">
                                    <i className='bx bxs-info-circle'></i> Wallet is <strong>LOCKED</strong> each cycle
                                    beginning.
                                </p>
                                <p className="card-text">
                                    <i className='bx bxs-info-circle'></i> <strong>AUTO</strong> deducts when funds reach amount
                                    for allocation, then unlocks.
                                </p>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title text-info"><strong>REMINDER</strong></h5>
                                <p className="card-text">
                                    Less <strong>10%</strong> Tax Php 5,000.00
                                </p>
                                <p className="card-text">
                                    Less <strong>Php 100.00</strong> Transaction Fee
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default GreatUI