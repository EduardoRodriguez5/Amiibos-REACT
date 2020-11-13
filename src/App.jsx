import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AmiibosPage from "./pages/AmiibosPage/AmiibosPage";
import HomePage from "./pages/HomePage/HomePage";
import GameSeriesPage from "./pages/GameSeriesPage/GameSeriesPage"
import Menu from "./shared/Menu/Menu";
import ContactPage from "./pages/ContactPage/ContactPage";
import DetailPage from "./pages/DetailPage/DetailPage"
function App() {


  return (
    <Router>

          <Menu/>
          <div  className="container">
          <Switch>
              <Route path="/amiibos/:tail">
                  <DetailPage/>
              </Route>
              <Route path="/amiibos">
                  <AmiibosPage/>
              </Route>
              <Route path="/GameSeries">
                  <GameSeriesPage/>
              </Route>
              <Route path="/Contact">
                  <ContactPage/>
              </Route>
              <Route path="/">
                  <HomePage/>
              </Route>
          </Switch>
          </div>
    </Router>
  );
}
export default App;
