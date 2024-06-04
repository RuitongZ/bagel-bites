import React from 'react';

import Header from './components/Header';
import Welcome from './sections/Welcome';
import OurBagels from './sections/OurBagels';
import AboutUs from './sections/AboutUs';
import Slogan from './sections/Slogan';
import Location from './sections/Location';
import FollowUs from './sections/FollowUs';
import Footer from './components/Footer';
import ScrollToTop from './ui/ScrollToTop';

function App() {
  return (
    <>
      <div>
        <Header />
        <div id='welcome'>
          <Welcome />
        </div>
        <div id='our-bagels'>
          <OurBagels />
        </div>
        <div id='about'>
          <AboutUs />
        </div>
        <Slogan />
        <div id='location'>
          <Location />
        </div>
        <div id='follow-us'>
          <FollowUs />
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
