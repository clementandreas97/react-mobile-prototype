import React, { Component } from 'react';
import '../App.css';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200, green500} from 'material-ui/styles/colors';
import BottomNavigationExampleSimple from './bottomnavbar.js';
import AppBarExampleIconButton from './appbar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableExampleSimple from './datagrid.js'
import TableExample from './dataObat.js'
import TableShoppingCart from './dataShoppingCart.js'
import TabsExampleControlled from './tab.js'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Filter from 'material-ui/svg-icons/content/filter-list';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

const style = {
  margin: 12,
};

var parent = class Parent extends Component {
	constructor(props) {
		super(props);
	}
}

var tab = class ObatTab extends Component {
	constructor(props) {
		super(props);
		window.view = forms['obatView'];
		this.state={
			view: forms['obatView']
		}
		this.handleMedicineChange = this.handleMedicineChange.bind(this);
		window.handleMedicineChange = this.handleMedicineChange;
		this.editRecord = this.editRecord.bind(this);
		window.editRecord = this.editRecord;
	}

	getForm(currentMode) {
		return forms[currentMode];
	}

	editRecord(currentMode) {
		this.handleMedicineChange(currentMode);
	}

	handleMedicineChange(currentMode) {
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
	// console.log(tab.handleMedicineChange('fillDeliveryInfo'));
	window.handleMedicineChange(currentMode)
}

var fillDeliveryInfo = function(currentMode) {
	window.handleMedicineChange(currentMode);
	alert('Pesanan Anda Berhasil Didaftarkan!\n Total Biaya: Rp 135,000\n Pengiriman akan tiba dalam 60 menit');
}

var editRecord = function(currentMode) {
	window.handleMedicineChange(currentMode);
	alert('Record sukses diubah');
}

var forms = {
	obatView:
				<div>
        		<div className="title">
					<br/>
					Daftar Obat
				</div>
				<div>
					<TableExample/>
					<FloatingActionButton onClick={() => func('filterObat')} className="float-left margin-top margin-left" backgroundColor={green500}><FontIcon className='flaticon-funnel'></FontIcon></FloatingActionButton>
					<FloatingActionButton onClick={() => func('shoppingCartView')} className="float-right margin-top margin-right" backgroundColor={blue500}><ShoppingCart/></FloatingActionButton>
            	</div>
            	</div>,
    shoppingCartView:
				<div>
        		<div className="title">
					<br/>
					Keranjang Belanja
				</div>
				<div>
					<TableShoppingCart/>
					<div align ="right" margin-right="10px">Total: Rp 130,000</div>
					<br/>
					<RaisedButton onClick={() => func('obatView')} className='float-left margin-left margin-bottom' backgroundColor={red500} label="Kembali"/>
					<RaisedButton onClick={() => func('fillDeliveryInfo')} className='float-right margin-right margin-bottom' backgroundColor={green500} label="Lanjut"/>
            	</div>
            	</div>,
    fillDeliveryInfo: <div>
    			<div className="title">
    				<br/>
    				Informasi Pengiriman
    			</div>
    			<br/>
    			<div className='margin-left margin-right'>
    				<table>
    					<tr>
    						<td>Nama: </td>
    						<td><TextField  hintText=""/></td>
    					</tr>
    					<tr>
    						<td>Alamat: </td>
    						<td><TextField multiLine={true} rows='4' rowsMax='4' hintText=""/></td>
    					</tr>
    					<tr>
    						<td>No Telepon: </td>
    						<td><TextField  hintText=""/></td>
    					</tr>
    					<tr>
    						<td>
    							<br/>
    						</td>
    					</tr>
	        		</table>
	        		<div align="right">Biaya Antar: Rp 5,000 </div>
	    		</div>
	    		<br/>
				    <RaisedButton onClick={() => func('shoppingCartView')} className='float-left margin-left margin-bottom' backgroundColor={red500} label="Kembali"/>
					<RaisedButton onClick={() => fillDeliveryInfo('obatView')} className='float-right margin-right margin-bottom' backgroundColor={green500} label="Pesan"/>
	    		</div>,
	filterObat: <div>
    			<div className="title">
    				<br/>
    				Filter By
    			</div>
    			<br/>
    			<div>
    				<table>
    					<tr>
    						<td>Kategori Obat:</td>
				        	<td>
				        		<DropDownMenu value={1} onChange={this.handleMedicineChange}>
				          			<MenuItem value={1} primaryText="Antibiotik" />
				          			<MenuItem value={2} primaryText="Komplemen" />
				          			<MenuItem value={3} primaryText="Supplemen" />
				        		</DropDownMenu>
				        	</td>
				        </tr>
				    </table>
				</div>
				    <RaisedButton onClick={() => func('obatView')} className='float-left margin-left margin-bottom' backgroundColor={red500} label="Kembali"/>
					<RaisedButton onClick={() => func('obatView')} className='float-right margin-right margin-bottom' label="Filter" backgroundColor={green500}/>
				</div>,

	filterRecord1:
				<div>
        		<div className="title">
					<br/>
					Filter Medical Record
				</div>
				<div>
					<TableExampleSimple/>
					<FloatingActionButton onClick={() => func('obatView')} className="float-left margin-top margin-left" backgroundColor={greenA200}><ArrowBack/></FloatingActionButton>
            	</div>
            	</div>,
    editRecord: <div>
    			<div className="title">
    				<br/>
    				Ubah Medical Records
    			</div>
    			<br/>
    			<div className='margin-left margin-right'>
    				<div>Tanggal Record:<DatePicker autoOk='true' container='dialog' hintText="Tanggal Record" /></div>
    				<div>Nama Penyakit:<TextField fullWidth='true' inputStyle={{margin: '10, 10, 10, 10'}}hintText=""/></div>
    				<div>Nama Dokter:</div><TextField hintText=""/>
    				<div>Durasi Sakit:<TextField style={{width: 100}} hintText=""/>
				        <DropDownMenu value={1} onChange={this.handleMedicineChange}>
				          <MenuItem value={1} primaryText="Hari" />
				          <MenuItem value={2} primaryText="Minggu" />
				          <MenuItem value={3} primaryText="Bulan" />
				        </DropDownMenu>
	        		</div>
	        		Keterangan: <TextField multiLine={true} rows='4' rowsMax='4' hintText=""/>
	    			</div>
				    <RaisedButton onClick={() => func('obatView')} className='float-left margin-left margin-bottom' backgroundColor={red500} label="Kembali"/>
					<RaisedButton onClick={() => editRecord('obatView')} className='float-right margin-right margin-bottom' backgroundColor={green500} label="Ubah"/>
	    		</div>,
}

export default tab;