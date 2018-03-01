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
import '../App.css'
import { blue500, red500, blue50, green300, green400, green500 } from 'material-ui/styles/colors';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

class Exam extends Component {
  constructor(props) {
    super(props);
  }

  edit() {
    alert('Anda akan mengedit jadwal pemeriksaan');
  }

  delete() {
    alert('Anda akan menghapus jadwal pemeriksaan');
  }

  render() {
    return (
      <Table>
        <TableBody displayRowCheckbox={false} stripedRows={true} selectable={false} style={{ tableLayout: 'auto', fontSize: '11pt' }}>
          <TableRow striped={true} style={{ border: '5px solid', borderColor: '#4cb7c5', borderCollapse: true }}>
            <div>
              <span className="float-left margin-left">Tanggal Periksa : 02-12-2017</span>
              <span className="float-right margin-right" style={{ textDecoration: 'underline', color: 'blue' }} onClick={() => window.handleChange('queue_info1')}>Lihat Antrian</span>
            </div>
            <br />
            <br />
            <div>
              <span className="float-left margin-left">No. Antrian : 20</span>
              <span className="float-right margin-right margin-bottom"><DeleteIcon onClick={() => this.delete()} style={{ height: '36', width: '36', color: 'red' }} /></span>
              <span className="float-right margin-right margin-bottom"><EditIcon onClick={() => this.edit()} style={{ height: '36', width: '36', color: 'orange' }} /></span>
            </div>
            <br />
            <br />
            <div>
              <span className="float-left margin-left">Dokter : dr. Alice</span>
            </div>
          </TableRow>
          <TableRow striped={true} style={{ border: '5px solid', borderColor: '#4cb7c5', borderCollapse: true }}>
            <div>
              <span className="float-left margin-left">Tanggal Periksa : 17-12-2017</span>
              <span className="float-right margin-right" style={{ textDecoration: 'underline', color: 'blue' }} onClick={() => window.handleChange('queue_info2')}>Lihat Antrian</span>
            </div>
            <br />
            <br />
            <div>
              <span className="float-left margin-left">No. Antrian : 10</span>
              <span className="float-right margin-right margin-bottom"><DeleteIcon onClick={() => this.delete()} style={{ height: '36', width: '36', color: 'red' }} /></span>
              <span className="float-right margin-right margin-bottom"><EditIcon onClick={() => this.edit()} style={{ height: '36', width: '36', color: 'orange' }} /></span>
            </div>
            <br />
            <br />
            <div>
              <span className="float-left margin-left">Dokter : dr. Bob</span>
            </div>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default Exam;
