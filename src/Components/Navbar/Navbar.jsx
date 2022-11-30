import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from "react-icons/ai";
import { motion } from 'framer-motion';
import "../../Styles/navbar.css";
import Logo from "../../Assets/react.svg";
import Sedbar from './Sedbar';
// navbar uchun db
import navDB from '../../DB/navDB';
const Navbar = () => {
    const [state, setState] = useState(false);

    const handleClick = (event) => {
        event.preventDefault()
        if (state) {
            setState(false)
        } else {
            setState(true)
        }
    }

    return <>
        <nav>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <a href="#!">
                            <img src={Logo} alt="" />
                        </a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <ul className='d-flex'>
                            {
                                navDB ? navDB.map((item, index) => (

                                    <li key={index}><Link to={item.url}>{item.name}</Link></li>
                                )) : ""
                            }

                        </ul>
                    </div>
                    <div className="col-auto d-block d-lg-none">
                        <motion.button whileTap={{ scale: 1.2 }} className='nav_btn' onClick={(event) => handleClick(event)}>
                            <AiOutlineBars />
                        </motion.button>
                    </div>
                </div>
            </div>
        </nav>
        <Sedbar
            state={state}
            handleClick={handleClick}
            navDB={navDB}
        />
    </>
}

export default Navbar