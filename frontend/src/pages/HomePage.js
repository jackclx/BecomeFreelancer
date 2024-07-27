import React, { useState } from 'react';
import Banner from '../components/HomePage/Banner';
import Categories from '../components/HomePage/Categories';
import HowItWorks from '../components/HomePage/HowItWorks';
import JoinUs from '../components/HomePage/JoinUs';
import Reviews from '../components/HomePage/Reviews';


function HomePage() {

  return (
    <main>
      <div>
        <Banner />
        <Categories />
        <HowItWorks />
        <JoinUs />
        <Reviews />
      </div>
    </main>
  );
}

export default HomePage;
