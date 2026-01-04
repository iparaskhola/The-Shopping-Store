import { categories } from '../data/products';
import './Filters.css';

const Filters = ({ filters, setFilters, sortBy, setSortBy }) => {
  return (
    <div className="filters">
      <div className="filter-section">
        <h3>Category</h3>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="filter-select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <h3>Price Range</h3>
        <div className="price-inputs">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
            className="price-input"
          />
          <span>to</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            className="price-input"
          />
        </div>
      </div>

      <div className="filter-section">
        <h3>Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="filter-select"
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
          <option value="rating">Rating: High to Low</option>
        </select>
      </div>

      <button
        className="reset-btn"
        onClick={() => {
          setFilters({ category: 'All', minPrice: '', maxPrice: '' });
          setSortBy('default');
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;
