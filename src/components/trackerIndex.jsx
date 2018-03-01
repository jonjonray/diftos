import React from 'react';
import TrackerIndexItem from "./trackerIndexItem";
import TrackerForm from "./trackerForm";

class TrackerIndex extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <div>
        <TrackerIndexItem />
        <TrackerIndexItem />
        <TrackerIndexItem />
        <TrackerForm />
      </div>
    );
  }
}

export default TrackerIndex;
