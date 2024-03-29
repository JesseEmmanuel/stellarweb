import React from 'react'
import { Link } from 'react-router-dom'
import { Placeholder, Card } from 'react-bootstrap'

const GreatSaveUserGrid = ({ users, message, valid, loading }) => {
    if (loading) {
        return(
        <div className='row'>
            <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                <div className="col-md">
                    <div className="card mb-3" id='gs-profile'>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="card-img card-img-left" id='gs-avatar' src="../assets/img/gs_avatar_v1.png" height={"100%"} alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id='gs-card'>
                                <Placeholder xs={8} />
                                <Placeholder xs={8} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card mb-3" id='gs-profile'>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="card-img card-img-left" id='gs-avatar' src="../assets/img/gs_avatar_v1.png" height={"100%"} alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id='gs-card'>
                                <Placeholder xs={8} />
                                <Placeholder xs={8} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card mb-3" id='gs-profile'>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="card-img card-img-left" id='gs-avatar' src="../assets/img/gs_avatar_v1.png" height={"100%"} alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id='gs-card'>
                                <Placeholder xs={8} />
                                <Placeholder xs={8} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card mb-3" id='gs-profile'>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="card-img card-img-left" id='gs-avatar' src="../assets/img/gs_avatar_v1.png" height={"100%"} alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id='gs-card'>
                                <Placeholder xs={8} />
                                <Placeholder xs={8} />
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
                <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                {users.map((user) => {
                return (
                    <div className="col-md" key={user.userID}>
                        <Link to={`/GreatSaveDirectReferrals/${user.userID}/view`}>
                            <div className="card mb-3" id='gs-profile'>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img className="card-img card-img-left" id='gs-avatar' src="../assets/img/gs_avatar_v1.png" height={"100%"} alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body" id='gs-card'>
                                            <h6 className="card-text mb-0">{user.fullName.slice(0,10)+"..."}</h6>
                                            <p className="card-text">⭐<small className="text-muted">( {user.stars} )</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )})}
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