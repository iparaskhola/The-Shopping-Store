import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = ({ onNavigate, currentPage }) => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo" onClick={() => onNavigate('home')}>
          🛍️ The Shopping Store
        </h1>
        <div className="navbar-menu">
          <button
            className={`navbar-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            Products
          </button>
          <button
            className={`navbar-link cart-link ${currentPage === 'cart' ? 'active' : ''}`}
            onClick={() => onNavigate('cart')}
          >
            🛒 Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
