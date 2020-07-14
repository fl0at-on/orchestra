import React from "react";
import { useParams } from "react-router";
import { HotTable, HotColumn } from "@handsontable/react";
//import Handsontable from "handsontable";
import "handsontable/dist/handsontable.full.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";

//import SaveIcon from "@material-ui/icons/Save";

const sampleWCdata = [
  {
    dealID: "49656",
    rating: [
      [],
      ["AL", "Kroger Company", "8810", 100000],
      ["AL", "Kroger Company", "8742", 250000],
      ["AL", "Kroger, LLC", "7380", 350000],
      ["AK", "Kroger Company", "8810", 50000],
      ["OH", "Kroger Company", "9139", 3000]
    ]
  },
  {
    dealID: "99999",
    rating: [
      [],
      ["CT", "ABC Company", "8810", 10000],
      ["CT", "ABC Company", "8742", 44000],
      ["MD", "ABC, LLC", "7380", 77000],
      ["MD", "ABC Company", "8810", 60000],
      ["WA", "ABC Company", "9139", 30000]
    ]
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    // ...theme.typography.button,
    // backgroundColor: theme.palette.background.paper,
    // padding: theme.spacing(1),
    maxWidth: 500,
    width: "100%"
  }
}));

export default function WCManualRating() {
  const classes = useStyles();
  const params = useParams();

  return (
    <Paper classNames={classes.root}>
      <Paper>
        <Typography variant="h4" gutterBottom>
          WC Manual Rating
        </Typography>
        <ButtonGroup
          color="primary"
          variant="contained"
          style={{ margin: "10px 10px" }}
        >
          <Button variant="contained" color="default">
            Validate
          </Button>
          <Button variant="contained" color="primary">
            Save
          </Button>
          <Button variant="contained" disabled>
            Submit
          </Button>
        </ButtonGroup>
        <Button variant="contained" disabled>
          Compare
        </Button>
        <div id="hot-app" style={{ marginTop: "10px" }}>
          <ReturnHOTTable dealID={params.dealID} />
        </div>
      </Paper>
    </Paper>
  );
}

const ReturnHOTTable = props => {
  const settings = {
    payrollSettings: {
      title: "Second column header",
      readOnly: false,
      type: "numeric",
      numericFormat: {
        pattern: "$0,0",
        culture: "en-US"
      }
    }
  };
  const WCRatingData = sampleWCdata.filter(
    item => item.dealID === props.dealID
  )[0].rating;

  return (
    <HotTable
      data={WCRatingData}
      colHeaders={true}
      rowHeaders={false}
      columnSorting={true}
      minSpareRows={1}
      fixedRowsTop={1}
      width="100%"
      height="300"
      manualColumnResize={true}
      licenseKey="non-commercial-and-evaluation"
      columnSummary={function() {
        var configArray = [];
        configArray.push({
          sourceColumn: 3,
          destinationColumn: 3,
          destinationRow: 0,
          type: "sum",
          forceNumeric: true
        });
        configArray.push({
          sourceColumn: 0,
          destinationColumn: 0,
          destinationRow: 0,
          type: "",
          forceNumeric: false
        });
        configArray.push({
          sourceColumn: 1,
          destinationColumn: 1,
          destinationRow: 0,
          type: "",
          forceNumeric: false
        });
        configArray.push({
          sourceColumn: 2,
          destinationColumn: 2,
          destinationRow: 0,
          type: "",
          forceNumeric: false
        });
        return configArray;
      }}
    >
      <HotColumn title="State" />
      <HotColumn title="Entity" />
      <HotColumn title="Class Code" />
      <HotColumn
        title="Payroll"
        type="numeric"
        settings={settings.payrollSettings}
        allowEmpty={false}
      />
    </HotTable>
  );
};

// function notStateValidator(item) {
//   console.log(item);
//   return false;
// }
