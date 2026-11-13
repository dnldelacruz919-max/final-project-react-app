import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlantCard from './PlantCard';
import { setSelectedCategory } from '../redux/plantSlice';

function PlantList() {
  const plants = useSelector(
    state => state.plants.plants
  );

  const dispatch = useDispatch();

    const selectedCategory = useSelector(
    state => state.plants.selectedCategory
    );

    const categories = [
    'All Plants',
    'Indoor Plants',
    'Tropical Plants',
    'Flowering Plants',
    'Hanging Plants',
    'Succulents'
    ];

    const filteredPlants =
    selectedCategory === 'All Plants'
    ? plants
    : plants.filter(
        plant => plant.category === selectedCategory
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

      <div className="category-filters">
        {categories.map(category => (
            <button
            key={category}
            className={
                selectedCategory === category
                ? 'category-button active'
                : 'category-button'
            }
            onClick={() =>
                dispatch(setSelectedCategory(category))
            }
            >
            {category}
            </button>
        ))}
        </div>
      <div className="plant-grid">
      {filteredPlants.map(plant => (
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