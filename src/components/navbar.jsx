import React from 'react';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import DropDown from './dropdown';

const styles = {
  backgroundColor: "#ffcc80"
};


class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {menuDisplay: false};
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({menuDisplay: this.state.menuDisplay ? false : true});
  }

  render(){
    if (this.state.menuDisplay) {
    return (
      <div>
        <AppBar
          title="Dif ToS"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.toggleMenu}
          style={styles}
          />
        <DropDown />

      </div>
      );
    } else {
    return (
        <AppBar
          title="Dif ToS"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.toggleMenu}
          style={styles}
        />
      );
    }
  }
}


export default NavBar;
