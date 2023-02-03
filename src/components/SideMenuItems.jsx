import React from 'react'
//import { NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SideMenuItems = ({ item }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)
    return(
    <>
        <Link className="sidebarlink" to={item.path} id={window.location.pathname === item.path ? "active" : ""} 
        onClick={item.subNav && showSubnav}>
            <div>
                {item.icon}
                <span className='sidebarlabel'>{item.title}</span>
            </div>
        </Link>
    </>
    )
    
}

export default SideMenuItems