import React from 'react'
import { motion } from 'framer-motion'

const Box2 = () => {
    return (
        <div className="box-container" >
            <motion.div
                className='box'
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.9
                }}
                // if you want to drag
                drag
                // setting dragging area
                dragConstraints={{
                    top: 40,
                    right: 50,
                    bottom: 20,
                    left: -10
                }}
            >

            </motion.div>
        </div>
    )
}

export default Box2