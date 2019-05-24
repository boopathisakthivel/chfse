import React from 'react';

import PropTypes from 'prop-types';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import ParticipationHeadTable from './../components/ParticipationHeadTable';
import VolunteeringByLocationTable from './../components/VolunteeringByLocationTable';
import VolunteeringByBusinessUnitTable from './../components/VolunteeringByBusinessUnitTable';

const theme = createMuiTheme({
  spacing: {
    unit: 8
  },
  typography: {
    useNextVariants: true
  }
});

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

class ParticipationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {row: [], lRow: [], bRow: [], idxValue: 0};
    this.getData = this.getData.bind(this);
  }
  componentDidMount = () => {
    this.getData(0);
  }

  getData = (idxValueParam) => {
    let _self = this;
    let idxValue = idxValueParam;

    if(idxValue === 0) {
      fetch('http://localhost:8950/participationMetrics/headCount')
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
    
          response.json().then(function(data) {
            /*
            let rowData = [];
            data.forEach((dataItem)  => {
              rowData.push([dataItem["associateId"], dataItem["name"], dataItem["designation"], dataItem["location"], dataItem["buinessUnit"]]);
            });
            */
            _self.setState({"row": data});
          });
        }
      )
      .catch(function(err) {
        _self.setState({"row": []});
        console.log('Fetch Error :-S', err);
      });
    }
    else if(idxValue === 1) {
      fetch('http://localhost:8950/participationMetrics/uniqueVolunteeringDetailsByLocation/Chennai')
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
    
          response.json().then(function(data) {
            /*
            let rowData = [];
            data.forEach((dataItem)  => {
              rowData.push([dataItem["associateId"], dataItem["name"], dataItem["designation"], dataItem["location"], dataItem["buinessUnit"]]);
            });
            */
            _self.setState({"lRow": data});
          });
        }
      )
      .catch(function(err) {
        _self.setState({"lRow": []});
        console.log('Fetch Error :-S', err);
      });
    }
    else if(idxValue === 2) {
      fetch('http://localhost:8950/participationMetrics/uniqueVolunteeringDetailsByBU/CommsMedia')
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
    
          response.json().then(function(data) {
            /*
            let rowData = [];
            data.forEach((dataItem)  => {
              rowData.push([dataItem["associateId"], dataItem["name"], dataItem["designation"], dataItem["location"], dataItem["buinessUnit"]]);
            });
            */
            _self.setState({"bRow": data});
          });
        }
      )
      .catch(function(err) {
        _self.setState({"bRow": []});
        console.log('Fetch Error :-S', err);
      });
    }
  }

  handleChangeIndex = (index) => {
    this.setState({"idxValue": index});
    this.getData(index);
  }
  handleChange = (event, newValue) => {
    this.setState({"idxValue": newValue});
    this.getData(newValue);
  }

  render() {
    return(
      <MuiThemeProvider theme={theme}>
          <h1>Participation Metrics Report</h1>

          <div>
            <AppBar position="static" color="default">
              <Tabs
                value={this.state.idxValue}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab label="Head Count" />
                <Tab label="Volunteering By Location" />
                <Tab label="Volunteering By BU" />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={this.state.idxValue}
              onChangeIndex={this.handleChangeIndex}
            >
              <TabContainer dir={theme.direction}>
                <ParticipationHeadTable row={this.state.row}/>
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <VolunteeringByLocationTable row={this.state.lRow}/>
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <VolunteeringByBusinessUnitTable row={this.state.bRow}/>
              </TabContainer>
            </SwipeableViews>
          </div>
          
      </MuiThemeProvider>
      )
    }
}

export default ParticipationPage;