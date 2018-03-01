import React, { Component } from 'react';
import '../App.css';
import '../img/flaticon.css';
import FontIcon from 'material-ui/FontIcon';
import { blue500, red500, blue50, green300, green400, green500 } from 'material-ui/styles/colors';
import BottomNavigationExampleSimple from './bottomnavbar.js';
import AppBarExampleIconButton from './appbar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableExampleSimple from './datagrid.js'
import TabsExampleControlled from './tab.js'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Filter from 'material-ui/svg-icons/content/filter-list';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenuOpenImmediateExample from './dropmenu.js';

const style = {
  margin: 12,
};

var parent = class Parent extends Component {
	constructor(props) {
		super(props);
	}
}

var tab = class MedicalTab extends Component {
	constructor(props) {
		super(props);
		window.view = forms['medRecord1'];
		this.state={
			view: forms['medRecord1']
		}
		this.handleChangeRecord = this.handleChangeRecord.bind(this);
		window.handleChangeRecord = this.handleChangeRecord;
		this.editRecord = this.editRecord.bind(this);
		window.editRecord = this.editRecord;
	}

	getForm(currentMode) {
		return forms[currentMode];
	}

	editRecord(currentMode) {
		this.handleChangeRecord(currentMode);
	}

	handleChangeRecord(currentMode) {
		console.log('masuk ga bung');
		this.setState({
			view: forms[currentMode],
		});
	}

	render() {
		return (
			this.state.view
		);
	}
}

var func = function(currentMode) {
	// console.log(document.getElementById('test').parentElement.innerHTML);
	// console.log(tab.handleChange('addRecord'));
	window.handleChangeRecord(currentMode)
}

var addRecord = function(currentMode) {
	window.handleChangeRecord(currentMode);
	alert('Record sukses ditambahkan');
}

var editRecord = function(currentMode) {
	window.handleChangeRecord(currentMode);
	alert('Record sukses diubah');
}

var forms = {
	medRecord1:
				<div>
        		<div className="title">
					<br/>
					Lihat Medical Records
				</div>
				<div>
					<TableExampleSimple/>
					<FloatingActionButton onClick={() => func('filterRecord')} className="float-left margin-top margin-left" backgroundColor={green500}><FontIcon className='flaticon-funnel'></FontIcon></FloatingActionButton>
					<FloatingActionButton onClick={() => func('addRecord')} className="float-right margin-top margin-right" backgroundColor={blue500}><ContentAdd/></FloatingActionButton>
            	</div>
            	</div>,
    addRecord: <div>
    			<div className="title">
    				<br/>
    				Tambah Medical Records
    			</div>
    			<br/>
    			<div className='margin-left margin-right'>
    				<table>
    				<tr>
    					<td>Tanggal Record: </td>
    					<td><DatePicker autoOk='true' container='dialog' hintText="Tanggal Record" /></td>
    				</tr>
    				<tr>
    					<td>Nama Penyakit: </td>
    					<td><TextField fullWidth='true' inputStyle={{width : 200, margin: '10, 10, 10, 10'}}hintText=""/></td>
    				</tr>
    				<tr>
						<td>Nama Dokter: </td>
						<td><TextField hintText=""/></td>
					</tr>
					<tr>
    					<td>Durasi Sakit: </td>
    					<td><TextField hintText=""/></td>
				    </tr>
				    <tr>
				    	<td>Keterangan: </td>
				    	<td><TextField multiLine={true} rows='4' rowsMax='4' hintText=""/></td>
	    			</tr>
	    			</table>
	    			</div>
				    <RaisedButton onClick={() => func('medRecord1')} backgroundColor={red500} className='float-left margin-left margin-bottom' label="Kembali"/>
					<RaisedButton onClick={() => addRecord('medRecord1')} className='float-right margin-right margin-bottom' backgroundColor={green500} label="Tambah"/>
	    		</div>,
	filterRecord: <div>
    			<div className="title">
    				<br/>
    				Filter By
    			</div>
    			<br/>
    			<div className='margin-left margin-right'>
    				<table>
    					<tr>
    						<td>Tanggal mulai:</td>
    						<td><DatePicker autoOk='true' container='dialog' hintText="Tanggal mulai" /></td>
    					</tr>
    					<tr>
    						<td>Tanggal akhir:</td>
    						<td><DatePicker autoOk='true' container='dialog' hintText="Tanggal akhir" /></td>
    					</tr>
    				</table>
    			</div>
				    <RaisedButton onClick={() => func('medRecord1')} className='float-left margin-left margin-bottom' backgroundColor={red500} label="Kembali"/>
					<RaisedButton onClick={() => func('filterRecord1')} className='float-right margin-right margin-bottom' backgroundColor={green500} label="Filter"/>
				</div>,
	filterRecord1:
				<div>
        		<div className="title">
					<br/>
					Filter Medical Record
				</div>
				<div>
					<TableExampleSimple/>
					<FloatingActionButton onClick={() => func('medRecord1')} className="float-left margin-top margin-left" backgroundColor={green500}><ArrowBack/></FloatingActionButton>
            	</div>
            	</div>,
    editRecord: <div>
    			<div className="title">
    				<br/>
    				Ubah Medical Records
    			</div>
    			<br/>
    			<div className='margin-left margin-right'>
    				<table>
    				<tr>
    					<td>Tanggal Record: </td>
    					<td><DatePicker autoOk='true' container='dialog'  hintText="Tanggal Record" /></td>
    				</tr>
    				<tr>
    					<td>Nama Penyakit: </td>
    					<td><TextField fullWidth='true' value='Demam' inputStyle={{width : 200, margin: '10, 10, 10, 10'}}hintText=""/></td>
    				</tr>
    				<tr>
						<td>Nama Dokter: </td>
						<td><TextField value='Dr. A' hintText=""/></td>
					</tr>
					<tr>
    					<td>Durasi Sakit: </td>
    					<td><TextField value='5 hari' hintText=""/></td>
				    </tr>
				    <tr>
				    	<td>Keterangan: </td>
				    	<td><TextField value='demam tinggi sudah 5 hari, tidak napsu makan' multiLine={true} rows='4' rowsMax='4' hintText=""/></td>
	    			</tr>
	    			</table>
	    			</div>
				    <RaisedButton onClick={() => func('medRecord1')} className='float-left margin-left margin-bottom' backgroundColor={red500} label="Kembali"/>
					<RaisedButton onClick={() => editRecord('medRecord1')} className='float-right margin-right margin-bottom' label="Ubah" backgroundColor={green500}/>
	    		</div>,
}

export default tab;