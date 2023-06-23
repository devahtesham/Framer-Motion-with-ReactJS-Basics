import React, { useState } from 'react'
import { delay, motion } from "framer-motion"

const Box1 = () => {
    const [move, setMove] = useState(false)

    const box1ClickHandler = () => {
        setMove(!move)
    }
    return (
        <div className="box-container" >
            <motion.div
                className='box'
                onClick={box1ClickHandler}
                animate={{
                    x: move ? 1800 : 0,
                    opacity: move ? 1 : 0.3,
                    rotate: move ? 360 : 0,
                    transition: {
                        // duration: 3,
                        type: "spring",
                        stiffness: 65,
                    }
                }}
                initial={{
                    opacity: 0.3
                }}
            >

            </motion.div>
        </div>
    )
}

export default Box1