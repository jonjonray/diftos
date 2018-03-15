import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  margin: "5px"
};


const TrackerIndexItem = ({ title, url}) => (
  <Card style={styles}>
    <CardHeader
      title="title"
      subtitle="url"
    />
    <CardActions>
      <FlatButton label="Edit" />
      <FlatButton label="Delete" />
    </CardActions>
  </Card>
);

export default TrackerIndexItem;
