import { NavLink } from 'react-router-dom';
import * as RiIcons from 'react-icons/ri'
import * as TbIcons from 'react-icons/tb'
import * as BiIcons from 'react-icons/bi'
import * as IoIcons from 'react-icons/io'
import { useState, useEffect } from 'react';

const Sidebar = () =>
{
    const[windowSize, setWindowSize] = useState(window.innerWidth)

    const menuItem = [
        {
            title: 'Dashboard',
            path: '/Dashboard',
            icon: <RiIcons.RiDashboardFill/>   
        },
        {
            title: 'Startup Savings',
            path: '/genealogy/StartupSavings',
            icon: <RiIcons.RiPlantFill/>,
        },
        {
            title: 'Great Savings',
            path: '/genealogy/GreatSavings',
            icon: <TbIcons.TbChevronsUp/>,
        },
        {
            title: 'Star Rewards',
            path: '/StarRewards',
            icon: <IoIcons.IoIosGift/>,
        },
        {
            title: 'Transactions/Logs',
            path: '/Logs',
            icon: <BiIcons.BiTransfer/>,
        },
    ]

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize)
        
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (
        <div id='container'>
            <div className='sidebar'>
                <div className='top_section'>
                    <div className='logo' id='logo'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/stellar-logo.png" } alt="" width={windowSize > 768 ? "70" : "40"}/>
                    </div>
                    <div className='logo' id='brand'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/stellar.png" } alt="" width="130"/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className='link' id={window.location.pathname === item.path ? "active" : ""} >
                            <div className='icon'>{item.icon}</div>
                            <div className='link_text'>{item.title}</div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar