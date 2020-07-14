import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const AccountNames = [
  { name: "The Kroger Co.", dealID: "49656", effectiveDate: "1/25/2020" },
  { name: "ABC Company", dealID: "99999", effectiveDate: "6/1/2020" }
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto"
  }
});

export default function SearchTable() {
  const classes = useStyles();
  return (
    <Paper className="App">
      <h1>Account Selection</h1>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="account table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Deal ID</TableCell>
              <TableCell>Account Name</TableCell>
              <TableCell>Effective Date</TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {AccountNames.map((item, idx) => {
              return <AccountRow key={idx} props={item} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

const AccountRow = props => {
  props = props.props;
  return (
    <TableRow className="account-table-row" hover>
      <TableCell component="th" scope="row">
        {props.dealID}
      </TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.effectiveDate}</TableCell>
      <TableCell>
        <NavLink
          style={{ textDecoration: "none" }}
          to={`/datacenter?dealID=${props.dealID}`}
        >
          <Button variant="outlined" color="primary">
            Data Center
          </Button>
        </NavLink>
      </TableCell>
      <TableCell>
        <NavLink
          style={{ textDecoration: "none" }}
          to={`/coveragecrafter?${props.dealID}`}
        >
          <Button variant="outlined" color="primary">
            Coverage
          </Button>
        </NavLink>
      </TableCell>
      <TableCell>
        <Button variant="outlined" color="primary" disabled>
          The Hub
        </Button>
      </TableCell>
    </TableRow>
  );
};
