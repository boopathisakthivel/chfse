import React from 'react';
  import Layout, {
    BasicAppBar,
    BasicFooter,
    BasicDrawer,
  } from './admin_index';
  import logo from "./logo.png";

  const links = [
    {
      href: 'http://boopathisakthivel.in/',
      label: 'Boopathi Sakthivel',
    },
    {
      href: 'https://boopathisakthivel.github.io',
      label: 'GitHub',
    },
    {
      href: 'http://blabs.boopathisakthivel.in/',
      label: 'BLabs',
    },
  ];

  class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {leftDrawerType: "persistent"}
    }
    onLeftDrawerOpenChange = () => {
      console.log("onLeftDrawerOpenChange");
      //this.setState({leftDrawerType: "temporary"});
    }
    
    render(){
      return(
        <Layout
          stickyFooter
          mainGrow={false}
          appBarPosition={"fixed"}
          appBarContent={<BasicAppBar title={"Outreach Reporting System"} logo={logo} menuIconAlways={true} links={links}/>} 
          footerContent={<BasicFooter  /> } 
          leftDrawerUnder ={true}
          leftDrawerContent={<BasicDrawer links={links} />} 
          leftDrawerType={this.state.leftDrawerType}
          rightDrawerContent={<BasicDrawer links={links} />} 
          onLeftDrawerOpenChange = {this.onLeftDrawerOpenChange}
          >
            <div><h1> AI or Bots
Progressive Web App
Single Page Application

Front-end web development – JavaScript
Back-end web development – JavaScript, Python, Java, PHP, Ruby, C#
Desktop application – Java, C++, Python
Mobile development – Swift, Java, C#
Game development – C++, C#
AI or Bots
Progressive Web App
Single Page Application

Front-end web development – JavaScript
Back-end web development – JavaScript, Python, Java, PHP, Ruby, C#
Desktop application – Java, C++, Python
Mobile development – Swift, Java, C#
Game development – C++, C#
AI or Bots
Progressive Web App
Single Page Application

Front-end web development – JavaScript
Back-end web development – JavaScript, Python, Java, PHP, Ruby, C#
Desktop application – Java, C++, Python
Mobile development – Swift, Java, C#
Game development – C++, C#
AI or Bots
Progressive Web App
Single Page Application

Front-end web development – JavaScript
Back-end web development – JavaScript, Python, Java, PHP, Ruby, C#
Desktop application – Java, C++, Python
Mobile development – Swift, Java, C#
Game development – C++, C#
AI or Bots
Progressive Web App
Single Page Application

Front-end web development – JavaScript
Back-end web development – JavaScript, Python, Java, PHP, Ruby, C#
Desktop application – Java, C++, Python
Mobile development – Swift, Java, C#
Game development – C++, C#
AI or Bots
Progressive Web App
Single Page Application

Front-end web development – JavaScript
Back-end web development – JavaScript, Python, Java, PHP, Ruby, C#
Desktop application – Java, C++, Python
Mobile development – Swift, Java, C#
Game development – C++, C#
AI or Bots
Progressive Web App
Single Page Application

Front-end web development – JavaScript
Back-end web development – JavaScript, Python, Java, PHP, Ruby, C#
Desktop application – Java, C++, Python
Mobile development – Swift, Java, C#
Game development – C++, C#
   </h1></div>
          </Layout>
        )
      }
  }

  export default App;