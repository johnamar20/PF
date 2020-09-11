import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Signup from './pages/Signup';




function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route  path="/" exact component={Home} />
      <Route  path="/Services" component={Services} />
      <Route  path="/Products" component={Products} />
      <Route  path="/Signup" component={Signup} />
      
     
      </Switch>
    </Router>
    </>
  );
}

export default App;
