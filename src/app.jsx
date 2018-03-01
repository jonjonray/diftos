import React from 'react';
import NavBar from './components/navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TrackerIndex from './components/trackerIndex';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <TrackerIndex />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
