import Handsontable from "handsontable";
import "handsontable/dist/handsontable.min.css";
import "pikaday/css/pikaday.css";

import { data } from "./constants";

import { alignHeaders, addClassesToRows } from "./hooksCallbacks";

const example = document.getElementById("handsontable");

new Handsontable(example, {
  data,
  height: 450,
  colWidths: [100, 54, 100, 100, 100, 74, 120, 145, 70, 70, 70, 100, 150],
  colHeaders: ["Date", "DQI", "Original", "Corrected", "Proposed", "Rule ID", "Rule", "Description", "Value", "Period", "Actual", "Created", "Effective"],
  // nestedHeaders: [
  //   [{label: 'Group A', colspan: 2}, {label: 'B-C', colspan: 2}, 'D'],
  //   ['E', 'F', 'G', 'H']
  // ],
  
  columns: [

    // Users rated as critical
    { data: 0, type: "date" }, // Date
    { data: 1, type: "text" }, // DQI
    { data: 2, type: "text" }, // Original Read (MHw)
    { data: 3, type: "text" }, // Corrected Read (MHw)
    { data: 4, type: "text" }, // Proposed (MHw)
    { data: 5, type: "text" }, // Rule ID
    { data: 6, type: "text" }, // Rule
    { data: 7, type: "text" }, // Rule Description

    // Users reated as important
    { data: 8, type: "text" }, // Rule Value
    { data: 9, type: "text" }, // Period
    // { data: 10, type: "text" }, // Start date
    // { data: 11, type: "text" }, // Start time
    { data: 12, type: "text" }, // Actual
    { data: 13, type: "text" }, // Created
    { data: 14, type: "text" }, // Effective
    // { data: 15, type: "text" }, // weekday
  
  ],
  dropdownMenu: true,
  hiddenColumns: {
    indicators: true,
  },
  contextMenu: true,
  multiColumnSorting: true,
  filters: true,
  rowHeaders: true,
  manualRowMove: true,
  autoWrapCol: true,
  autoWrapRow: true,
  afterGetColHeader: alignHeaders,
  beforeRenderer: addClassesToRows,
  licenseKey: "non-commercial-and-evaluation",
});
