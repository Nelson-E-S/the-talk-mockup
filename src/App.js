import React from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css';

import Navbar from './components/NavBar';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}

export default App;