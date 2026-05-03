import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './components/Footer/Footer';

import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kids_banner from './components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Shop />} />

          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category={1} />}
          />

          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category={2} />}
          />

          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category={3} />}
          />

          <Route
            path="/nc"
            element={<ShopCategory category={4} />}
          />

          <Route path="/product/:productId" element={<Product />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<LoginSignup />} />

        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
