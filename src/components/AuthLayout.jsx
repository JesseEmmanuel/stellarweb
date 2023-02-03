import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from "react-router-dom";
import Login from '../pages/Login'
import Register from '../pages/Register';
import { AuthProvider } from '../contexts/Auth';
import { useLocation } from 'react-router-dom';

import React from 'react'

function AuthLayout() {
const location = useLocation();
  return (
    <AnimatePresence>
    <div className="layout-container">
      <AuthProvider>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route>
      </Routes>
      </AuthProvider>
    </div>
  </AnimatePresence>
  )
}

export default AuthLayout