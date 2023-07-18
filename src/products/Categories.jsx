import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Categories() {
  const [categories, setCategories]= useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=> res.json())
    .then(res=> setCategories(res))
  },[])
  return (  
    <div>
      <h1 className="mb-5 text-danger text-center">Kategoriler</h1>
     <div className="list-group">
      { 
        categories.map((category, index)=> <Link 
        key={index} 
        to={`/products/category/${category}`}
        className="list-group-item list-group-item-action list-group-item-success"
        >
          {category} </Link>)
      }
  </div>
  
    </div>
  )
}

export default Categories