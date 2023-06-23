import React from 'react'
import { motion } from "framer-motion"
const Box4 = () => {
    return (
        <div className="box-container" >
            <motion.div
                className='box'
                animate={{
                    scale: [1, 1.2, 1.2, 0.9, 1],
                    borderRadius: ["10%", "20%", "20%", "50%", "10%"],
                    rotate: [0, 0, 300, 300, 0]
                }}
                transition={{
                    duration: 2
                }}
            >
            </motion.div>
        </div>
    )
}

export default Box4