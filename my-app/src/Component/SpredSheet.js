import * as React from "react";
import {
  SpreadsheetComponent,
  SheetsDirective,
  SheetDirective,
  ColumnsDirective,
  RangesDirective,
  RangeDirective,
  RowsDirective,
  RowDirective,
  CellsDirective,
  CellDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-spreadsheet";
import { data, sdata } from "../Data/DataSource";
/* import { defaultData } from "./data"; */
/* import { SampleBase } from "../common/sample-base"; */

/**
 * Default Spreadsheet sample
 */

export class SpredSheet extends SpreadsheetComponent {
  constructor() {
    super(...arguments);
    this.boldRight = { fontWeight: "bold", textAlign: "right" };
    this.bold = { fontWeight: "bold" };
  }
  onCreated() {
    this.spreadsheet.cellFormat(
      { fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },
      "A1:F1"
    );
    this.spreadsheet.numberFormat("$#,##0.00", "F2:F31");
  }
  render() {
    return (
      <div className="control-pane">
        <div className="control-section spreadsheet-control">
          <SpreadsheetComponent
            openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
            saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"
            ref={(ssObj) => {
              this.spreadsheet = ssObj;
            }}
            created={this.onCreated.bind(this)}
          >
            <SheetsDirective>
              <SheetDirective name="Car Sales Report">
                <RangesDirective>
                  <RangeDirective dataSource={data}></RangeDirective>
                </RangesDirective>
                <RowsDirective>
                  <RowDirective index={30}>
                    <CellsDirective>
                      <CellDirective
                        index={4}
                        value="Total Amount:"
                        style={this.boldRight}
                      ></CellDirective>
                      <CellDirective
                        formula="=SUM(F2:F30)"
                        style={this.bold}
                      ></CellDirective>
                    </CellsDirective>
                  </RowDirective>
                </RowsDirective>
                <ColumnsDirective>
                  <ColumnDirective width={180}></ColumnDirective>
                  <ColumnDirective width={130}></ColumnDirective>
                  <ColumnDirective width={130}></ColumnDirective>
                  <ColumnDirective width={180}></ColumnDirective>
                  <ColumnDirective width={130}></ColumnDirective>
                  <ColumnDirective width={120}></ColumnDirective>
                </ColumnsDirective>
              </SheetDirective>
            </SheetsDirective>
          </SpreadsheetComponent>
        </div>
      </div>
    );
  }
}
