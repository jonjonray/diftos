import React from 'react';
import TrackerIndex from './trackerIndex';

class SideBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="sidebar">
          <TrackerIndex />
        </div>
    );
  }
}

export default SideBar;
