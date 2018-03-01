import React, { Component } from 'react';
import Modal from './modal.js';

class ObatInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <span>
        <span className="float-right margin-right" style={{ textDecoration: 'underline', color: 'blue' }} onClick={this.toggleModal}>Lihat Antrian</span>

        <Modal show={this.state.isOpen} onClose={this.toggleModal} >
          <div style={{ margin: 'auto' }}>
            <div className="title">
              <br />
              Informasi Antrian
			      </div>
            <br />
            <br />
            <div className='margin-left margin-right'>
              <table>
                <tr>
                  <td>No. Antrian Anda</td>
                  <td>:</td>
                  <td>20</td>
                </tr>
                <br />
                <tr>
                  <td>No. Antrian Sekarang</td>
                  <td>:</td>
                  <td>16</td>
                </tr>
                <br />
                <tr>
                  <td>Sisa Waktu Antrian</td>
                  <td>:</td>
                  <td>25 menit</td>
                </tr>
                <br />
                <tr>
                  <td>Nama Dokter</td>
                  <td>:</td>
                  <td>dr. Alice</td>
                </tr>
                <br />
                <tr>
                  <td>Tanggal Periksa</td>
                  <td>:</td>
                  <td>02-12-2017</td>
                </tr>
              </table>
            </div>
          </div>
        </Modal>
      </span>
    );
  }
}

export default ObatInfo;