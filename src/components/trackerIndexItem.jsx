import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  margin: "5px"
};


class TrackerIndexItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: props.title,
      url: props.url
    };
  }


  render() {
    return (
      <Card style={styles}>
        <CardHeader
          title={this.state.title}
          subtitle={this.state.url}
          />
        <CardActions>
          <FlatButton label="Edit" />
          <FlatButton label="Delete" />
        </CardActions>
      </Card>
    );
  }
}


export default TrackerIndexItem;
