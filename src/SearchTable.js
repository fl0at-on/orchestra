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
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    width: 800,
    marginLeft: "auto",
    marginRight: "auto"
  }
});

export default function SearchTable(props) {
  const AccountNames = props.props;

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h2" gutterBottom>
        Account Selection
      </Typography>
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
  const { name, effectiveDate, dealID } = props.props;
  return (
    <TableRow className="account-table-row" hover>
      <TableCell component="th" scope="row">
        {dealID}
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{effectiveDate}</TableCell>
      <TableCell>
        <NavLink
          style={{ textDecoration: "none" }}
          to={`/datacenter/${dealID}`}
        >
          <Button variant="outlined" color="primary">
            Data Center
          </Button>
        </NavLink>
      </TableCell>
      <TableCell>
        <NavLink
          style={{ textDecoration: "none" }}
          to={`/coveragecrafter/${dealID}`}
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
