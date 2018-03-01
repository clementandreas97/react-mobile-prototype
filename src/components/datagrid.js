import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';
import '../img/flaticon.css';
import '../App.css'
import { blue500, red500, blue50, orange500, green300, green400, green500 } from 'material-ui/styles/colors';
import EditIcon from 'material-ui/svg-icons/image/edit'
import DeleteIcon from 'material-ui/svg-icons/content/delete-sweep'

const editIcon = <FontIcon className="flaticon-edit-pencil-button orange"></FontIcon>;
const deleteIcon = <FontIcon className="flaticon-trash red"></FontIcon>;

const tableData = [
{
  tanggal: '12/12/2017',
  penyakit: 'Demam',
},
{
  tanggal: '01/12/2017',
  penyakit: 'Batuk pilek',
},
{
  tanggal: '10/10/2017',
  penyakit: 'Pusing',
},
{
  tanggal: '07/08/2017',
  penyakit: 'Diare',
},
{
  tanggal: '29/06/2017',
  penyakit: 'Maag',
},
{
  tanggal: '04/06/2017',
  penyakit: 'Sakit perut',
},
];

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */

class TableExampleSimple extends Component {
  constructor(props) {
    super(props);
  }
  editDelete(row, column) {
    if (column == '3') {
      window.editRecord('editRecord');
    } else if (column == '4') {
      //eslint-disable-next-line
      if (confirm('Apakah anda yakin ingin menghapus record ke ' + (row + 1) + '?')) {
        alert('Record ke ' + (row + 1) + ' berhasil dihapus');
      }
    }
  }
  render() {
    return (
      <Table
        height={250}
        fixedHeader={true}
        fixedFooter={true}
        onCellClick={this.editDelete}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          selectable={false}>
          <TableRow>
            <TableHeaderColumn className="first-column">No</TableHeaderColumn>
            <TableHeaderColumn className="second-column">Tanggal</TableHeaderColumn>
            <TableHeaderColumn className="third-column">Penyakit</TableHeaderColumn>
            <TableHeaderColumn className="fourth-column"></TableHeaderColumn>
            <TableHeaderColumn className="fifth-column"></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          stripedRows={true}
          selectable={false}>
          {tableData.map( (row, index) => (
            <TableRow key={index+1}>
              <TableRowColumn className="first-column">{index+1}</TableRowColumn>
              <TableRowColumn className="second-column">{row.tanggal}</TableRowColumn>
              <TableRowColumn className="third-column">{row.penyakit}</TableRowColumn>
              <TableRowColumn className="fourth-column"><EditIcon color={orange500} style={{widht : '30', height : '30'}}/></TableRowColumn>
              <TableRowColumn className="fifth-column"><DeleteIcon color={red500} style={{widht : '30', height : '30'}}/></TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default TableExampleSimple;