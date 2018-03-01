import React from 'react';
import NavBar from './components/navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <MuiThemeProvider>
        <NavBar />
      </MuiThemeProvider>
    );
  }
}

export default App;
