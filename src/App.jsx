import React from 'react'
import Navbar from './Components/Navbar';
import ProductList from './pages/ProductList';
import Cart from './Pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetail.jsx';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
   <>
     <Router>
      <div className="min-h-screen bg-gray-950 font-sans">
        <Navbar />
       <Routes>
         <Route path="/" element={<ProductList />} /> 
         <Route path="/product/:id" element={<ProductDetails />} />
         <Route path="/cart" element={<Cart />} />
       </Routes>
       <Footer />
       </div>
     </Router>
   </>
  )
}

export default App