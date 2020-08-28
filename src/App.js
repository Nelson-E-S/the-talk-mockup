import React from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css';

import Navbar from './components/NavBar';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';
import SectionSix from './components/SectionSix';
import Footer from './components/Footer';
import Copy from './components/Copy';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
      <Copy />
    </div>
  );
}

export default App;