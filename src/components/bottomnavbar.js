import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import '../img/flaticon.css';

const scheduleIcon = <FontIcon className="flaticon-calendar-interface-symbol-tool"></FontIcon>;
const medicineIcon = <FontIcon className="flaticon-medical-kit"></FontIcon>;
const recordsIcon = <FontIcon className="flaticon-interface"></FontIcon>;
const registerIcon = <FontIcon className="flaticon-doctor-with-stethoscope"></FontIcon>;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Schedule"
            icon={scheduleIcon}
            onClick={() => this.select(0)}>
            <div> test </div>
          </BottomNavigationItem>
          <BottomNavigationItem
            label="Medicine"
            icon={medicineIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Medical Records"
            icon={recordsIcon}
            onClick={() => this.select(2)}
          />
          <BottomNavigationItem
            label="Register"
            icon={registerIcon}
            onClick={() => this.select(3)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;