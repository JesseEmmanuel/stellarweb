import React from 'react'
import { Link } from 'react-router-dom'
import { Placeholder } from 'react-bootstrap'

const StartupUserGrid = ({ users, loading }) => {
    if (loading) {
        return(<div className="row row-cols-1 row-cols-md-6 g-4 mb-5">
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
        </div>)
    }
  return (
    <div className="row row-cols-1 row-cols-md-6 g-4 mb-5">
        {users.map((user) => {
                    return (
                    <div className="col" key={user.userID}>
                            <div className="card h-100" id="card-user">
                                <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/profile.png" }
                                    alt=""/>
                                <div className="card-body">
                                    <div className="d-flex justify-content-center">
                                        <span>
                                            <small className='text-secondary'> 
                                                <strong>{user.fullName.slice(0,15)}</strong>
                                            </small>
                                        </span>
                                    </div>
                                        <br />
                                    <div className="d-flex justify-content-center">
                                        <Link to={`/StartupDirectReferrals/${user.userID}/view`}>
                                            <button type="button" class="btn btn-sm btn-warning"><i class='bx bxs-show'></i> View</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>)
            })}
    </div>
  )
}

export default StartupUserGrid