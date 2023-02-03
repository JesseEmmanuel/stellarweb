//import { Link, NavLink } from 'react-router-dom'
//import { useState } from 'react';
//import { Nav, Dropdown } from 'react-bootstrap'
import { MenuItems } from './SidebarData';
import SubMenu from './SideMenuItems';
import '../App.css'

const Sidemenu = () => {
    return(
        <aside id="layout-menu-fixed" className="layout-menu menu-vertical menu bg-menu-theme">
                <div className='logo' to="#">
                    <img src={process.env.PUBLIC_URL + "/assets/img/icons/stellar.png" } alt="" width="180"/>
                </div>
                <div sidebarwrap='sidebar'>
                    <div className='mt-lg-3'>
                        {MenuItems.map((item, index) => (
                            <SubMenu item={item} key={index} />
                        ))}
                    </div>
                </div>
        </aside>
    ) 
}

export default Sidemenu