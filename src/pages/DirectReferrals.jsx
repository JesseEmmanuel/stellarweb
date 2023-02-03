import Header from "../components/Header"
import DirectReferralData from "../components/DirectReferralData"
import { motion } from "framer-motion"

const DirectReferral = () => {
return (
<motion.div className="layout-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Header />
    <DirectReferralData />
</motion.div>
)
}

export default DirectReferral