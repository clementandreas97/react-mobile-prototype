import React, { Component } from 'react';
import '../App.css';
import FontIcon from 'material-ui/FontIcon';
import BottomNavigationExampleSimple from './bottomnavbar.js';
import AppBarExampleIconButton from './appbar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ScheduleByDayTable from './dataScheduleDay.js'
import ScheduleByDoctorTable from './dataScheduleDoctor.js'
import {white,blue500, red500, blue50, green300, greenA200,green400, green500, green100, blue100 } from 'material-ui/styles/colors';
import TabsExampleControlled from './tab.js'
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Filter from 'material-ui/svg-icons/content/filter-list';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';


const style = {
	margin: 12,
  };
  
  var parent = class Parent extends Component {
      constructor(props) {
          super(props);
      }
  }

  var tab = class ScheduleTab extends Component {
	constructor(props) {
		super(props);
		window.view = forms['byDay'];
		this.state={
			view: forms['byDay']
		}
		this.handleScheduleChange = this.handleScheduleChange.bind(this);
		window.handleScheduleChange = this.handleScheduleChange;
		this.editRecord = this.editRecord.bind(this);
		window.editRecord = this.editRecord;
	}

	getForm(currentMode) {
		return forms[currentMode];
	}

	editRecord(currentMode) {
		this.handleScheduleChange(currentMode);
	}

	handleScheduleChange(currentMode) {
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
	window.handleScheduleChange(currentMode)
}


var forms = {
	byDoctor:	<div>
        		<div className="title">
					Jadwal Praktik
				</div>
        		<RaisedButton onClick={() => func('byDay')}labelStyle={{ fontSize: '12px'}}className="float-left margin-top margin-left" labelColor={white} label="jadwal per hari" backgroundColor={blue500}></RaisedButton>
				<RaisedButton onClick={() => func('byDoctor')}labelStyle={{ fontSize: '12px'}} className="float-right margin-top margin-right"  labelColor={white} label="jadwal per dokter" backgroundColor={blue500}></RaisedButton>
        		<br/><br/><br/>
                <div className="titlesch"><br/>dr. Alice (dokter anak)</div>
				<ScheduleByDoctorTable name ="dr. Alice"/>
                <div className="titlesch"><br/>dr. Bob (dokter umum)</div>
                <ScheduleByDoctorTable name ="dr. Bob"/>
                <div className="titlesch"><br/>dr. Carol (dokter umum)</div>
                <ScheduleByDoctorTable name ="dr. Carol"/>
                <div className="titlesch"><br/>dr. Dave (dokter umum)</div>
				<ScheduleByDoctorTable name ="dr. Dave"/>
                <div className="titlesch"><br/>drg. Grace (dokter gigi)</div>
                <ScheduleByDoctorTable name ="drg. Grace"/>
				
            </div>,
    byDay: <div>
			<div className="title">
				Jadwal Praktik
			</div>
			<RaisedButton onClick={() => func('byDay')} labelStyle={{ fontSize: '12px'}} style={style} className="float-left margin-top margin-left" labelColor={white} label="jadwal per hari" backgroundColor={blue500}></RaisedButton>
			<RaisedButton onClick={() => func('byDoctor')} labelStyle={{ fontSize: '12px'}} style={style}  className="float-right margin-top margin-right"  labelColor={white} label="jadwal per dokter" backgroundColor={blue500}></RaisedButton>
			<br/><br/><br/>
			<div className="titlesch"><br/>Senin</div>
			<ScheduleByDayTable name ="senin"/>
			<div className="titlesch"><br/>Selasa</div>
			<ScheduleByDayTable name ="selasa"/>
			<div className="titlesch"><br/>Rabu</div>
			<ScheduleByDayTable name ="rabu"/>
			<div className="titlesch"><br/>Kamis</div>
			<ScheduleByDayTable name ="kamis"/>
			<div className="titlesch"><br/>Jumat</div>
			<ScheduleByDayTable name ="jumat"/>
			<div className="titlesch"><br/>Sabtu</div>
			<ScheduleByDayTable name ="sabtu"/>
				
			</div>
}

export default tab;
