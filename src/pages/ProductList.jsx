import { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import './ProductList.css';

const ProductList = () => {
  const [filters, setFilters] = useState({
    category: 'All',
    minPrice: '',
    maxPrice: '',
  });
  const [sortBy, setSortBy] = useState('default');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (filters.category !== 'All') {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    // Filter by price
    if (filters.minPrice !== '') {
      filtered = filtered.filter((p) => p.price >= parseFloat(filters.minPrice));
    }
    if (filters.maxPrice !== '') {
      filtered = filtered.filter((p) => p.price <= parseFloat(filters.maxPrice));
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  return (
    <div className="product-list-page">
      <div className="container">
        <aside className="sidebar">
          <Filters
            filters={filters}
            setFilters={setFilters}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </aside>
        <main className="main-content">
          <div className="products-header">
            <h2>Products</h2>
            <p className="product-count">
              {filteredAndSortedProducts.length} items found
            </p>
          </div>
          {filteredAndSortedProducts.length === 0 ? (
            <div className="no-products">
              <p>No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductList;
