import { motion } from "framer-motion"
import { useAuth } from '../contexts/Auth'
import { Form, Button } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';


const Login = () => {

    const { signIn, formData, onChange, error } = useAuth()

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
                <ToastContainer position='top-center' hideProgressBar='true' />
                <Form onSubmit={signIn} id='formAuthentication' className='mb-3'>
                    <div className="mb-3">
                        <label for="email" class="form-label">Username</label>
                        <Form.Control name="userName" type='text' id='userName' className='form-control' placeholder='Username'
                            onChange={onChange} value={formData["userName"]} >
                        </Form.Control>
                        <span className='text-sm text-danger'>{error.userName}</span>
                    </div>
                    <div className="mb-3 form-password-toggle">
                        <div className="d-flex justify-content-between">
                            <label class="form-label" for="password">Password</label>
                            <a href="/ForgotPassword">
                                <small>Forgot Password?</small>
                            </a>
                        </div>
                        <div className="input-group input-group-merge">
                            <Form.Control name="password" type="password" id="password" className='form-control' 
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" 
                            onChange={onChange} value={formData["password"]}>
                            </Form.Control>
                            <span className="input-group-text cursor-pointer"></span>
                        </div>
                        <span className='text-sm text-danger'>{error.password}</span>
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