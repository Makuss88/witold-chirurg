import React from 'react';
import { Switch, Route } from "react-router-dom";

import GabinetMasazu from "./components/MainSection/GabinetMasazu/GabinetMasazu";
import KimJestesmy from "./components/MainSection/KimJestesmy/KimJestesmy";
import Contact from "./components/MainSection/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/gabinet-masazu" component={GabinetMasazu} />
        <Route path="/kim-jestesmy" component={KimJestesmy} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={MainSection} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
