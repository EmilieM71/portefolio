import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './parts/Header';
import Footer from './parts/Footer';
import Authentication from './pages/Authentication';
import AdminCategory from './components/AdminCategory';
import Home from './pages/HomePage';
import Portefolio from './pages/Portefolio';
import Trainning from './pages/Trainning';
import Contact from './pages/Contact';
import AuthContext from './contexts/auth';
import Administration from './components/Administration';

import './App.css';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/LogIn">
          <Authentication />
        </Route>
        <Route path="/category">
          <AdminCategory user={user} />
        </Route>
        <Route path="/administration">
          <Administration user={user} />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Portefolio">
          <Portefolio />
        </Route>
        <Route path="/Trainning">
          <Trainning />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
