import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { Modal, Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useAuth } from '../contexts/Auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProfileContent() {

    const { user, token, updateUser, signOut} = useAuth()
    const [errors, setErrors] = useState([])
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const redirect = useNavigate()

    const [changePassForm, setChagePassForm] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })

    const clearData = () => {
        setChagePassForm({
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        })
    }

    const passwordOnChange = (e) => {
        const { name, value } = e.target;
        setChagePassForm({...changePassForm, [name]: value});
    }

    const chagePassword = async (e) => {
        e.preventDefault();
        try{
            await axios.put(`${process.env.REACT_APP_API_URL}/changePassword`, changePassForm, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            await signOut()
            redirect('/')
            window.location.reload()
        }
        catch(e)
        {
            if(e.response.status === 400)
            {
                setErrors(e.response.data.errors);
            }
            if(e.response.status === 401)
            {
                toast.error(e.response.data.message);
                handleClose();
                clearData();
            }
            if(e.response.status === 402)
            {
                toast.error(e.response.data.message);
                handleClose();
                clearData();
            }
        }
    }

    const [formValues, setFormValues] = useState({
        userName:user.userName,
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
        date_of_birth: user.date_of_birth,
        contactInfo: user.contactInfo,
        email: user.email
    })

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value });
    }

    const updateInfo = async (e) => {
        e.preventDefault();
        try{
            const apiUpdate =  await axios.put(`${process.env.REACT_APP_API_URL}/updateInfo`, formValues, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            updateUser(apiUpdate.data.updateInfo)
            toast.success("Updated Successfully")
        }
        catch(e)
        {
            if(e.response.status === 400)
            {
                toast.info(e.response.date.message)
            }
        }
    }

return (
    <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
            {/* <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Account Settings /</span> Account</h4> */}
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-4">
                        <div className='d-flex justify-content-between'>
                            <h5 className="card-header">Manage Account Details</h5>
                            <h5 className="card-header mt-0">Activation Code: <strong>{user.activationCode}</strong> </h5>
                        </div>
                        {/* <div className="card-body">
                            <div className="d-flex align-items-start align-items-sm-center gap-4">
                                <img src={process.env.PUBLIC_URL + "/assets/img/avatars/1.png"}
                                    alt="user-avatar" className="d-block rounded" height="100" width="100"
                                    id="uploadedAvatar" />
                                <div className="button-wrapper">
                                    <label for="upload" className="btn btn-primary me-2 mb-4" tabindex="0">
                                        <span className="d-none d-sm-block">Upload new photo</span>
                                        <i className="bx bx-upload d-block d-sm-none"></i>
                                        <input type="file" id="upload" className="account-file-input" hidden
                                            accept="image/png, image/jpeg" />
                                    </label>
                                    <button type="button" className="btn btn-outline-secondary account-image-reset mb-4">
                                        <i className="bx bx-reset d-block d-sm-none"></i>
                                        <span className="d-none d-sm-block">Reset</span>
                                    </button>

                                    <p className="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                                </div>
                            </div>
                        </div> */}
                        <ToastContainer position='top-center' hideProgressBar='true'/>
                        <hr className="my-0" />
                        <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Change Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={chagePassword} id='formAuthentication' className='mb-3'>
                            <div className="mb-3">
                                <Form.Control 
                                    name="oldPassword" 
                                    value={changePassForm["oldPassword"]}
                                    onChange={passwordOnChange} 
                                    type='text' id='oldPassword' className='form-control'
                                    placeholder='Old Password'>
                                </Form.Control>
                                <span className='text-sm text-danger'>{errors.oldPassword}</span>
                            </div>
                            <div className="mb-3">
                                <Form.Control name="newPassword" 
                                    value={changePassForm["newPassword"]}
                                    onChange={passwordOnChange} 
                                    type='password' id='newPassword' className='form-control'
                                    placeholder='New Password'>
                                </Form.Control>
                                <span className='text-sm text-danger'>{errors.newPassword}</span>
                            </div>
                            <div className="mb-3">
                                <Form.Control 
                                    name="confirmPassword" 
                                    value={changePassForm["confirmPassword"]}
                                    onChange={passwordOnChange} 
                                    type='password' id='confirmPassword' className='form-control'
                                    placeholder='Confirm Password'>
                                </Form.Control>
                                <span className='text-sm text-danger'>{errors.confirmPassword}</span>
                            </div>
                            <Button className='mx-1' variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button className='mx-1' variant="primary" type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
                        <div className="card-body">
                            <Form onSubmit={updateInfo} id="formAccountSettings">
                                <div className="row">
                                    <div className="mb-3 col-md-6">
                                        <label for="firstName" className="form-label">Username</label>
                                        <input className="form-control" type="text" id="userName" name="userName"
                                            placeholder={user.userName} value={formValues["userName"]} onChange={onChange} autofocus />
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label for="lastName" className="form-label">First Name</label>
                                        <input className="form-control" type="text" name="firstName" id="firstName"
                                            placeholder={user.firstName} value={formValues["firstName"]} onChange={onChange} />
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label for="email" className="form-label">Middle Name</label>
                                        <input className="form-control" type="text" id="middleName" name="middleName"
                                            placeholder={user.middleName} value={formValues["middleName"]} onChange={onChange} />
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label for="email" className="form-label">Last Name</label>
                                        <input className="form-control" type="text" id="lastName" name="lastName"
                                            placeholder={user.lastName} value={formValues["lastName"]} onChange={onChange} />
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label for="email" className="form-label">Date of birth</label>
                                        <input className="form-control" type="date" id="date_of_birth" name="date_of_birth"
                                            placeholder={user.date_of_birth} value={formValues["date_of_birth"]} onChange={onChange} />
                                    </div>
                                    <div className="mb-3 col-md-6">
                                        <label for="organization" className="form-label">Contact Information (Number)</label>
                                        <input type="number" className="form-control" id="contactInfo" name="contactInfo"
                                            placeholder={user.contactInfo} value={formValues["contactInfo"]} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <Button variant="primary" className="me-2 my-2" type='submit'>
                                        Save Changes
                                    </Button>
                                    <button type="button" onClick={handleShow} className="btn btn-warning">Change Password</button>
                                    {/* <button type="reset" className="btn btn-outline-secondary">Cancel</button> */}
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProfileContent