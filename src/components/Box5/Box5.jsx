import React, { useState } from 'react'
import { motion, useAnimation } from "framer-motion"
const Box5 = () => {
    const boxVariants = {
        hidden: {
            x: 0,
        },
        right: {
            x: 800,
        },
        left: {
            x: 0
        }
    }
    const controls = useAnimation()
    return (
        <div className="box-container" >
            <div className="buttons-container">
                <button
                    className='button'
                    onClick={() => {
                        controls.start(boxVariants.right)
                    }}
                >Right</button>
                <button
                    className='button'
                    onClick={() => {
                        controls.start(boxVariants.left)
                    }}
                >Left</button>
                <button className='button'>Circle</button>
                <button className='button'>Square</button>
                <button className='button'>Down</button>
                <button className='button'>Up</button>
                <button className='button'>Stop</button>
            </div>
            <motion.div
                className='box'
                variants={boxVariants}
                initial="hidden"
                animate={controls}
                transition={{
                    duration: 1.2
                }}
            >
            </motion.div>
        </div>
    )
}

export default Box5