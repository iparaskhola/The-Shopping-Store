import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <CartProvider>
      <div className="app">
        <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
        {currentPage === 'home' && <ProductList />}
        {currentPage === 'cart' && <Cart onNavigate={handleNavigate} />}
        {currentPage === 'checkout' && <Checkout onNavigate={handleNavigate} />}
      </div>
    </CartProvider>
  );
}

export default App;
