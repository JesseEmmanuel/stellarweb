import Header from "../../components/Header"
import StartupUI from "../../components/genealogy/StartupUI"
import { motion } from "framer-motion"

const StartupSavings = () => {
return (
<motion.div className="layout-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Header />
    <StartupUI />
</motion.div>
)
}

export default StartupSavings