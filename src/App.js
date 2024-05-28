import React from 'react';

import Header from './components/Header';
import Welcome from './sections/Welcome';
import OurBagels from './sections/OurBagels';
import AboutUs from './sections/AboutUs';
import Slogan from './sections/Slogan';
import Location from './sections/Location';
import FollowUs from './sections/FollowUs';
import BagelCarousel from './components/Carousel';

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <OurBagels />
      <AboutUs />
      <Slogan />
      <Location />
      <FollowUs />
      <BagelCarousel />
    </>
  );
}

export default App;
