import React from 'react';
import {DashboardPage, ParticipationPage, AcquisitionPage, EngagementPage, GeneralPage, RetentionPage} from './pages';
import { HashRouter as Router, Route } from "react-router-dom";

import Layout, {
  BasicAppBar,
  BasicFooter,
  BasicDrawer,
} from './admin_index';
import logo from "./logo.png";
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const links = [
  {
    href: '#/participation',
    label: 'Participation Metrics',
  },
  {
    href: '#/engagement',
    label: 'Engagement Metrics',
  },
  {
    href: '#/retention',
    label: 'Retention Metrics',
  },
  {
    href: '#/acquisition',
    label: 'Acquisition Metrics',
  },
  {
    href: '#/general',
    label: 'General Metrics',
  },  
];

const headerLinks = [
  {
    href: 'http://boopathisakthivel.in/',
    label: 'My Account',
    iconName: 'AccountCircle'
  },
  {
    href: 'https://boopathisakthivel.github.io',
    label: 'Logout',
    iconName: 'MoreHoriz'
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {action: "home", breadcrumbs: ["home"], leftDrawerType: "persistent"};
    this.handleBreadcrumbs = this.handleBreadcrumbs.bind(this);
    this.handlePageAction = this.handlePageAction.bind(this);
  }

  handleBreadcrumbs = (event, action) => {
    const { breadcrumbs } = this.state;
    const breadcrumbsIdx = breadcrumbs.indexOf(action);

    if(breadcrumbsIdx !== breadcrumbs.length-1) {
      console.log("b action ", action);
    }
  }
  handlePageAction = (action) => {
    console.log("App action=",action);
    let breadcrumbs = this.state.breadcrumbs || [];
    breadcrumbs.push(action);
    this.setState({breadcrumbs: breadcrumbs});
  }
  onLeftDrawerOpenChange = () => {
    console.log("onLeftDrawerOpenChange");
  }
  onLogoClick = () => {
    window.location.href = "/#";
  }
  render = () => {
    return (
        <Layout
            stickyFooter
            mainGrow={false}
            appBarPosition={"fixed"}
            appBarContent={<BasicAppBar title={"Outreach Reporting System"} logo={logo} menuIconAlways={true} links={headerLinks} onLogoClick={this.onLogoClick}/>} 
            footerContent={<BasicFooter  /> } 
            leftDrawerUnder ={true}
            leftDrawerContent={<BasicDrawer links={links} />} 
            leftDrawerType={this.state.leftDrawerType}
            rightDrawerContent={<BasicDrawer links={links} />} 
            onLeftDrawerOpenChange = {this.onLeftDrawerOpenChange}
            >
              <div className={'pageContent'}>
                <Router>
                  <div>
                    <Route exact path="/" render={({history}) => (
                          <DashboardPage {...this.props} history={history} handlePageAction={this.handlePageAction} />
                      )}/>
                    <Route exact path="/dashboard" render={({history}) => (
                          <DashboardPage {...this.props} history={history} handlePageAction={this.handlePageAction} />
                      )}/>
                    <Route exact path="/participation" render={({history}) => (
                          <ParticipationPage {...this.props} history={history} handlePageAction={this.handlePageAction} />
                      )}/>
                    <Route exact path="/acquisition" render={({history}) => (
                          <AcquisitionPage {...this.props} history={history} handlePageAction={this.handlePageAction} />
                      )}/>  
                    <Route exact path="/engagement" render={({history}) => (
                          <EngagementPage {...this.props} history={history} handlePageAction={this.handlePageAction} />
                      )}/>  
                    <Route exact path="/general" render={({history}) => (
                          <GeneralPage {...this.props} history={history} handlePageAction={this.handlePageAction} />
                      )}/>  
                    <Route exact path="/retention" render={({history}) => (
                          <RetentionPage {...this.props} history={history} handlePageAction={this.handlePageAction} />
                      )}/>
                  </div>
                </Router>
              </div>
            </Layout>
    );
  }
}

export default App;