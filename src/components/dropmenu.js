import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class DropDownMenuOpenImmediateExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        <MenuItem value={1} primaryText="Hari" />
        <MenuItem value={2} primaryText="Minggu" />
        <MenuItem value={3} primaryText="Bulan" />
      </DropDownMenu>
    );
  }
}