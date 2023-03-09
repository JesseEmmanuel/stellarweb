import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { useParams} from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "../../../App.css"
import { motion } from "framer-motion"
import StartupReferralData from './StartupReferralData';

function StartupReferralLayout() {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [referrals, setReferrals] = useState([])
    const dataFetchedRef = useRef(false);
    const [loading, setLoading] = useState(false)

    const getReferrals = async () => {
        setLoading(true)
        const referrals = await axios.get(`${process.env.REACT_APP_API_URL}/view-startup-referrals/${id}`)
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
                <Button onClick={goBack} style={{backgroundColor:"#FFAB00", borderColor:"#FFAB00"}}>
                    &larr; Go Back
                </Button>
            </div>
            <div className="row mb-0 d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card mb-3" id='sa-upline-profile'>
                        <div className="row">
                            <div className="col-md-4" id='sa-upline-avatar-container'>
                                <img className="card-img card-img-left my-2 mx-2" id='sa-upline-avatar'
                                    src={process.env.PUBLIC_URL+ "/assets/img/sa_profile.png" } alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id='sa-upline-card'>
                                    <p className="card-title">Name: <strong>
                                            {user.firstName} {user.middleName} {user.lastName}
                                        </strong>
                                    </p>
                                    <p className="card-title">Username: <strong>
                                            {user.userName}
                                        </strong>
                                    </p>
                                    <p className="card-title">Email: <strong>
                                            {user.email}
                                        </strong>
                                    </p>
                                    {/* <h6 className="card-title mb-0"> <small>Note:</small></h6>
                                    <p className="card-text"> <small> -Startup up to 4rth level <br />-Great Savings up
                                            to 5th level</small>

                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <StartupReferralData referrals={referrals} loading={loading} />
        </div>
    </div>
</motion.div>
  )
}

export default StartupReferralLayout