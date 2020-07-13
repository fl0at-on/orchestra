import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Paper from "@material-ui/core/Paper";

import WCManualRating from "./WCManualRating.js";

export default function DataCenter() {
  let match = useRouteMatch();
  return (
    <Paper style={{ marginLeft: "auto", marginRight: "auto" }}>
      <h2>Data Center</h2>

      <ul>
        <li>
          <Link to={`${match.url}/manual-rating/wc`}>WC Manual Rating</Link>
        </li>
        <li>
          <Link to={`${match.url}/manual-rating/gl`}>GL Manual Rating</Link>
        </li>
        <li>
          <Link to={`${match.url}/manual-rating/al`}>AL Manual Rating</Link>
        </li>
        <li>
          <Link to={`${match.url}/manual-rating/al`}>APD Manual Rating</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/manual-rating/wc`}>
          <WCManualRating />
        </Route>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>No account found. Please select a specifc account to view.</h3>
        </Route>
      </Switch>
    </Paper>
  );
}
function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
