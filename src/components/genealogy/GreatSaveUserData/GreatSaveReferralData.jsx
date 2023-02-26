import React from 'react'
import { Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";


const GreatSaveReferralData = ({referrals, loading}) => {
    if(loading) {
        return(
            <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                <div className="col-md">
                    <div className="card mb-3" id='gs-profile'>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="card-img card-img-left" id='gs-avatar' src={process.env.PUBLIC_URL+ "/assets/img/gs_avatar_v1.png"} height={"100%"} alt="" />
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
                                <img className="card-img card-img-left" id='gs-avatar' src={process.env.PUBLIC_URL+ "/assets/img/gs_avatar_v1.png"} height={"100%"} alt="" />
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
                                <img className="card-img card-img-left" id='gs-avatar' src={process.env.PUBLIC_URL+ "/assets/img/gs_avatar_v1.png"} height={"100%"} alt="" />
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
                                <img className="card-img card-img-left" id='gs-avatar' src={process.env.PUBLIC_URL+ "/assets/img/gs_avatar_v1.png"} height={"100%"} alt="" />
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
        )
    }
    return (<div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
               {referrals.map((user) => {
                return (
                    <div className="col" key={user.userID}>
                        <div className="col-md">
                            <Link to={`/GreatSaveDirectReferrals/${user.userID}/view`}>
                                <div className="card mb-3" id='gs-profile'>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img className="card-img card-img-left" id='gs-avatar' src={process.env.PUBLIC_URL+ "/assets/img/gs_avatar_v1.png"} height={"100%"} alt="" />
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
                    </div>
                    );
               })}
            </div>
        )
}

export default GreatSaveReferralData