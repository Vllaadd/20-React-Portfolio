import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav.js';
import Banner from './components/Banner.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path='/home' component={Banner} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
