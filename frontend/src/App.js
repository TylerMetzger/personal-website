import React, { useState } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.less";

import MainPage from "./views/MainPage/MainPage.js";
import NotFound from "./views/NotFound/NotFound.js";
import Header from "./components/Header/Header.js";
import Footer from './components/Footer/Footer.js';

const App = () => {
  const [toggled, setToggled] = useState(false)

  return (
    <div>
      <Header setToggled={setToggled} />
      <Switch>
        <Route exact path="/" render={() => <MainPage toggled={toggled} />} />
        <Route render={() => <NotFound toggled={toggled} />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
