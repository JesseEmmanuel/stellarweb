import { useAuth } from '../contexts/Auth'
import { useState, useEffect, useRef } from 'react'
import { Modal, Button, Form, Spinner } from 'react-bootstrap'
import axios from 'axios'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashboardUI = () => {
    const { token, user } = useAuth();
    const [greatsaveRebate, setGreatSaveRebate] = useState([]);
    const [greatsaveStars, setGreatSaveStars] = useState([]);
    const [startupRebate, setStartupRebate] = useState([]);
    const [startupStars, setStartupStars] = useState([]);
    const dataFetchedRef = useRef(false);
    const [showStartup, setShowStartup] = useState(false)
    const handleCloseStartup = () => setShowStartup(false)
    const handleShowStartup = () => setShowStartup(true)
    const [showGreatSave, setShowGreatSave] = useState(false)
    const handleCloseGreatSave = () => setShowGreatSave(false)
    const handleShowGreatSave = () => setShowGreatSave(true)
    const [loadingStartUp, setLoadingStartup] = useState(false)
    const [loadingGreatSave, setLoadingGreatSave] = useState(false)

    const [formValues, setFormValues] = useState({
        encash:"",
    })

    const getStartupReports = async () => {
        setLoadingStartup(true)
        const apiReports = await axios.get(`${process.env.REACT_APP_API_URL}/startupSummary`, {
            headers:{
               'Authorization':`Bearer ${token}`,
            }
        })
        setStartupRebate(apiReports.data.StartupRebate);
        setStartupStars(apiReports.data.StartupStars);
        setLoadingStartup(false)
    }

    const getGreatSaveReports = async () => {
        setLoadingGreatSave(true)
        const apiReports = await axios.get(`${process.env.REACT_APP_API_URL}/greatsaveSummary`, {
            headers:{
               'Authorization':`Bearer ${token}`,
            }
        })
        setGreatSaveRebate(apiReports.data.GreatSavingsRebate);
        setGreatSaveStars(apiReports.data.GreatSavingsStars);
        setLoadingGreatSave(false)
    }

    const startupEncashment = async (e) => {
        e.preventDefault();
        try{
            await axios.post(`${process.env.REACT_APP_API_URL}/startupEncashment`, formValues, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            getStartupReports();
            toast.success("Start-up Encashment Success");
            handleCloseStartup();
            setFormValues({
                encash:""
            })
            // setErrors([]);
        }
        catch(e) {
            if(e.response.status === 401){
                toast.error(e.response.data.message);
                handleCloseStartup();
                setFormValues({
                    encash:""
                })
            }
            if(e.response.status === 402){
                toast.error(e.response.data.message);
                handleCloseStartup();
                setFormValues({
                    encash:""
                })
            }
        }
    }

    const greatsaveEncashment = async (e) => {
        e.preventDefault();
        try{
            await axios.post(`${process.env.REACT_APP_API_URL}/greatsaveEncashment`, formValues, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            getGreatSaveReports();
            toast.success("Great Savings Encashment Success");
            handleCloseGreatSave();
            setFormValues({
                encash:""
            })
            // setErrors([]);
        }
        catch(e) {
            if(e.response.status === 401){
                toast.error(e.response.data.message);
                handleCloseGreatSave();
                setFormValues({
                    encash:""
                })
            }
            if(e.response.status === 402){
                toast.error(e.response.data.message);
                handleCloseGreatSave();
                setFormValues({
                    encash:""
                })
            }
        }
    }

    const onChange = async (e) => {
            const { name, value } = e.target;
            setFormValues({...formValues, [name]: value });
        }

    useEffect(() => {
        if(dataFetchedRef.current) 
        {
            return;
        }
        dataFetchedRef.current = true;
        getStartupReports()
        getGreatSaveReports()
    })

return (
    <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row">
                <div className="col-lg-12 mb-4 order-0">
                    <div className="card" id='summary'>
                        <div className="d-flex align-items-end row">
                            <div className="col-sm-7">
                                <div className="card-body">
                                    <h5 className="card-title text-warning">Good Day {user.firstName}! 👋</h5>
                                    <p className="mb-4">
                                        Your Total Stars as of today have reached <span className="fw-bold">{startupStars} points</span>. Keep up the good
                                        work!
                                    </p>
                                    <a href="/" className="btn btn-sm btn-outline-warning">View Genealogy</a>
                                </div>
                            </div>
                            <div className="col-sm-5 text-center text-sm-left">
                                <div className="card-body pb-0 px-0 px-md-4">
                                    <img src={process.env.PUBLIC_URL
                                        + "/assets/img/illustrations/man-with-laptop-light.png" } height="140"
                                        alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png"
                                        data-app-light-img="illustrations/man-with-laptop-light.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer position='top-center' hideProgressBar='true' />
                <Modal show={showStartup} onHide={handleCloseStartup}>
                    <Modal.Header closeButton>
                        <Modal.Title>Start-up Encashment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={startupEncashment} id='formAuthentication' className='mb-3'>
                            <div className="mb-3">
                                <Form.Control 
                                    name="encash" 
                                    value={formValues["encash"]}
                                    onChange={onChange} 
                                    type='number' id='encashment' className='form-control'
                                    placeholder='0.00'>
                                </Form.Control>
                                {/* <span className='text-sm text-danger'>{errors.activationCode}</span> */}
                            </div>
                            <Button className='mx-1' variant="secondary" onClick={handleCloseStartup}>
                                Close
                            </Button>
                            <Button className='mx-1' variant="primary" type='submit' style={{backgroundColor:"#FFAB00", borderColor:"#FFAB00"}}>
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

                <Modal show={showGreatSave} onHide={handleCloseGreatSave}>
                    <Modal.Header closeButton>
                        <Modal.Title>Great Savings Encashment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={greatsaveEncashment} id='formAuthentication' className='mb-3'>
                            <div className="mb-3">
                                <Form.Control 
                                    name="encash" 
                                    value={formValues["encash"]}
                                    onChange={onChange} 
                                    type='number' id='encashment' className='form-control'
                                    placeholder='0.00'>
                                </Form.Control>
                                {/* <span className='text-sm text-danger'>{errors.activationCode}</span> */}
                            </div>
                            <Button className='mx-1' variant="secondary" onClick={handleCloseGreatSave}>
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

                <div className="col-6" id='sa-db'>
                    <div className="card mb-4"
                        style={{backgroundImage:"linear-gradient(to bottom right, #FFAB00, #FFE368)"}}>
                        <h5 className="card-header text-white"><i className='bx bx-line-chart'></i> Start-Up Savings</h5>
                        <div className="card-body">
                            <p clas="mb-4"><strong className="text-white">Rebate Balance</strong> 
                            </p>
                            <h2>
                            {loadingStartUp === true ? <Button variant="warning" disabled>
                                <Spinner
                                  as="span"
                                  animation="border"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                />
                                Calculating...
                              </Button> : <span className="badge bg-warning">{startupRebate}</span> }
                            </h2>

                            <p className="demo-inline-spacing">
                                <a className="btn btn-outline-dark mx-2" href="/"
                                    style={{pointerEvents:"none", borderColor:"white"}}>
                                        {loadingStartUp === true ? <span className="text-white">Loading ...</span> : <span className="text-white"> 
                                        <i className='bx bxs-star mb-1 text-white'></i> {startupStars} points</span>}
                                    {/* <i className='bx bxs-star mb-1 text-white'></i><span className="text-white"> {startupStars} points</span> */}
                                </a>
                                {loadingStartUp === true ? 
                                <Button disabled style={{backgroundColor:"#FFAB00", borderColor:"#FFAB00"}}>
                                        <i className='bx bxs-wallet mb-1'></i> Loading ...
                                </Button> : 
                                <Button onClick={handleShowStartup} style={{backgroundColor:"#FFAB00", borderColor:"#FFAB00"}}>
                                        <i className='bx bxs-wallet mb-1'></i> Encash
                                </Button> 
                                }
                                {/* <a className="btn btn-warning" href="/">
                                    <i className='bx bxs-wallet mb-1'></i> Encash
                                </a> */}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-6" id='gs-db'>
                    <div className="card mb-4"
                        style={{backgroundImage:"linear-gradient(to bottom right, #696CFF, #B6B7FF)"}}>
                        <h5 className="card-header text-white"><i className='bx bxs-chevrons-up'></i> Great Savings</h5>
                        <div className="card-body">
                            <p><strong className="text-white">Rebate Balance</strong> 
                            </p>
                            <h2>
                            {loadingGreatSave === true ? <Button variant="primary" disabled>
                                <Spinner
                                  as="span"
                                  animation="border"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                />
                                Calculating...
                              </Button> : <span className="badge bg-primary">{greatsaveRebate}</span> 
                            }
                            </h2>
                            <p className="demo-inline-spacing">
                                <a className="btn btn-outline-primary mx-2" href="/"
                                    style={{pointerEvents: "none", borderColor:"white"}}>
                                        {loadingGreatSave === true ? <span className="text-white">Loading ...</span> : <span className="text-white"> 
                                        <i className='bx bxs-star mb-1 text-white'></i> {greatsaveStars} points</span>}
                                    {/* <i className='bx bxs-star mb-1 text-white'></i><span className="text-white">{greatsaveStars} points</span> */}
                                </a>
                                {loadingGreatSave === true ? 
                                <Button disabled>
                                        <i className='bx bxs-wallet mb-1'></i> Loading ...
                                </Button> : 
                                <Button onClick={handleShowGreatSave}>
                                        <i className='bx bxs-wallet mb-1'></i> Encash
                                </Button> 
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
) 
// : ( 
//     <Navigate to="/" replace/>
//  );
}

export default DashboardUI