import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  margin: "30px"
};


const TrackerIndexItem = () => (
  <Card style={styles}>
    <CardHeader
      title="Test ToS"
      subtitle="fake.com/termsofservice"
    />
    <CardActions>
      <FlatButton label="Edit" />
      <FlatButton label="Delete" />
    </CardActions>
  </Card>
);

export default TrackerIndexItem;
