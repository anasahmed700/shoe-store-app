import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import NotFound from './components/NotFound'

import {Link, Routes, Route} from 'react-router-dom'
import ProductDetails from './components/ProductDetails';
import ProductHome from './components/ProductHome';


function App() {
  return (
    <div className="App">
      <h1 className="text-primary my-3">Welcome!</h1>
      <nav className="my-2">
      <Link to="/" className="btn btn-outline-primary">Home</Link> {' '}
      <Link to="about" className="btn btn-outline-primary mx-1">About</Link> {' '}
      <Link to="products" className="btn btn-outline-primary">Products</Link> {' '}
      
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />}>
          <Route path='/' element={<ProductHome />}></Route>
          <Route path=':prodSlug' element={<ProductDetails />}></Route>
        </Route>
        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  );
}


export default App;
