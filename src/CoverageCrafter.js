import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Paper from "@material-ui/core/Paper";

export default function CoverageCrafter() {
  let match = useRouteMatch();

  return (
    <Paper>
      <h2>Coverage Crafter</h2>
      <h3>Policy Selection</h3>

      <ul>
        <li>
          <Link to={`${match.url}/standard-forms`}>Standard Forms</Link>
        </li>
        <li>
          <Link to={`${match.url}/manuscripts`}>Manuscripts</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId?lob=wc`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>
            No account found. Please select a specific account to view first.
          </h3>
        </Route>
      </Switch>
    </Paper>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
