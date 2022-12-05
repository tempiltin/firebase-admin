import React from 'react'
import Card from './Card'

const CardList = ({data}) => {
  return <>
  {
    data?.map((item,index)=>(
      <div className="col-lg-3 mt-2" key={index}>

        <Card item={item}/>
      </div>
    ))
  }
  </>
}

export default CardList