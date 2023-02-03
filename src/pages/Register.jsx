import { useState } from 'react'
import { Badge } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'
import { Form, Button } from 'react-bootstrap'

import { motion } from "framer-motion"

const Register = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { register } = useAuth()
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const { error } = await register(formData)

        if(error){
            alert('error signing up')
        }
        else{
            navigate('/Dashboard')
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
                <div className="d-flex justify-content-center mb-3">
                    <h4 className="mb-2">Welcome to Stellar! 👋</h4>
                </div>
                <Form onSubmit={handleSubmit} id='formAuthentication' className='mb-3'>
                    <div className="mb-3">
                        <Form.Control type='email' id='email' className='form-control' placeholder='Enter your Email'
                            onChange={(e)=> setFormData({...formData, email:e.target.value})}>
                        </Form.Control>
                    </div>
                    <div className="mb-3 form-password-toggle">
                        <div className="d-flex justify-content-between">
                            <a href="auth-forgot-password-basic.html">
                                <small>Forgot Password?</small>
                            </a>
                        </div>
                        <div className="input-group input-group-merge">
                            <Form.Control type="password" id="password" className='form-control' onChange={(e)=>
                                setFormData({...formData, password:e.target.value})}>
                            </Form.Control>
                            <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="remember-me" />
                            <label className="form-check-label" for="remember-me"> Remember Me </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <Button variant='primary' className='btn btn-primary d-grid w-100' type="submit">Sign
                            Up</Button>
                    </div>
                </Form>

                <p className="text-center">
                    <span>Already Signed Up?</span>

                    <Badge bg="white" className="text-warning" as={Link} to="/">Login Here</Badge>

                </p>
            </div>
        </div>
    </div>
</motion.div>)

}

export default Register