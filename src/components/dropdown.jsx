import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
  backgroundColor: "rgba(255, 204, 128, 1)",
  color: "white",
  marginTop: "0px",
  position: 'absolute',
  zIndex: "4"
};

const logout = () => {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('userId');
  window.location.reload();
};

const DropDown = () => (
  <div>
    <Paper style={style}>
      <Menu>
        <MenuItem primaryText="Account Settings" style={{color: "white"}}/>
        <MenuItem primaryText="Sign out" style={{color: "white"}}
                  onClick={logout}/>
      </Menu>
    </Paper>
  </div>
);

export default DropDown;
