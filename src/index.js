import Handsontable from "handsontable";
import "handsontable/dist/handsontable.min.css";
import "pikaday/css/pikaday.css";

import { data } from "./constants";

import { alignHeaders, addClassesToRows } from "./hooksCallbacks";

const example = document.getElementById("handsontable");

new Handsontable(example, {
  data,
  height: 450,
  colWidths: [170, 156, 222, 130, 130, 120, 120],
  colHeaders: ["original_reading_ct_mwh", "dqi", "rule_value", "settlement_date", "rule_type", "settlement_period", "settlement_start_datetime", "actual_estimate_indicator", "rule_description", "rule_created_date", "rule_effective_from", "rule_effective_to", "rule_id", "weekday"],
  columns: [
    { data: 1, type: "text" },
    { data: 2, type: "text" },
    { data: 3, type: "text" },
    { data: 4, type: "text" },
    { data: 5, type: "text" },
    { data: 6, type: "text" },
    { data: 7, type: "text" },
    { data: 8, type: "text" },
    { data: 9, type: "text" },
    { data: 10, type: "text" },
    { data: 11, type: "text" },
    { data: 12, type: "text" },
    { data: 13, type: "text" },
  
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
