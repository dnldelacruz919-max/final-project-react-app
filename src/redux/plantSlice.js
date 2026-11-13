import { createSlice } from '@reduxjs/toolkit';
import snakePlantImage from '../images/snake-plant.jpg';
import monsteraImage from '../images/monstera.jpg';
import peaceLilyImage from '../images/peace-lily.jpg';
import goldenPothosImage from '../images/golden-pothos.jpg';
import aloeVeraImage from '../images/aloe-vera.jpg';
import zzPlantImage from '../images/zz-plant.jpg';

const initialState = {
  plants: [
    {
      id: 1,
      name: 'Snake Plant',
      category: 'Indoor Plants',
      price: 350,
      description: 'A beautiful, low-maintenance indoor plant.',
      image: snakePlantImage
    },
    {
      id: 2,
      name: 'Monstera Deliciosa',
      category: 'Tropical Plants',
      price: 550,
      description: 'A tropical plant with beautiful split leaves.',
      image: monsteraImage
    },
    {
      id: 3,
      name: 'Peace Lily',
      category: 'Flowering Plants',
      price: 400,
      description: 'An elegant plant with lovely white flowers.',
      image: peaceLilyImage
    },
    {
      id: 4,
      name: 'Golden Pothos',
      category: 'Hanging Plants',
      price: 250,
      description: 'A lovely trailing plant for your home.',
      image: goldenPothosImage
    },
    {
      id: 5,
      name: 'Aloe Vera',
      category: 'Succulents',
      price: 200,
      description: 'A popular succulent with thick green leaves.',
      image: aloeVeraImage
    },
    {
      id: 6,
      name: 'ZZ Plant',
      category: 'Indoor Plants',
      price: 450,
      description: 'A hardy plant with glossy green leaves.',
      image: zzPlantImage
    }
  ]
};

const plantSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {}
});

export default plantSlice.reducer;