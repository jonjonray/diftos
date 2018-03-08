import React from 'react';
import SideBar from './components/sidebar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TrackerIndex from './components/trackerIndex';
import NavBar from './components/navbar';
import Auth from './components/auth';

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route exact path='/' component={NavBar} />
            <Route exact path='/' component={SideBar} />
            <Route path='/auth' component={Auth} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
