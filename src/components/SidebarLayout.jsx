import { Outlet } from 'react-router'
// import Sidemenu from './Sidemenu'
import Sidebar from './Sidebar'

import React from 'react'

function SidebarLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default SidebarLayout
