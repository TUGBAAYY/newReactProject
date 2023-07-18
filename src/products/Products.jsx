import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function Products() {
  const [last10Products, setLast10Products] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then(res => res.json())
      .then(res => setLast10Products(res));
  }, []);
  
  return (
    <div>
      
      <h1 className="mb-5 text-center text-danger">Ürünler </h1>
      <div className="row row-cols-sm-3 row-cols-md-4 ">

      {last10Products.map(item => <ProductCard key={item.id} item={item} />)}
      
      </div>
      
    </div>
  );
}

export default Products;
