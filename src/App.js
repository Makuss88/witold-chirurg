import React from 'react';
import { Switch, Route } from "react-router-dom";

import GabinetUSG from "./components/MainSection/GabinetUSG/GabinetUSG";
import KimJestesmy from "./components/MainSection/KimJestesmy/KimJestesmy";
import Galeria from './components/MainSection/Galeria/Galeria';
import Contact from "./components/MainSection/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/MainSection/MainSection';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/gabinet-usg" component={GabinetUSG} />
        <Route path="/kim-jestesmy" component={KimJestesmy} />,
        <Route path="/galery" component={Galeria} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={MainSection} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
