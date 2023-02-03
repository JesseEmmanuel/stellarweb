import React from 'react'
import Header from '../../components/Header'
import CheckRewardsUI from '../../components/rewards/CheckRewardsUI'
import { motion } from 'framer-motion'

function CheckRewards() {
return (
<motion.div className="layout-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Header />
    <CheckRewardsUI />
</motion.div>
)
}

export default CheckRewards