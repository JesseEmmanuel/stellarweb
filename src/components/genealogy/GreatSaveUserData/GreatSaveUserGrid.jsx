import React from 'react'
import { Link } from 'react-router-dom'
import { Placeholder, Card } from 'react-bootstrap'

const GreatSaveUserGrid = ({ users, message, valid, loading }) => {
    if (loading) {
        return(
        <div className='row'>
            <div className='col-lg-12'>
                <div className="row mb-lg-3">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                            <Placeholder xs={8} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
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
                </div>
            </div>
        </div>
        )
    }
    return valid ? (
        <div className='row'>
            <div className='col-lg-12'>
                <div className='row mb-lg-3'>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                            <i class='bx bx-info-circle mb-1 text-primary'></i> <strong> {message}</strong> 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div> 
                <div className="row row-cols-1 row-cols-md-6 g-4 mb-5">
                {users.map((user) => {
                            return (
                            <div className="col" key={user.id}>
                                <Link to={`/DirectReferrals/${user.id}/view`}>
                                    <div className="card h-100" id="card-user">
                                        <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/profile.png" }
                                            alt=""/>
                                        <div className="card-body">
                                            <div className="d-flex justify-content-center">
                                                    <span>
                                                    <strong className='text-secondary'>  {user.firstName} {user.lastName}</strong> <br />
                                                    </span>
                                            </div>
                                                <br />
                                            <div className="d-flex justify-content-center">
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            )
                        })}
                </div>
            </div>
        </div>
      ) : (
        <div className="row">
            <Card>
                <Card.Body>
                    <Card.Text>
                    <i class='text-danger mb-1 bx bx-info-circle'></i> {message}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GreatSaveUserGrid