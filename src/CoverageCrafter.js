import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    // ...theme.typography.button,
    // backgroundColor: theme.palette.background.paper,
    // padding: theme.spacing(1),
    maxWidth: 1200,
    width: "100%"
  }
}));

export default function CoverageCrafter(props) {
  let match = useRouteMatch();
  const classes = useStyles();

  return (
    <Paper classNames={classes.root}>
      <Typography variant="h2">Coverage Crafter </Typography>
      <Typography variant="h3" gutterBottom>
        Policy Selection{" "}
      </Typography>
      <Typography variant="h5">
        <Link to={`${match.url}/standard-forms`}>Standard Forms</Link>
      </Typography>

      <Typography variant="h5">
        <Link to={`${match.url}/manuscripts`}>Manuscripts</Link>
      </Typography>

      <Switch>
        <Route path={`${match.path}?lob=wc`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <Typography variant="h6">
            No account found. Please select a specific account to view first.
          </Typography>
        </Route>
      </Switch>
    </Paper>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
