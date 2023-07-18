import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'

function Category() {
  const {categoryName}= useParams()
  const [categoryProducts, setCategoryProducts] = useState([])
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/category/${categoryName} `)
      .then(res => res.json())
      .then(res => setCategoryProducts(res))
      .catch(err => console.error(err))
  })
  return (

    <div>
      <h1 className="mb-3">Kategori: {categoryName.toUpperCase()} </h1>
      <div className="row row-cols-sm-3 row-cols-md-4">
        {categoryProducts.map(item => <ProductCard key={item.id} item={item}/>)}
      </div>
    </div>
  )
}

export default Category
