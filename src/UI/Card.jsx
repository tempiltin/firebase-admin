import React from 'react'
import img from "../Assets/Audio/android.svg"
import "../Styles/Card.css"
const Card = ({item}) => {
  return <div className="section_card">
     <img src={item.img} alt={Date()+item.img} />
     <h2>{item.name}</h2>
     <h3>${item.price}</h3>
     <button>Buy now</button>
  </div>
}

export default Card