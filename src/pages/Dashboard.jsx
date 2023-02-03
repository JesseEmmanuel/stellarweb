import DashboardUI from "../components/DashboardUI"
import Header from "../components/Header"
import { motion } from 'framer-motion'
import { Navigate } from "react-router"
import { useAuth } from "../contexts/Auth"

const Dashboard = () => {
    const { token } = useAuth();
    return token ? (
            <motion.div className="layout-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
                <Header />
                <DashboardUI />
            </motion.div>
    ) : (
        <Navigate to="/" replace />
    )
}

export default Dashboard