import React, { useState } from 'react'
import CardList from '../../UI/CardList'

import products from "../../DB/products";
import category from "../../DB/category";
import { useEffect } from 'react';

const SectionProducts = () => {
  const [data, setdata] = useState(products)

  const filterDate = e => {
    setTimeout(() => {
      const filterValue = e.target.value;
      const filterNew = products.filter(item => item.category === filterValue)
      console.log(filterNew);
      setdata(filterNew)
    }, 300)

  }

    return <main id='section_products'>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <ul>
            <li>
              <select name="" id="" onChange={filterDate}>
                <option >Category</option>
                {
                  category?.map((item, index) => (
                    <option value={item.name} key={index}>{item.name}</option>
                  ))
                }
              </select>
            </li>
          </ul>
        </div>
        <div className="col-lg-9">
          <div className="row mt-5">
            <CardList data={data} />
          </div>
        </div>
      </div>
    </div>
  </main>
}

export default SectionProducts