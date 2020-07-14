import React from "react";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import WCManualRating from "./WCManualRating.js";

export default function DataCenter() {
  //const params = useParams();
  let match = useRouteMatch();
  return (
    <Paper style={{ marginLeft: "auto", marginRight: "auto" }}>
      <h2>Data Center</h2>
      <Card>
        <h3>Workers' Compensation</h3>
        <ButtonGroup
          color="default"
          variant="contained"
          style={{ margin: "10px 10px" }}
        >
          <NavLink to={`${match.url}/manual-rating/wc`}>
            <Button>Manual Rating</Button>
          </NavLink>

          <Button disabled>
            <NavLink to={`${match.url}/manual-rating/wc`}>Loss Rating</NavLink>
          </Button>
        </ButtonGroup>
      </Card>
      <Card>
        <h3>General Liability</h3>
        <ButtonGroup
          color="default"
          variant="contained"
          style={{ margin: "10px 10px" }}
        >
          <Button disabled>
            <NavLink to={`${match.url}/manual-rating/gl`}>
              Manual Rating
            </NavLink>
          </Button>
          <Button disabled>
            <NavLink to={`${match.url}/manual-rating/gl`}>Loss Rating</NavLink>
          </Button>
        </ButtonGroup>
      </Card>
      <Card>
        <h3>Automobile Liability</h3>
        <ButtonGroup
          color="default"
          variant="contained"
          style={{ margin: "10px 10px" }}
        >
          <Button disabled>
            <NavLink to={`${match.url}/manual-rating/al`}>
              Manual Rating
            </NavLink>
          </Button>
          <Button disabled>
            <NavLink to={`${match.url}/manual-rating/al`}>Loss Rating</NavLink>
          </Button>
        </ButtonGroup>
      </Card>
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
