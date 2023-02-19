import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import katie from './images/katie-zaferes.png';
import data from './components/data.js';

function App() {
  const cardData = data.map((card) => {
    return (
      <Card
        key={card.id}
        {...card}
        img={card.id === 1 ? katie : card.id === 2 ? katie : katie}
        // soldOut={card.openSpots}
        // rating={`${card.stats.rating}`}
        // reviewCount={card.stats.reviewCount}
        // country="USA"
        // title={card.title}
        // price={card.price}
        // location={card.location}
      />
    );
  });
  return (
    <div className="content">
      <Navbar />
      <Hero />
      <div className="cards">{cardData}</div>
    </div>
  );
}

export default App;
