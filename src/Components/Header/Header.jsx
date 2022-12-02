import React from 'react'
import Shop from "../../Assets/shop.svg"
import { motion } from 'framer-motion'
import Button from '../Button/Button'
const Header = () => {
    return <header id='header_top'>
        <div className="container">
            <div className="row mt-5 justify-content-between align-items-center">
                <div className="col-lg-6">
                    <div className="text_header">
                        <h1>Online Products</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi nobis sapiente quas veritatis repellat culpa excepturi quo, provident, eos distinctio, at quod in consequatur.</p>
                        <Button url={"/product"}/>
                    </div>
                </div>
                <div className="col-lg-5">
                    <motion.img whileTap={{ scale: 1.2 }} src={Shop} alt="" />
                </div>
            </div>
        </div>
    </header>
}

export default Header