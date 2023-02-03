import { Outlet } from 'react-router'
import Sidemenu from './Sidemenu'

import React from 'react'

function SidebarLayout() {
  return (
    <>
      <Sidemenu />
      <Outlet />
    </>
  )
}

export default SidebarLayout
