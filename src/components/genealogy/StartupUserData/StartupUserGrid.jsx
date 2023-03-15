import React from 'react'
import { Link } from 'react-router-dom'
import { Placeholder } from 'react-bootstrap'

const StartupUserGrid = ({ users, loading }) => {
    if (loading) {
        return(
        <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
            <div className="col">
                <div className="col-md">
                    <div className="card mb-3" id='sa-profile'>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="card-img card-img-left" id='sa-avatar' src="../assets/img/sa_avatar_v4.png" height={"100%"} alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id='sa-card'>
                                    <Placeholder xs={8} />
                                    <Placeholder xs={8} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="col-md">
                    <div className="card mb-3" id='sa-profile'>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="card-img card-img-left" id='sa-avatar' src="../assets/img/sa_avatar_v4.png" height={"100%"} alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id='sa-card'>
                                    <Placeholder xs={8} />
                                    <Placeholder xs={8} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="col-md">
                    <div className="card mb-3" id='sa-profile'>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="card-img card-img-left" id='sa-avatar' src="../assets/img/sa_avatar_v4.png" height={"100%"} alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id='sa-card'>
                                    <Placeholder xs={8} />
                                    <Placeholder xs={8} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="col-md">
                    <div className="card mb-3" id='sa-profile'>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="card-img card-img-left" id='sa-avatar' src="../assets/img/sa_avatar_v4.png" height={"100%"} alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id='sa-card'>
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
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
        {users.map((user) => {
                    return (
                    <div className="col" key={user.userID}>
                        <div className="col-md">
                            <Link to={`/StartupDirectReferrals/${user.userID}/view`}>
                                <div className="card mb-3" id='sa-profile'>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img className="card-img card-img-left" id='sa-avatar' src="../assets/img/sa_avatar_v4.png" height={"100%"} alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body" id='sa-card'>
                                                <h6 className="card-text mb-0">{user.fullName.slice(0,10)+"..."}</h6>
                                                <p className="card-text">⭐<small className="text-muted">( {user.stars} )</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    )
            })}
    </div>
  ) 
}

export default StartupUserGrid