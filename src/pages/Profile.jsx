import React from 'react'
import Header from "../components/Header"
import ProfileContent from '../components/ProfileContent'
import { motion } from 'framer-motion'

function Profile() {
  return (
    <motion.div className="layout-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
        <Header />
        <ProfileContent />
    </motion.div>
  )
}

export default Profile