


import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
// import ProductsLayout from './products/ProductsLayout';
// import Products from './products/Products';
// import Category from './products/Category';
import {ProductsLayout, Products, Category, Product} from './products'
import Login from './pages/Login';
import Faav from './pages/Faav';

function SiteRoutes({handlelogin, user}) {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<ProductsLayout />}>
        <Route index = {true} element={<Products />} />
        <Route path='category/:categoryName' element={<Category />} />
        <Route path='product/:productId' element={<Product />} />
      </Route>
      <Route path='/login' element={<Login handlelogin={handlelogin} />} />
      <Route path='/faav' element={<Faav user={user} />} />
      
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default SiteRoutes;
