import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import "../App.css";
import { motion } from "framer-motion"

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
<motion.div className="content-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
                                <p className="card-title">Name: <strong>
                                            {user.firstName} {user.middleName} {user.lastName}
                                        </strong>
                                    </p>
                                    <p className="card-title">Activation Code: <strong>
                                            {user.activationCode}
                                        </strong>
                                    </p>
                                    <p className="card-title">Email: <strong>
                                            {user.email}
                                        </strong>
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
                        );
               })}
            </div>
        </div>
    </div>
</motion.div>)
}

export default DirectReferralData