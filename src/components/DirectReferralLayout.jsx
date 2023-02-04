import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { useParams } from 'react-router';
import "../App.css";
import { motion } from "framer-motion"
import DirectReferralData from './DirectReferralData';

function DirectReferralLayout() {

    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [referrals, setReferrals] = useState([])
    const dataFetchedRef = useRef(false);
    const [loading, setLoading] = useState(false)

    const getReferrals = async () => {
        setLoading(true)
        const referrals = await axios.get(`${process.env.REACT_APP_API_URL}/view-direct-referrals/${id}`)
        setReferrals(referrals.data.referrals)
        setUser(referrals.data.userInfo)
        setLoading(false)
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
            <DirectReferralData referrals={referrals} loading={loading} />
        </div>
    </div>
</motion.div>)
}

export default DirectReferralLayout