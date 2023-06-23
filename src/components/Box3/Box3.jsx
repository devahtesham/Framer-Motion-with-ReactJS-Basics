import React from 'react'
import { motion } from 'framer-motion'

const Box3 = () => {
    let boxVariant = {
        hidden: {
            x: "-100vw",
        },
        visible: {
            x: 0,
            transition: {
                // duration: 2,
                delay: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.8,
            }
        }
    }
    let listVariant = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            // staggerChildren: 0.2,
            transition: {
                // delay: 2,
                // duration: 2
            }
        }
    }
    return (
        <div className="box-container" >
            <motion.div
                className='box'
                variants={boxVariant}
                animate="visible"
                initial="hidden"
            >
                {
                    [1, 2, 3].map((box, index) => {
                        return <motion.li
                            className='boxItems'
                            key={index}
                            // animate and initial property automatically yahn transfer hojegi likhny ki need nhi nh hy istrh 
                            // animate={boxVariant.visible}
                            // initial={boxVariant.hidden}
                            variants={listVariant}

                        ></motion.li>
                    })
                }
            </motion.div>
        </div>
    )
}

export default Box3