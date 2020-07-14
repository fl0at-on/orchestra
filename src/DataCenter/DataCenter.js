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
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import WCManualRating from "./WCManualRating.js";

const useStyles = makeStyles(theme => ({
  root: {
    // ...theme.typography.button,
    // backgroundColor: theme.palette.background.paper,
    // padding: theme.spacing(1),
    //maxWidth: 1200,
    width: "100%"
  }
}));

export default function DataCenter() {
  //const params = useParams();
  const classes = useStyles();
  let match = useRouteMatch();
  return (
    <Paper
      className={classes.root}
      style={{ marginLeft: "auto", marginRight: "auto" }}
    >
      <Typography variant="h2" gutterBottom>
        Data Center
      </Typography>
      <Card>
        <Typography variant="h4" gutterBottom>
          Workers' Compensation
        </Typography>
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
        <Typography variant="h4" gutterBottom>
          General Liability
        </Typography>
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
        <Typography variant="h4" gutterBottom>
          Automobile Liability
        </Typography>
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
          <h4>No account found. Please select a specific account to view.</h4>
        </Route>
      </Switch>
    </Paper>
  );
}
function Topic() {
  let { topicId } = useParams();
  return <h4>Requested topic ID: {topicId}</h4>;
}
