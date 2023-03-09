import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { NavLink, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { useAuth } from '../contexts/Auth'
import * as ImIcons from 'react-icons/im'

const Header = () => {
    const redirect = useNavigate()
    const { signOut } = useAuth()
    const tooltip = (
        <Tooltip>
            Log Out
        </Tooltip>
    )
    const handleSignout = async (e) => {
        e.preventDefault() 
        
        await signOut()
        redirect('/')
        window.location.reload()
    }

    return (
        <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                        id="layout-navbar">
                        {/* <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                            <a className="nav-item nav-link px-0 me-xl-4" href="!#">
                                <i className="bx bx-menu bx-sm"></i>
                            </a>
                        </div> */}
                        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                            <div className="navbar-nav align-items-center">
                                <div className="nav-item d-flex align-items-center">
                                    <i className="bx bx-search fs-4 lh-0"></i>
                                    <input type="text" className="form-control border-0 shadow-none" placeholder="Search..."
                                        aria-label="Search..." />
                                </div>
                            </div>
                            <ul className="navbar-nav flex-row align-items-center ms-auto">
                                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                                        <NavLink className="link" onClick={handleSignout}>
                                            <div className='icon'><ImIcons.ImExit color='#0F1D41' size={28} /></div>
                                        </NavLink>
                                    </OverlayTrigger>
                                </li>
                            </ul>
                        </div>
                    </nav>
    )
}

export default Header