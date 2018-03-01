import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import AddIcon from 'material-ui/svg-icons/content/add-box'
import FontIcon from 'material-ui/FontIcon';
import { blue500, red500, blue50, green300, green400, green500 } from 'material-ui/styles/colors';
import '../img/flaticon.css';
import '../App.css'
import Modal from './modal.js';

const editIcon = <FontIcon className="flaticon-edit-pencil-button orange"></FontIcon>;
const deleteIcon = <FontIcon className="flaticon-trash red"></FontIcon>;

const tableData = [
{
  nama: 'Obat A',
  deskripsi: 'Meredakan Demam',
  syarat: 'Antibiotik - 3x Sehari, Setelah Makan',
  harga: 'Rp. 30,000',
},
{
  nama: 'Obat B',
  deskripsi: 'Meredakan Batuk dan Radang Tenggorokkan',
  syarat: 'Antibiotik - 3x Sehari, Sebelum Makan',
  harga: 'Rp. 50,000',
},
{
  nama: 'Obat C',
  deskripsi: 'Meredakan Pilek dan Sakit Kepala',
  syarat: 'Komplemen - 1x Sehari, Setelah Makan',
  harga: 'Rp. 65,000',
},
{
  nama: 'Obat D',
  deskripsi: 'Meningkatkan Asupan Vitamin C Keseharian',
  syarat: 'Suplemen - 1x Sehari, Setelah Makan',
  harga: 'Rp. 100,000',
},
{
  nama: 'Obat E',
  deskripsi: 'Meningkatkan Asupan Vitamin B1 Keseharian',
  syarat: 'Suplemen - 1x Sehari, Setelah Makan',
  harga: 'Rp. 90,000',
},
{
  nama: 'Obat F',
  deskripsi: 'Meningkatkan Asupan Vitamin B3 Keseharian',
  syarat: 'Suplemen - 1x Sehari, Setelah Makan',
  harga: 'Rp. 95,000',
},
{
  nama: 'Obat G',
  deskripsi: 'Meningkatkan Asupan Vitamin B6 Keseharian',
  syarat: 'Suplemen - 1x Sehari, Setelah Makan',
  harga: 'Rp. 80,000',
},
];

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */

class TableExample extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: true };
  }
  setModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  editDelete(row, column) {
    if (column == '2') {
      //eslint-disable-next-line
      if (row == '0') {
        // eslint-disable-next-line
        if (confirm('Tambahkan Obat A ke dalam keranjang?')) {
          alert('Obat A berhasil ditambahkan');
        }

      } else if (row == '1') {
        //eslint-disable-next-line
        if (confirm('Tambahkan Obat B ke dalam keranjang?')) {
          alert('Obat B berhasil ditambahkan');
        }
      } else if (row == '2') {
        //eslint-disable-next-line
        if (confirm('Tambahkan Obat C ke dalam keranjang?')) {
          alert('Obat C berhasil ditambahkan');
        }
      } else if (row == '3') {
        //eslint-disable-next-line
        if (confirm('Tambahkan Obat D ke dalam keranjang?')) {
          alert('Obat D berhasil ditambahkan');
        }
      } else if (row == '4') {
        //eslint-disable-next-line
        if (confirm('Tambahkan Obat E ke dalam keranjang?')) {
          alert('Obat E berhasil ditambahkan');
        }
      } else if (row == '5') {
        //eslint-disable-next-line
        if (confirm('Tambahkan Obat F ke dalam keranjang?')) {
          alert('Obat F berhasil ditambahkan');
        }
      } else if (row == '6') {
        //eslint-disable-next-line
        if (confirm('Tambahkan Obat G ke dalam keranjang?')) {
          alert('Obat G berhasil ditambahkan');
        }
      }
    } else if (column == '0') {
      if (row == '0') {
        alert('Obat A, \n Meredakan Demam, \n Antibiotik - 3x Sehari, Setelah Makan');
      } else if (row == '1') {
        alert('Obat B, \n Meredakan Batuk dan Radang Tenggorokkan, \n Antibiotik - 3x Sehari, Sebelum Makan');
      } else if (row == '2') {
        alert('Obat C, \n Meredakan Pilek dan Sakit Kepala, \n Komplemen - 1x Sehari, Setelah Makan');
      } else if (row == '3') {
        alert('Obat D, \n Meningkatkan Asupan Vitamin C Keseharian, \n Suplemen - 1x Sehari, Setelah Makan');
      } else if (row == '4') {
        alert('Obat E, \n Meningkatkan Asupan Vitamin B1 Keseharian, \n Suplemen - 1x Sehari, Setelah Makan');
      } else if (row == '5') {
        alert('Obat F, \n Meningkatkan Asupan Vitamin B3 Keseharian, \n Suplemen - 1x Sehari, Setelah Makan');
      } else if (row == '6') {
        alert('Obat G, \n Meningkatkan Asupan Vitamin B6 Keseharian, \n Suplemen - 1x Sehari, Setelah Makan');
      }
    }
  }
  render() {
    return (
      <Table
        height={200}
        width={200}
        fixedHeader={true}
        fixedFooter={true}
        onCellClick={this.editDelete}
        style={{ tableLayout: 'auto'}}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          selectable={false}>
          <TableRow>
            <TableHeaderColumn style={{width:5}} className="first-column">Obat</TableHeaderColumn>
            <TableHeaderColumn style={{width:5}} className="fourth-column">Harga</TableHeaderColumn>
            <TableHeaderColumn style={{width:5}} className="fifth-column"></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          stripedRows={true}
          selectable={false}
          style={{tableLayout: 'auto'}}>
          {tableData.map( (row, index) => (
            <TableRow key={index+1}>
              <TableRowColumn style={{width:5, textDecoration:'underline'}} className="first-column"><span onClick={this.setModal}>{row.nama}</span></TableRowColumn>
              <TableRowColumn style={{width:5}} className="fourth-column">{row.harga}</TableRowColumn>
              <TableRowColumn style={{width:5}} className="fifth-column"><AddIcon color={green500} style={{widht : '50', height : '50'}}/></TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default TableExample;