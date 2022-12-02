import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import linkaudio from "../../Assets/Audio/button.wav"
const Button = (props) => {
    let audio = new Audio(linkaudio)
   

    return <motion.button
        whileTap={{ scale: 1.2 }}
        className='buy_btn'
        onClick={()=> audio.play()}
    >
        <Link to={props.url} >Buy now</Link>
    </motion.button>
}

export default Button