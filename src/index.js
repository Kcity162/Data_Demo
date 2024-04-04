import Handsontable from "handsontable";
import "handsontable/dist/handsontable.min.css";
import "pikaday/css/pikaday.css";

import { data } from "./constants";

import { alignHeaders, addClassesToRows } from "./hooksCallbacks";

const example = document.getElementById("handsontable");

new Handsontable(example, {
  data,
  height: 450,
  colWidths: [100, 54, 100, 100, 100, 74, 125, 145, 70, 70, 70, 90, 140],
  // colHeaders: ["Date", "DQI", "Original", "Corrected", "Proposed", "Rule ID", "Rule", "Description", "Value", "Period", "Actual", "Created", "Effective"],
  nestedHeaders: [
    [{label: 'Group Name', colspan: 5}, {label: 'Rules Breached', colspan: 4}, {label: 'Group Name', colspan: 4}],
    ['Date', 'DQI', 'Original', 'Corrected', 'Proposed', "Rule ID", "Rule", "Description", "Value", "Period", "Actual", "Created", "Effective" ]
  ],
  
  columns: [

   
    { data: 0, type: "text" }, // Date
    { data: 1, type: "text", className: 'text-center'}, // DQI
    { data: 2, type: "numeric", className: 'text-right' }, // Original Read (MHw)
    { data: 3, type: "numeric", className: 'text-right'  }, // Corrected Read (MHw)
    { data: 4, type: "numeric", className: 'text-right'  }, // Proposed (MHw)
    { data: 5, type: "numeric" }, // Rule ID
    { data: 6, type: 'autocomplete',  // Rule
    source: ['DEFAULT_EXP', '9974270001021'],
    strict: true, // if true, allows only values from the `source` array
    allowInvalid: false, // if false, prevents saving a value not present in the `source`
    filter: false // if true, shows only matching suggestions
  
    }, 
    { data: 7,type: 'autocomplete',  // Rule
    source: ['MIN_MWH', 'STEP_CHANGE_MWH'],
    strict: true, // if true, allows only values from the `source` array
    allowInvalid: false, // if false, prevents saving a value not present in the `source`
    },
   
    { data: 8, type: "numeric" }, // Rule Value
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
