import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchAppBar from "./src/SearchAppBar.js";
import SearchTable from "./src/SearchTable.js";
import DataCenter from "./src/DataCenter/DataCenter.js";
import CoverageCrafter from "./src/CoverageCrafter.js";

const AccountNames = [
  { name: "The Kroger Co.", dealID: "49656", effectiveDate: "1/25/2020" },
  { name: "ABC Company", dealID: "99999", effectiveDate: "6/1/2020" }
];

export default function Routing() {
  return (
    <Router>
      <div>
        <SearchAppBar />
        <Switch>
          <Route path="/datacenter/:dealID">
            <DataCenter props={AccountNames} />
          </Route>
          <Route path="/coveragecrafter/:dealID">
            <CoverageCrafter props={AccountNames} />
          </Route>
          <Route path="/">
            <SearchTable props={AccountNames} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
