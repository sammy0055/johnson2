import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Media from "./components/Media";
import Section_1 from "./components/Section_1";
import Skincare from "./components/Skincare";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <div>
              <Header />
              <Banner />
              <Section_1 />
              <Skincare />
              <Media />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
