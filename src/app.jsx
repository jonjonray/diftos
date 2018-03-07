import React from 'react';
import SideBar from './components/sidebar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TrackerIndex from './components/trackerIndex';
import NavBar from './components/navbar';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <SideBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
