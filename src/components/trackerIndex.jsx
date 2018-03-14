import React from 'react';
import TrackerIndexItem from "./trackerIndexItem";
import TrackerForm from "./trackerForm";
import axios from 'axios';

class TrackerIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sites: []
    };
  }

  componentWillMount(){
    // axios.get(`/sites?userId=${localStorage.getItem("userId")}`)
    //       .then(console.log)
    //       .catch(console.log);
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
