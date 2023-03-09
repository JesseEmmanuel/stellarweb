import {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function RequestPasswordForm() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        activationCode: "",
        email : ""
    })

    const onchange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const resetPassword = async (e) => {
        e.preventDefault();
        try{
            await axios.put(`${process.env.REACT_APP_API_URL}/forgotPassword`, formValues);
            navigate('/');
        }
        catch (e)
        {
            if(e.response.status === 400){
                toast.error(e.response.data.message);
            }
        }
    }

  return (
    <motion.div className="authentication-wrapper authentication-basic container-p-y" initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}>
    <div className="authentication-inner">
        <div className="card">
            <div className="card-body">
                <div className="app-brand justify-content-center">
                    <a href="index.html" className="app-brand-link gap-2">
                        <span className="app-brand-logo demo">
                            <img src={process.env.PUBLIC_URL + "/assets/img/icons/stellar.png" } alt="" width="180" />
                        </span>
                    </a>
                </div>
                    <h4 className="mb-2">Forgot Password? 🔒</h4>
                    <p className="mb-4">Enter your <strong> Activation Code</strong> and <strong>Email</strong> then we'll send you a new password via email</p>
                <ToastContainer position='top-center' hideProgressBar='true' />
                <Form onSubmit={resetPassword} id='formAuthentication' className='mb-3'>
                    <div className="mb-3">
                        <Form.Control name="activationCode" type='number' id='activationCode' className='form-control' placeholder='Activation Code'
                            value={formValues["activationCode"]}
                            onChange={onchange}>
                        </Form.Control>
                    </div>
                    <div className="mb-3 form-password-toggle">
                        <div className="input-group input-group-merge">
                            <Form.Control name="email" type="email" id="email" className='form-control' 
                                placeholder="Email" 
                                value={formValues["email"]}
                                onChange={onchange}>
                            </Form.Control>
                            <span className="input-group-text cursor-pointer"></span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <Button variant='primary' className='btn btnprimary d-grid w-100' type="submit"> Request New Password </Button>
                    </div>
                </Form>
                <div className="text-center">
                <a href="/" className="d-flex align-items-center justify-content-center">
                  <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                  Back to login
                </a>
              </div>
            </div>
        </div>
    </div>
</motion.div>
  )
}

export default RequestPasswordForm