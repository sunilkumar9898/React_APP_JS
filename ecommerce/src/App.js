
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
      
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
