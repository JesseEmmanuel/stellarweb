import { useLocation } from 'react-router'
import { Routes, Route } from "react-router-dom";
import SidebarLayout from './SidebarLayout';

import Login from '../pages/Login'
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import GenStartup from '../pages/genealogy/StartupSavings';
import GenGreat from '../pages/genealogy/GreatSavings';
import CheckRewards from '../pages/rewards/CheckRewards';
import Logs from '../pages/Logs';
import DirectReferral from '../pages/DirectReferrals';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from '../contexts/Auth';



function PageTransition() {
const location = useLocation();

return (
<div className="layout-wrapper layout-content-navbar">
  <AnimatePresence>
    <div className="layout-container">
      <AuthProvider>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route element={<SidebarLayout />}>
          <Route path='/Dashboard' element={<Dashboard />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
          <Route path='/genealogy/StartupSavings' element={<GenStartup />}></Route>
          <Route path='/genealogy/GreatSavings' element={<GenGreat />}></Route>
          <Route path='/StarRewards' element={<CheckRewards />}></Route>
          <Route path='/Logs' element={<Logs />}></Route>
          <Route path='/DirectReferrals/:id/view' element={<DirectReferral />}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  </AnimatePresence>
</div>
)
}

export default PageTransition