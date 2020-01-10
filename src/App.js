import React from 'react';
import CarouselOli from './components/carouseloli/carouseloli'
import ProductPages from './pages/productpages/productpages'
import BodyWeb from './pages/bodyweb/bodyweb'
import Header from './pages/header/header'
import './App.css';

function App() {
  return (
    <div >
      <Header/>
      <CarouselOli/>
      <ProductPages/>
      <BodyWeb/>
      
    </div>
  );
}

export default App;
