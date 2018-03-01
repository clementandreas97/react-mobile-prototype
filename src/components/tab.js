import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import TableExampleSimple from './datagrid.js';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import '../img/flaticon.css';
import '../App.css';
import MedicalTab from './medical.js'
import ScheduleTab from './schedule.js'
import ObatTab from './medicine.js'
import RegisterTab from './regist_examination.js'

const scheduleIcon = <FontIcon className="flaticon-calendar-interface-symbol-tool"></FontIcon>;
const medicineIcon = <FontIcon className="flaticon-medical-kit"></FontIcon>;
const recordsIcon = <FontIcon className="flaticon-interface"></FontIcon>;
const registerIcon = <FontIcon className="flaticon-doctor-with-stethoscope"></FontIcon>;


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  content: {
    height: window.innerHeight - (50+72),
    overflow: 'scroll',
    bottom: 0,
  }
};

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'MedicineTab',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        className='tab-bar'
      >
        <Tab icon={scheduleIcon} label="Schedule" value="ScheduleTab">
          <div>
            <p>
              <ScheduleTab/>
            </p>
          </div>
        </Tab>
        <Tab icon={medicineIcon} label="Medicine" value="MedicineTab">
          <div>
            <ObatTab/>
          </div>
        </Tab>
        <Tab icon={recordsIcon} label="Records" value="RecordsTab">
          <div>
            <MedicalTab/>
          </div>
        </Tab>
        <Tab icon={registerIcon} label="Register" value="RegisterTab">
          <div>
            <RegisterTab/>
          </div>
        </Tab>
      </Tabs>
    );
  }
}