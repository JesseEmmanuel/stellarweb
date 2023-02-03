import React from "react";
import Header from "../components/Header";
import LogComponent from "../components/Logs";
import { motion } from "framer-motion";

function Logs() {
    return (
        <motion.div className="layout-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
            <Header />
            <LogComponent />
        </motion.div>
    )
  }
  
  export default Logs