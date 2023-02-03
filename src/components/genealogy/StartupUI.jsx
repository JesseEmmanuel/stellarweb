import { useState, useEffect, useRef } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useAuth } from '../../contexts/Auth';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function StartupUI() {

    const [errors, setErrors] = useState([])
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const { user, token } = useAuth()
    const [users, setUsers] = useState([])
    const dataFetchedRef = useRef(false);

    const [formValues, setFormValues] = useState({
        activationCode:"",
        firstName: "",
        middleName: "",
        lastName: "",
        date_of_birth: "",
        contactInfo: "",
        email: ""
    })

    const getUsers = async () => {
            const apiUsers = await axios.get(`${process.env.REACT_APP_API_URL}/view`, {
                headers: {
                    'Authorization' : `Bearer ${token}`,
                }
            })  
            setUsers(apiUsers.data.referrals)
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value });
    }

    const addUser = async (e) => {
        e.preventDefault();
        try{
            await axios.post(`${process.env.REACT_APP_API_URL}/addUser`, formValues, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            getUsers();
            toast.success("User Added Successfully");
            handleClose();
            setErrors([]);
        }
        catch(e) {
            if(e.response.status === 400){
                setErrors(e.response.data.errors);
                // toast.error(e.response.data.message);
            }
            if(e.response.status === 401){
                toast.error(e.response.data.message);
                handleClose();
            }
            if(e.response.status === 402){
                toast.error(e.response.data.message);
                handleClose();
            }
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
<div className="content-wrapper">
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
                                    <h6 className="card-title">Name: <span className="badge bg-warning">
                                            {user.firstName} {user.middleName} {user.lastName}
                                        </span></h6>
                                    <h6 className="card-title">Activation Code: <span className="badge bg-info">
                                            {user.activationCode}
                                        </span></h6>
                                    <p className="card-text"><small className="text-muted"></small>
                                    </p>
                                    <div className="p-2 bd-highlight">
                                        <Button className='btn btn-secondary' onClick={handleShow}>
                                            <i className='bx bxs-plus-circle'></i> Add User
                                        </Button>
                                    </div>
                                    {/* <h6 className="card-title mb-0"> <small>Note:</small></h6>
                                    <p className="card-text"> <small> -Startup up to 4rth level <br />-Great Savings up
                                            to 5th level</small>

                                    </p> */}
                                </div>
                                <ToastContainer position='top-center' hideProgressBar='true'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-6 g-4 mb-5">
               {users.map((user) => {
                    return (
                    <div className="col" key={user.id}>
                        <div className="card h-100">
                            <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/profile.png" }
                                alt=""/>
                            <div className="card-body">
                                <div className="d-flex justify-content-center mb-2">
                                    <img src={process.env.PUBLIC_URL+ "/assets/img/activestar-v2.png" } alt=""
                                        className="w-px-40 h-auto rounded-circle" />
                                </div>
                                <div className="d-flex justify-content-center">
                                        <span className="badge bg-warning">
                                            {user.firstName}, {user.lastName} <br />
                                        </span>
                                </div>
                                    <br />
                                <div className="d-flex justify-content-center">
                                    <span className="badge bg-secondary">
                                        <Link to={`/DirectReferrals/${user.id}/view`} className="text-white"> <i class='mb-1 bx bx-show-alt'></i> View </Link> <br />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
               })}
               {/* {users.map((user, index) => {
                    <User key={index} user={user}></User>
               })} */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={addUser} id='formAuthentication' className='mb-3'>
                            <div className="mb-3">
                                <Form.Control 
                                    name="activationCode" 
                                    value={formValues["name"]}
                                    onChange={onChange} 
                                    type='number' id='activeCode' className='form-control'
                                    placeholder='Activation Code'>
                                </Form.Control>
                                <span className='text-sm text-danger'>{errors.activationCode}</span>
                            </div>
                            <div className="mb-3">
                                <Form.Control name="firstName" 
                                    value={formValues["firstName"]}
                                    onChange={onChange} 
                                    type='text' id='firstName' className='form-control'
                                    placeholder='First Name'>
                                </Form.Control>
                                <span className='text-sm text-danger'>{errors.firstName}</span>
                            </div>
                            <div className="mb-3">
                                <Form.Control 
                                    name="middleName" 
                                    value={formValues["middleName"]}
                                    onChange={onChange} 
                                    type='text' id='middleName' className='form-control'
                                    placeholder='Middle Name'>
                                </Form.Control>
                                <span className='text-sm text-danger'>{errors.middleName}</span>
                            </div>
                            <div className="mb-3">
                                <Form.Control 
                                    name="lastName" 
                                    value={formValues["lastName"]}
                                    onChange={onChange} 
                                    type='text' id='lastName' className='form-control'
                                    placeholder='Last Name'>
                                </Form.Control>
                                <span className='text-sm text-danger'>{errors.lastName}</span>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Date Of Birth</label>
                                <Form.Control 
                                    name="date_of_birth"
                                    value={formValues["date_of_birth"]}
                                    onChange={onChange} 
                                    type='date' id='username' className='form-control'
                                    placeholder='birth date'>
                                </Form.Control>
                                <span className='text-sm text-danger'>{errors.date_of_birth}</span>
                            </div>
                            <div className="mb-3">
                                <Form.Control name="contactInfo" 
                                    value={formValues["contactInfo"]}
                                    onChange={onChange} 
                                    type='number' id='username' className='form-control'
                                    placeholder='Contact Info'>
                                </Form.Control>
                                <span className='text-sm text-danger'>{errors.contactInfo}</span>
                            </div>
                            <div className="mb-3">
                                <Form.Control 
                                    name="email" 
                                    value={formValues["email"]}
                                    onChange={onChange} 
                                    type='email' id='username' className='form-control'
                                    placeholder='Email Address'>
                                </Form.Control>
                                <span className='text-sm text-danger'>{errors.email}</span>
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
            </div>
        </div>
    </div>
</div>)
}

export default StartupUI