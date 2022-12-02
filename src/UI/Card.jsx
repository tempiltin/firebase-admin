import React from 'react'
import img from "../Assets/Audio/android.svg"
import "../Styles/Card.css"
const Card = () => {
  return <div className="section_card">
     <img src={img} alt="" />
     <h2>Name</h2>
     <h3>1200$</h3>
     <button>Buy now</button>
  </div>
}

export default Card