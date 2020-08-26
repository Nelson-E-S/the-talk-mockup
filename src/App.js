import React from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css';

import Navbar from './components/NavBar';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default App;