import React from 'react';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio"
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
