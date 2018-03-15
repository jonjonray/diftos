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
    axios.get(`/sites/all`, { params: { userId: localStorage.getItem("userId")} })
          .then((res) => {
            this.setState({sites: res.data.sites });
          });

  }
  render(){
    return (
      <div>
        {
          this.state.sites.map((site, idx) => {
            return (
              <TrackerIndexItem
                      title={site.title}
                      url={site.url}
                      key={idx} />
                  );
          })
        }
        <TrackerForm />
      </div>
    );
  }
}

export default TrackerIndex;
