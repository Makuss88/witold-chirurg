import React from 'react';
import { Switch, Route } from "react-router-dom";

import StartPageTop from './assets/helper/StartPageTop';

import MainSection from './components/MainSection/MainSection';
import GabinetUSG from "./components/MainSection/GabinetUSG/GabinetUSG";
import KimJestesmy from "./components/MainSection/KimJestesmy/KimJestesmy";
import Galeria from './components/MainSection/Galeria/Galeria';
import Contact from "./components/MainSection/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from './components/Navbar/Navbar';
import ImageBG from './assets/helper/ImageBG';

import bgMain from './assets/image/bg.jpg';
import bgAll from './assets/image/bgAll.jpg';

import './App.css';

const RouteWithWrapper = (props) => {
  const { path, component, bg, title } = props;

  return (
    <>
      <ImageBG image={bg} title={title} />
      <Route path={path} component={component} />
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <StartPageTop>
        <Navbar />
        <Switch>
          <RouteWithWrapper path="/gabinet-usg" component={GabinetUSG} bg={bgAll} title="GABINET USG" />
          <RouteWithWrapper path="/kim-jestesmy" component={KimJestesmy} bg={bgAll} title="KIM JESTEŚMY" />,
          <RouteWithWrapper path="/galery" component={Galeria} bg={bgAll} title="GALERIA" />
          <RouteWithWrapper path="/contact" component={Contact} bg={bgAll} title="KONTAKT" />
          <RouteWithWrapper path="/" exact component={MainSection} bg={bgMain} title={""} />
        </Switch>
      </StartPageTop>
    </div>
  );
}

export default App;
