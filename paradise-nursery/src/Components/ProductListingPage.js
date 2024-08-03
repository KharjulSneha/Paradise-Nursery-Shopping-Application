import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import Product from './Product';
import './ProductListingPage.css';

import snakePlant from '../assets/images/snake-plant.jpeg';
import spiderPlant from '../assets/images/spider-plant.jpeg';
import peaceLily from '../assets/images/peace-lily.jpg';
import bostonFern from '../assets/images/boston-fern.jpeg';
import rubberPlant from '../assets/images/rubber-plant.jpeg';
import aloeVera from '../assets/images/aloe-vera.jpeg';

const products = [
  { id: 1, name: 'Snake Plant', price: 15, image:  snakePlant},
  { id: 2, name: 'Spider Plant', price: 12, image: spiderPlant },
  { id: 3, name: 'Peace Lily', price: 18, image: peaceLily },
  { id: 4, name: 'Boston Fern', price: 10, image: bostonFern },
  { id: 5, name: 'Rubber Plant', price: 20, image: rubberPlant },
  { id: 6, name: 'Aloe Vera', price: 8, image: aloeVera},
  { id: 7, name: 'Boston Fern', price: 10, image: bostonFern },
  { id: 8, name: 'Snake Plant', price: 15, image:  snakePlant},
  { id: 9, name: 'Rubber Plant', price: 20, image: rubberPlant },
  { id: 10, name: 'Spider Plant', price: 12, image: spiderPlant },
  { id: 11, name: 'Aloe Vera', price: 8, image: aloeVera},
  { id: 12, name: 'Peace Lily', price: 18, image: peaceLily },
  { id: 13, name: 'Boston Fern', price: 10, image: bostonFern },
  { id: 14, name: 'Rubber Plant', price: 20, image: rubberPlant },
  { id: 15, name: 'Snake Plant', price: 15, image:  snakePlant},
  { id: 16, name: 'Peace Lily', price: 18, image: peaceLily },
  { id: 17, name: 'Aloe Vera', price: 8, image: aloeVera},
];

const ProductListingPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-listing-page">
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;