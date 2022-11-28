import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Helmet from "../../Helmet/Helmet"
import IMG from "../../Assets/undraw_secure_login_pdn4.svg"
import "../../Styles/Register.css";
import { motion } from 'framer-motion';
import Login from "./Login"
import SignIn from "./SignIn"
const Register = () => {
  const [login, setLogin] = useState(false);
  const [loginUserName, setLoginUserName] = useState('');
  const [loginUserPassword, setLoginUserPassword] = useState('');
  const navigate = useNavigate();
  const checkbox = () => {
    if (loginUserName && loginUserPassword) {
     
     if (loginUserName === process.env.REACT_APP_ADMIN && loginUserPassword === process.env.REACT_APP_PASSWORD) {
          navigate('/')
        } else {
          alert("xato")
        }
      

    }


  }
  const handleClickLog = (e) => {
    e.preventDefault()
    setLogin(false)
  }
  const handleClickReg = (e) => {
    e.preventDefault()
    setLogin(true)
  }

  return <Helmet title={login ? "-Sign-In" : "-Login"}>
    <div className="container">
      <div className="row justify-content-around align-items-center">
        <div className="col-lg-5">
          <img src={IMG} alt="" />
        </div>
        <div className="col-lg-6">
          <div className="btn_card ">
            <div className="btn_card_btn">

              <motion.button onClick={handleClickLog} whileTap={{ scale: 1.1 }}>Login</motion.button>
              <motion.button onClick={handleClickReg} whileTap={{ scale: 1.1 }}>Register</motion.button>
            </div>


            {
              login ? <SignIn /> :
                <Login
                  loginUserName={loginUserName}
                  setLoginUserName={setLoginUserName}
                  loginUserPassword={loginUserPassword}
                  setLoginUserPassword={setLoginUserPassword}
                  checkbox={checkbox}
                />
            }


          </div>
        </div>
      </div>
    </div>
  </Helmet>
}

export default Register