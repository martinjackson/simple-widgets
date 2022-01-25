
/* taken from https://react-pdf.org/ */
/* https://github.com/diegomura/react-pdf/issues/487  skelchie commented on Feb 20, 2019 */

import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

export const underline = {
  borderStyle: "solid",
  borderWidth: 1,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopWidth: 0,
}

export const nopad = {
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
}

export const box = {
    borderStyle: "solid",
    borderWidth: 1,
}

export const leftJustify = {
  width:"95%",
}

// Create styles
export const styleSheet = StyleSheet.create({
  page: {
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "white",
    margin: "2mm 2mm 2mm 2mm",   // US Letter size Landscape 11" x 8.5" with an unprintable border of 2cm
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    flexDirection: "row",
    width: "94%",
  },
  rightJustify: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  table: {
    display: "table",
    width: "97%",
    marginBottom: "2em",
    borderCollapse: 'collapse',
    borderSpacing: 0,
    /* ...box */
  },
  tableRow: {
    display: 'table-row',
    width: "100%",
    flexDirection: "row",
  },
  tableCol: {
    display: 'table-cell',
    minWidth: "20%",              // this is a hack an assumes exactly 5 columns
    /* ...box */
  },
  headerCol: {
    display: 'table-cell',
    minWidth: "20%",              // this is a hack an assumes exactly 5 columns
    /* ...box */
  },
  tableCell: {margin: "auto", marginTop: 0, width: '100%', fontSize: 8, },
  headerCell: {margin: "auto", marginTop: 0, width: '100%', fontSize: 10, fontWeight: "bold", ...underline },
});

export const Table = (props) => (<View style={props.style || styleSheet.table}>{props.children}</View>);
export const TRow  = (props) => (<View style={props.style || styleSheet.tableRow}>{props.children}</View>);
export const Col   = (props) => (<View style={props.style || styleSheet.tableCol}>{props.children}</View>);
export const HCol  = (props) => (<View style={props.style || styleSheet.headerCol}>{props.children}</View>);
export const Cell  = (props) => (<Text style={props.style || styleSheet.tableCell}>{props.children}</Text>);

const defCalcWidth = (idx, cnt) => {
  // console.log(`defCalcWidth(${idx},${cnt})`);
  if (cnt < 1)
     cnt = 1;
  return 100 / cnt                      // all column widths will be equal
}

export const DataRow = ({arr, style=styleSheet.tableRow, calcWidth=defCalcWidth}) => {
  return (<TRow style={style}>
      { arr.map((one,i) => {
         const cStyle = {...styleSheet.tableCol}
         let w = calcWidth(i,arr.length)
         cStyle.minWidth = `${w}%`;
         cStyle.maxWidth = `${w}%`;
         // console.log(i,'dr cStyle.minWidth:', cStyle.minWidth);
         return (<Col style={cStyle} key={i}><Text style={styleSheet.tableCell}>{one}</Text></Col>)
        })
      }
    </TRow>);
}

export const HeaderRow = ({arr, style=styleSheet.headerCell, calcWidth=defCalcWidth}) => {
  return (<TRow>
      { arr.map((one,i) => {
        const cStyle = {...styleSheet.headerCol}
         let w = calcWidth(i,arr.length)
         cStyle.minWidth = `${w}%`;
         cStyle.maxWidth = `${w}%`;
         // console.log(i,'hr cStyle.minWidth:', cStyle.minWidth);
         return (<HCol style={cStyle} key={i}><Text style={style}>{one}</Text></HCol>)
        })
      }
    </TRow>);
}

export const count = (n) => ([ ...Array(n).keys() ].map(n => n+1))

export const Example = (props) =>
  (
  <View>
  <View style={styleSheet.section}>
    <Text>{props.name}</Text>
  </View>
  <Table>
    <HeaderRow arr={['Product', 'Type', 'Period', 'Price', 'Extra']} />
    <DataRow arr={['React-PDF', '3 User ', '2019-02-20 - 2020-02-19', '5€', '']} />
    <TRow>
      <Col><Cell>Hello</Cell></Col>
      <Col><Cell>2</Cell></Col>
      <Col><Cell>3</Cell></Col>
      <Col><Cell>5€</Cell></Col>
    </TRow>
    {count(20).map(num => (<DataRow arr={[''+num, 'b', 'c', 'd', 'e']} />) )}
  </Table>
  </View>);

