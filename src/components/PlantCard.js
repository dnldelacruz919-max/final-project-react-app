import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function PlantCard({ plant }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="plant-card">
      <div className="plant-image">
        {plant.image ? (
          <img src={plant.image} alt={plant.name} />
        ) : (
          <span>🌿</span>
        )}
      </div>

      <div className="plant-details">
        <p className="plant-category">
          {plant.category}
        </p>

        <h3>{plant.name}</h3>

        <p className="plant-description">
          {plant.description}
        </p>

        <div className="plant-card-bottom">
          <span className="plant-price">
            ₱{plant.price.toFixed(2)}
          </span>

          <button onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;