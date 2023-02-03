import React from 'react'
import * as RiIcons from 'react-icons/ri'
import * as TbIcons from 'react-icons/tb'
import * as BiIcons from 'react-icons/bi'
import * as IoIcons from 'react-icons/io'

export const MenuItems = [
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