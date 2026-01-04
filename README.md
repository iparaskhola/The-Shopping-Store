# The Shopping Store 🛍️

A modern React + Vite mini e-commerce web application featuring product listings, filters, sorting, a persistent cart, and a streamlined checkout flow.

## Features

- **Product Listings**: Browse a collection of products with images, descriptions, and prices
- **Advanced Filtering**: Filter products by category and price range
- **Flexible Sorting**: Sort products by price, name, or rating
- **Shopping Cart**: Add/remove items, update quantities with persistent storage
- **Checkout Flow**: Complete purchase with a user-friendly checkout form
- **Responsive Design**: Optimized for all screen sizes
- **Local Storage**: Cart data persists across browser sessions

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Context API** - State management
- **CSS3** - Styling with modern features
- **LocalStorage** - Cart persistence

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/iparaskhola/The-Shopping-Store.git
cd The-Shopping-Store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── Filters.jsx
├── pages/            # Page components
│   ├── ProductList.jsx
│   ├── Cart.jsx
│   └── Checkout.jsx
├── context/          # React Context providers
│   └── CartContext.jsx
├── data/             # Mock data
│   └── products.js
├── App.jsx           # Main app component
└── main.jsx          # Entry point
```

## Features in Detail

### Product Listing
- Grid layout with responsive design
- Product cards with images, descriptions, and ratings
- Category badges and price display

### Filters & Sorting
- Filter by category (Electronics, Footwear, Bags, etc.)
- Filter by price range (min/max)
- Sort by price, name, or rating
- Reset filters functionality

### Shopping Cart
- Add products to cart
- Update item quantities
- Remove items from cart
- Persistent storage using localStorage
- Cart badge showing item count

### Checkout
- User-friendly form for shipping information
- Order summary with item details
- Order confirmation page
- Form validation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
