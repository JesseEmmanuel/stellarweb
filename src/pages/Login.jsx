import { motion } from "framer-motion"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'
import { Form, Button } from 'react-bootstrap'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { signIn } = useAuth()
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signIn(formData)
            navigate('/Dashboard')
          } catch (error) {
            navigate('/')
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
                    <h4 className="mb-2">Welcome to Stellar! ⭐</h4>
                </div>
                <Form onSubmit={handleSubmit} id='formAuthentication' className='mb-3'>
                    <div className="mb-3">
                        <Form.Control type='email' id='email' className='form-control' placeholder='Enter your Email'
                            onChange={(e)=> setFormData({...formData, email:e.target.value})}>
                        </Form.Control>
                    </div>
                    <div className="mb-3 form-password-toggle">
                        <div className="input-group input-group-merge">
                            <Form.Control type="password" id="password" className='form-control' 
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" 
                            onChange={(e)=> setFormData({...formData, password:e.target.value})}>
                            </Form.Control>
                            <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <Button variant='primary' className='btn btnprimary d-grid w-100' type="submit"> Log in </Button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</motion.div>
)
}

export default Login