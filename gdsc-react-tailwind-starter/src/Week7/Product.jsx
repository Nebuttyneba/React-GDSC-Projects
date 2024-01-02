
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';

const Product = () => {
  let { id } = useParams();
 
  const product = { id: id, name: Product ${id}, price: 10, description: Description for product ${id} };

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
   
    addToCart(product);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;

