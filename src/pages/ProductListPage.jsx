import React from 'react';
import ProductList from '../components/ProductList';

const ProductListPage = () => {
  const products = [
    { id: 'p1', name: 'Product 1', price: 10.99 },
    { id: 'p2', name: 'Product 2', price: 12.99 },
    { id: 'p3', name: 'Product 3', price: 8.99 },
  ];

  return <ProductList products={products} />;
};

export default ProductListPage;
