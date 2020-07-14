import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchAppBar from "./src/SearchAppBar.js";
import SearchTable from "./src/SearchTable.js";
import DataCenter from "./src/DataCenter/DataCenter.js";
import CoverageCrafter from "./src/CoverageCrafter.js";

export default function Routing() {
  return (
    <Router>
      <div>
        <SearchAppBar />
        <Switch>
          <Route path="/datacenter">
            <DataCenter />
          </Route>
          <Route path="/coveragecrafter">
            <CoverageCrafter />
          </Route>
          <Route path="/">
            <SearchTable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
