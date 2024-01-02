
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'cloth', price: 10, image: 'product1.jpg' },
  { id: 2, name: 'shoe', price: 20, image: 'product2.jpg' },
 
];

const Home = () => {
  return (
    <div>
      <h2>Product Listings</h2>
      {products.map((product )=> (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Link to={/product/${product.id}}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
