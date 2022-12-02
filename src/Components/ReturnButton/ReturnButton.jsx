import React from 'react'
import { Link } from 'react-router-dom'
import {GrLinkNext} from "react-icons/gr";
const ReturnButton = () => {
  return <Link className='returnButton' to={"#navTop"}>
    <GrLinkNext />
  </Link>
}

export default ReturnButton