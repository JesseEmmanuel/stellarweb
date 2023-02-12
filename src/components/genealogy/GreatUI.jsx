import { useState, useEffect, useRef } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useAuth } from '../../contexts/Auth';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GreatSaveUserGrid from './GreatSaveUserData/GreatSaveUserGrid';
import "../../App.css"


function GreatUI() {
    const { user, token } = useAuth()
    const [users, setUsers] = useState([])
    const dataFetchedRef = useRef(false);
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState([])
    const [valid, setValid] = useState(false)

    const getUsers = async () => {
        setLoading(true)
        const apiUsers = await axios.get(`${process.env.REACT_APP_API_URL}/viewGreatSave` ,{
            headers: {
                'Authorization' : `Bearer ${token}`,
            }
        })
        // setUsers(apiUsers.data.referrals)
        // console.log(apiUsers.data.referrals)
        // console.log(apiUsers.status)
        if(apiUsers.status === 200)
        {
            if(apiUsers.data.referrals.length === 0)
            {
                setMessage('No Data Available')
                setValid(true)
                setLoading(false)
            }
            else
            {
                setMessage('Your Direct Referrals')
                setUsers(apiUsers.data.referrals)
                setValid(true)
                setLoading(false)
            }
        }
        if(apiUsers.status === 201)
        {
            setMessage(apiUsers.data.message)
            setValid(false)
            setLoading(false)
        }
    }

    useEffect(() => {
        if(dataFetchedRef.current) 
        {
            return;
        }
        dataFetchedRef.current = true;
        getUsers();
    })

return (
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="row">
                <div class="d-flex justify-content-center">
                    <h3 class="pb-1 mb-4">Great Savings</h3>
                </div>
                <div className="row mb-0 d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="card mb-3" style={{backgroundImage:"linear-gradient(to left, #696CFF, #B6B7FF)"}}>
                            <div className="row">
                                <div className="col-md-4">
                                    <img className="card-img card-img-left rounded-circle my-2 mx-2"
                                        src={process.env.PUBLIC_URL+ "/assets/img/avatar.jpg" } alt="" />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <p className="card-title text-white">Name: <strong>
                                                {user.firstName} {user.middleName} {user.lastName}
                                            </strong>
                                        </p>
                                        <p className="card-title text-white">Activation Code: <strong>
                                                {user.activationCode}
                                            </strong></p>
                                        <p className="card-title text-white">Email: <strong>
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
                <GreatSaveUserGrid users={users} message={message} valid={valid} loading={loading} />
            </div>
        </div>
    </div>
    )
}

export default GreatUI