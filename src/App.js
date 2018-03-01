import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import BottomNavigationExampleSimple from './components/bottomnavbar.js';
import AppBarExampleIconButton from './components/appbar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableExampleSimple from './components/datagrid.js'
import TabsExampleControlled from './components/tab.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
        <div style={{height: window.innerHeight}}>
          <AppBarExampleIconButton className='fixed-top app-bar'/>
          <TabsExampleControlled/>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
