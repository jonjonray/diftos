import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
  backgroundColor: "#ffcc80",
  color: "white",
  marginTop: "0px"
};

const DropDown = () => (
  <div>
    <Paper style={style}>
      <Menu>
        <MenuItem primaryText="Account Settings" style={{color: "white"}}/>
        <MenuItem primaryText="Sign out" style={{color: "white"}}/>
      </Menu>
    </Paper>
  </div>
);

export default DropDown;
