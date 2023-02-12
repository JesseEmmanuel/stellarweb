import React from 'react'
import { Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";


const StartupReferralData = ({referrals, loading}) => {
    if(loading) {
        return(
            <div className="row row-cols-1 row-cols-md-6 g-4 mb-5">
                <div className="col">
                    <div className="card h-100">
                        <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/profile.png" }
                            alt=""/>
                        <div className="card-body">
                            <div className="d-flex justify-content-center">
                                <Placeholder xs={8} />
                            </div>
                                <br />
                            <div className="d-flex justify-content-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/profile.png" }
                            alt=""/>
                        <div className="card-body">
                            <div className="d-flex justify-content-center">
                                <Placeholder xs={8} />
                            </div>
                                <br />
                            <div className="d-flex justify-content-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/profile.png" }
                            alt=""/>
                        <div className="card-body">
                            <div className="d-flex justify-content-center">
                                <Placeholder xs={8} />
                            </div>
                                <br />
                            <div className="d-flex justify-content-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/profile.png" }
                            alt=""/>
                        <div className="card-body">
                            <div className="d-flex justify-content-center">
                                <Placeholder xs={8} />
                            </div>
                                <br />
                            <div className="d-flex justify-content-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/profile.png" }
                            alt=""/>
                        <div className="card-body">
                            <div className="d-flex justify-content-center">
                                <Placeholder xs={8} />
                            </div>
                                <br />
                            <div className="d-flex justify-content-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/profile.png" }
                            alt=""/>
                        <div className="card-body">
                            <div className="d-flex justify-content-center">
                                <Placeholder xs={8} />
                            </div>
                                <br />
                            <div className="d-flex justify-content-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/profile.png" }
                            alt=""/>
                        <div className="card-body">
                            <div className="d-flex justify-content-center">
                                <Placeholder xs={8} />
                            </div>
                                <br />
                            <div className="d-flex justify-content-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (<div className="row row-cols-1 row-cols-md-6 g-4 mb-5">
               {referrals.map((user) => {
                return (
                    <div className="col" key={user.id}>
                        <Link to={`/DirectReferrals/${user.id}/view`}>
                            <div className="card h-100" id="card-user">
                                <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/profile.png" }
                                    alt=""/>
                                <div className="card-body">
                                    {/* <div className="d-flex justify-content-center mb-2">
                                        <img src={process.env.PUBLIC_URL+ "/assets/img/activestar-v2.png" } alt=""
                                            className="w-px-40 h-auto rounded-circle" />
                                    </div> */}
                                    <div className="d-flex justify-content-center">
                                            <span>
                                            <small className='text-secondary'> <strong>{user.firstName} {user.lastName}</strong></small>
                                            </span>
                                    </div>
                                        <br />
                                    <div className="d-flex justify-content-center">
                                        <Link to={`/StartupDirectReferrals/${user.id}/view`}>
                                            <button type="button" class="btn btn-sm btn-warning"><i class='bx bxs-show'></i> View</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    );
               })}
            </div>
        )
}

export default StartupReferralData