import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import NoRoute from "../components/NoRoute";

export default props => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />

      {/* IF NO ROUTE        */}
      <Route component={NoRoute} />
    </Switch>
  </BrowserRouter>
);
