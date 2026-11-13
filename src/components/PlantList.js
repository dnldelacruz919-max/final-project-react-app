import React from 'react';
import { useSelector } from 'react-redux';
import PlantCard from './PlantCard';

function PlantList() {
  const plants = useSelector(
    state => state.plants.plants
  );

  return (
    <section className="products-section" id="products">
      <div className="section-heading">
        <p>OUR COLLECTION</p>
        <h2>Find Your Perfect Plant</h2>
        <span>
          Bring life and freshness into your home.
        </span>
      </div>

      <div className="plant-grid">
        {plants.map(plant => (
          <PlantCard
            key={plant.id}
            plant={plant}
          />
        ))}
      </div>
    </section>
  );
}

export default PlantList;