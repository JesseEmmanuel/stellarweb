import { useState, useEffect, useRef } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
function DirectReferralData() {

    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [referrals, setReferrals] = useState([])
    const dataFetchedRef = useRef(false);

    const getReferrals = async () => {
        const referrals = await axios.get(`${process.env.REACT_APP_API_URL}/view-direct-referrals/${id}`)
        setReferrals(referrals.data.referrals)
        setUser(referrals.data.userInfo)
    }

    useEffect(() => {
        if(dataFetchedRef.current) 
        {
            return;
        }
        dataFetchedRef.current = true;
        getReferrals();
    })

return (
<div className="content-wrapper">
    <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
            <div className="d-flex justify-content-center">
            <h3 className="pb-1 mb-4">Startup Savings</h3>
            </div>
            <div className="row mb-0 d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="card-img card-img-left rounded-circle my-2 mx-2"
                                    src={process.env.PUBLIC_URL+ "/assets/img/profile.png" } alt="" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h6 className="card-title">Name: <span className="badge bg-warning">
                                            {user.firstName} {user.middleName} {user.lastName}
                                        </span></h6>
                                    <h6 className="card-title">Activation Code: <span className="badge bg-info">
                                            {user.activationCode}
                                        </span></h6>
                                    <p className="card-text"><small className="text-muted"></small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-6 g-4 mb-5">
               {referrals.map((user) => {
                    return (
                    <div className="col" key={user.id}>
                        <div className="card h-100">
                            <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/profile.png" }
                                alt=""/>
                            <div className="card-body">
                                <div className="d-flex justify-content-center mb-2">
                                    <img src={process.env.PUBLIC_URL+ "/assets/img/activestar-v2.png" } alt=""
                                        className="w-px-40 h-auto rounded-circle" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <span className="badge bg-warning">
                                        {user.firstName}, {user.lastName} <br />
                                    </span>
                                </div>
                                <br />
                                <div className="d-flex justify-content-center">
                                    <span className="badge bg-secondary">
                                        <Link to={`/DirectReferrals/${user.id}/view`} className="text-white"> <i class='mb-1 bx bx-show-alt'></i> View </Link> <br />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
               })}
            </div>
        </div>
    </div>
</div>)
}

export default DirectReferralData