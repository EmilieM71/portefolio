import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './parts/Header';
import Footer from './parts/Footer';
import Home from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
