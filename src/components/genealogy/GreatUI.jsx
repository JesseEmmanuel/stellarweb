import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

function GreatUI() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return (
<div class="content-wrapper">
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row">
            <div class="d-flex justify-content-center">
                <h3 class="pb-1 mb-4">Great Savings</h3>
            </div>
            <div class="row mb-5 d-flex justify-content-center">
                <div class="col-md-6">
                    <div class="card mb-3">
                        <div class="row">
                            <div class="col-md-6">
                                <img class="card-img card-img-left rounded-circle my-2 mx-2"
                                    src={process.env.PUBLIC_URL+ "/assets/img/avatars/1.png" } alt="" />
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h6 class="card-title">Name: <span class="badge bg-primary">
                                            Juan Dela Cruz
                                        </span></h6>
                                    <h6 class="card-title">UserID: <span class="badge bg-info">
                                            2016100900
                                        </span></h6>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                    <br />
                                    <h6 class="card-title mb-0"> <small>Note:</small></h6>
                                    <p class="card-text"> <small> -Startup up to 4rth level <br />
                                            -Great Savings up to 5th level</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="card-group mb-5">
                    <div class="card">
                        <img class="card-img" src={process.env.PUBLIC_URL+ "/assets/img/activestar-v2.png" }
                            alt="" />
                        <div class="card-body">
                            <div class="d-flex justify-content-center mb-2">
                                <img src={process.env.PUBLIC_URL+ "/stellar/app/assets/img/avatars/1.png" } alt=""
                                    class="w-px-40 h-auto rounded-circle" />
                            </div>
                            <a href="/Dashboard">
                                <div class="d-flex justify-content-center">
                                    <span class="badge bg-primary">
                                        Juan Dela Cruz<br />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/activestar-v3.png" }
                            alt="" />
                        <div class="card-body">
                            <div class="d-flex justify-content-center mb-2">
                                <img src={process.env.PUBLIC_URL+ "/assets/img/profile.png" } alt=""
                                    class="w-px-40 h-auto rounded-circle" />
                            </div>
                            <a href="/Dashboard">
                                <div class="d-flex justify-content-center">
                                    <span class="badge bg-primary">
                                        Juan Dela Cruz<br />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/activestar-v3.png" }
                            alt="" />
                        <div class="card-body">
                            <div class="d-flex justify-content-center mb-2">
                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/7.png" } alt=""
                                    class="w-px-40 h-auto rounded-circle" />
                            </div>
                            <a href="/Dashboard">
                                <div class="d-flex justify-content-center">
                                    <span class="badge bg-primary">
                                        Juan Dela Cruz<br />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/activestar-v3.png" }
                            alt="" />
                        <div class="card-body">
                            <div class="d-flex justify-content-center mb-2">
                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/6.png" } alt=""
                                    class="w-px-40 h-auto rounded-circle" />
                            </div>
                            <a href="/Dashboard">
                                <div class="d-flex justify-content-center">
                                    <span class="badge bg-primary">
                                        Juan Dela Cruz<br />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/activestar-v3.png" }
                            alt="" />
                        <div class="card-body">
                            <div class="d-flex justify-content-center mb-2">
                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/5.png" } alt=""
                                    class="w-px-40 h-auto rounded-circle" />
                            </div>
                            <a href="/Dashboard">
                                <div class="d-flex justify-content-center">
                                    <span class="badge bg-primary">
                                        Juan Dela Cruz<br />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/inactivestar.png" }
                            alt="" />
                        <div class="card-body">
                            <div class="d-flex justify-content-center">
                                <img src={process.env.PUBLIC_URL+ "/assets/img/profile.png" } alt=""
                                    class="w-px-40 h-auto rounded-circle" />
                            </div>
                            <div class="d-flex justify-content-center">
                                <div class="p-2 bd-highlight">
                                    <Button className='btn btn-secondary' onClick={handleShow}>
                                        <i className='bx bxs-plus-circle'></i> Add
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form id='formAuthentication' className='mb-3'>
                                <div className="mb-3">
                                    <Form.Control type='text' id='firstName' className='form-control'
                                        placeholder='First Name'>
                                    </Form.Control>
                                </div>
                                <div className="mb-3">
                                    <Form.Control type='text' id='middleName' className='form-control'
                                        placeholder='Middle Name'>
                                    </Form.Control>
                                </div>
                                <div className="mb-3">
                                    <Form.Control type='text' id='lastName' className='form-control'
                                        placeholder='Last Name'>
                                    </Form.Control>
                                </div>
                                <div className="mb-3">
                                    <label class="form-label">Date Of Birth</label>
                                    <Form.Control type='date' id='username' className='form-control'
                                        placeholder='birth date'>
                                    </Form.Control>
                                </div>
                                <div className="mb-3">
                                    <Form.Control type='number' id='username' className='form-control'
                                        placeholder='Contact Info'>
                                    </Form.Control>
                                </div>
                                <div className="mb-3">
                                    <Form.Control type='text' id='username' className='form-control'
                                        placeholder='Email Address'>
                                    </Form.Control>
                                </div>
                                <Button className='mx-1' variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button className='mx-1' variant="primary" onClick={handleClose}>
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
    </div>
</div>
)
}

export default GreatUI