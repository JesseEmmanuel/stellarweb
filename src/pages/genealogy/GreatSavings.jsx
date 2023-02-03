import Header from "../../components/Header"
import GreatUI from "../../components/genealogy/GreatUI"
import { motion } from "framer-motion"

function GreatSavings() {
return (
<motion.div className="layout-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  <Header />
  <GreatUI />
</motion.div>
)
}

export default GreatSavings