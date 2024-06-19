import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;

