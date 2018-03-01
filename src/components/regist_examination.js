import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Fonticons from 'material-ui/FontIcon';
import { blue500, red500, blue50, green300, green400, green500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Examination from './dataExamination.js';
import Exam from './dataExam.js';

class Register extends Component {
  constructor(props) {
    super(props);
    window.view = forms['view_examination_default'];
    this.state = {
      value: 1,
      view: forms['view_examination_default']
    };
    this.handleChange = this.handleChange.bind(this);
    window.handleChange = this.handleChange;
    this.changeValue = this.changeValue.bind(this);
    window.changeValue = this.changeValue;
  }

  handleChange(currentMode) {
    this.setState({
      view: forms[currentMode],
    });
  }

  changeValue(value) {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      this.state.view
    );
  }
}

var changePage = function(currMode) {
  window.handleChange(currMode);
}

var changeOption = (val) => {
  window.changeValue(val);
}

var forms = {
  view_examination_default:
    <div style={{ margin: 'auto' }}>
      <div className="title">
			  <br/>
				Pendaftaran Pemeriksaan
			</div>
      <br />
      <RaisedButton className="addButton float-left margin-left margin-top padding-bottom" onClick={() => changePage('register')} labelStyle={{fontWeight : 'bold', marginBottom : '10px'}} label="Add" labelPosition="after" icon={<AddIcon color={green400} style={{widht : '36', height : '36'}}/>}></RaisedButton>
    </div>,
  view_examination:
    <div style={{ margin: 'auto' }}>
      <div className="title">
        <br />
        Pendaftaran Pemeriksaan
			</div>
      <br />
      <RaisedButton className="addButton float-left margin-left margin-top padding-bottom" onClick={() => changePage('register')} labelStyle={{ fontWeight: 'bold', marginBottom: '10px' }} label="Add" labelPosition="after" icon={<AddIcon color={green400} style={{ widht: '36', height: '36' }} />}></RaisedButton>
      <br />
      <br />
      <br />
      <br />
      <Exam />
    </div>,
  register:
    <div style={{ margin: 'auto' }}>
      <div className="title">
        <br />
        Pendaftaran Pemeriksaan
			</div>
      <br />
      <div className="section float-left margin-left" style={{fontSize: '16pt'}}>Pilih Jadwal</div> 
      <br />
      <br />
      <div className='margin-left margin-right'>
        <table>
          <tr>
            <td>Tanggal Periksa</td>
            <td>:</td>
            <td><DatePicker autoOk='true' container='dialog' minDate={new Date()} formatDate={(date) => moment(date).format("DD-MM-YYYY")} hintText="Tanggal Record" /></td>
          </tr>
          <tr>
            <td>Dokter</td>
            <td>:</td>
            <td>
              <DropDownMenu value={1} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="dr. Alice" />
                <MenuItem value={2} primaryText="dr. Bob" />
                <MenuItem value={3} primaryText="dr. Carol" />
                <MenuItem value={4} primaryText="dr. Dave" />
                <MenuItem value={5} primaryText="drg. Grace" />
              </DropDownMenu>
            </td>
          </tr>
          <tr>
            <td>Keluhan Awal</td>
            <td>:</td>
            <td><TextField style={{border: '2px solid', borderColor: '#4cb7c5'}} multiLine={true} rows='3'/></td>
          </tr>
        </table>
      </div>
      <br />
      <br />
      <RaisedButton label="Kembali" onClick={() => changePage('view_examination_default')} backgroundColor={red500} className="float-left margin-left margin-bottom"/>
      <RaisedButton label="Submit" onClick={() => changePage('view_examination')} backgroundColor={green500} className="float-right margin-right margin-bottom" />
    </div>
}

export default Register;
