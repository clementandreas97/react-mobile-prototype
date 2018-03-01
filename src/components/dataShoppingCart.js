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
import AddIcon from 'material-ui/svg-icons/content/add-box'
import ClearIcon from 'material-ui/svg-icons/content/clear';
import { blue500, red500, blue50, green300, green400, green500 } from 'material-ui/styles/colors';
import '../img/flaticon.css';
import '../App.css'

const editIcon = <FontIcon className="flaticon-edit-pencil-button orange"></FontIcon>;
const deleteIcon = <FontIcon className="flaticon-trash red"></FontIcon>;

const tableData = [
{
  nama: 'Obat A',
  jumlah: '1',
  harga: 'Rp. 30,000',
},
{
  nama: 'Obat B',
  jumlah: '2',
  harga: 'Rp. 10,000',
},
];

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */

class TableShoppingCart extends Component {
  constructor(props) {
    super(props);
  }
  editDelete(row, column) {
    if (column == '4') {
      //eslint-disable-next-line
      if (confirm('Kurangi jumlah obat dalam keranjang?')) {
        alert('Obat berhasil dikurangkan');
      }
    } else if (column == '3') {
      //eslint-disable-next-line
      if (confirm('Tambahkan jumlah obat dalam keranjang?')) {
        alert('Obat berhasil ditambahkan');
      }
    }
  }
  render() {
    return (
      <Table
        height={200}
        width={100}
        fixedHeader={true}
        fixedFooter={true}
        onCellClick={this.editDelete}
        style={{ tableLayout: 'auto'}}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          selectable={false}>
          <TableRow>
            <TableHeaderColumn className="first-column">Obat</TableHeaderColumn>
            <TableHeaderColumn className="second-column">Jml</TableHeaderColumn>
            <TableHeaderColumn className="third-column">Harga</TableHeaderColumn>
            <TableHeaderColumn className="fourth-column"></TableHeaderColumn>
            <TableHeaderColumn className="sixth-column"></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          stripedRows={true}
          selectable={false}>
          {tableData.map( (row, index) => (
            <TableRow key={index+1}>
              <TableRowColumn className="first-column">{row.nama}</TableRowColumn>
              <TableRowColumn className="second-column">{row.jumlah}</TableRowColumn>
              <TableRowColumn className="third-column">{row.harga}</TableRowColumn>
              <TableRowColumn className="fourth-column" style={{width:3}}><AddIcon color={green500} style={{widht : '30', height : '30'}}/></TableRowColumn>
              <TableRowColumn className="sixth-column"  style={{width:3}}><ClearIcon color={red500} style={{widht : '30', height : '30'}}/></TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default TableShoppingCart;