import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "../../../App.css"
import { motion } from "framer-motion"
import GreatSaveReferralData from './GreatSaveReferralData';

function GreatSaveReferralLayout() {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [referrals, setReferrals] = useState([])
    const dataFetchedRef = useRef(false);
    const [loading, setLoading] = useState(false)

    const getReferrals = async () => {
        setLoading(true)
        const referrals = await axios.get(`${process.env.REACT_APP_API_URL}/view-greatsave-referrals/${id}`)
        setReferrals(referrals.data.referrals)
        setUser(referrals.data.userInfo)
        setLoading(false)
    }

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
      };

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
            <div className="d-flex justify-content-between">
                <Button onClick={goBack}>
                    &larr; Go Back
                </Button>
            </div>
            <div className="row mb-0 d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card mb-3" id='gs-upline-profile'>
                        <div className="row">
                            <div className="col-md-4" id='gs-upline-avatar-container'>
                                <img className="card-img card-img-left my-2 mx-2" id='gs-upline-avatar'
                                    src={process.env.PUBLIC_URL+ "/assets/img/gs_profile.png" } alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id='gs-upline-card'>
                                    <p className="card-title">Name: <strong>
                                            {user.firstName} {user.middleName} {user.lastName}
                                        </strong>
                                    </p>
                                    <p className="card-title">Activation Code:<strong>
                                            {user.activationCode}
                                        </strong>
                                    </p>
                                    <p className="card-title">Email: <strong>
                                            {user.email}
                                        </strong>
                                    </p>
                                    <h6 className="card-title mb-0"> <small>Note:</small></h6>
                                    <p className="card-text"> <small> -Startup up to 4rth level <br />-Great Savings up
                                            to 5th level</small>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GreatSaveReferralData referrals={referrals} loading={loading} />
        </div>
    </div>
</motion.div>
  )
}

export default GreatSaveReferralLayout