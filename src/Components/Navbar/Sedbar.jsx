import React from 'react'
import { motion } from 'framer-motion'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'
const Sedbar = (props) => {
    return <aside className={props.state ? "aside_True" : "aside_False"}>
        <div className="container-fluid">
            <div className="row align-items-center w_80">
                <div className="col-12">
                    <motion.button whileTap={{ scale: 1.2 }} className='nav_btn close' onClick={(event)=> props.handleClick(event)}>
                        <GrClose />
                    </motion.button>
                </div>
            </div>
            <ul>
                {
                    props.navDB ? props.navDB.map((item,index)=>(
                        <li key={index}><Link to={item.url}>{item.name}</Link></li>
                    )) :""
                }
               
            </ul>
        </div>
    </aside>
}

export default Sedbar