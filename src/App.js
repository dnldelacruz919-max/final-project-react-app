import React from 'react';

import Navbar from './components/Navbar';
import PlantList from './components/PlantList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App" id="home">
      <Navbar />

      <main>
        <section className="hero-section">
          <p className="hero-label">
            WELCOME TO GREEN HAVEN
          </p>

          <h1>
            Bring Nature <br />
            Into Your Home
          </h1>

          <p>
            Discover beautiful household plants
            and create your own green sanctuary.
          </p>

          <a href="#products" className="hero-button">
            Explore Plants
          </a>
        </section>

        <PlantList />

        <ShoppingCart />
      </main>

      <footer id="about">
        <h3>Green Haven</h3>
        <p>Bringing nature closer to your home.</p>
        <p>© 2026 Green Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;