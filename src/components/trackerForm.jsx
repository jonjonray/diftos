import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const inputStyles = {
  margin: "20px"
};

const cardStyles = {
  width: "100%",
  height: "200px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start"
};


class TrackerForm extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Card style={cardStyles}
            class="trackerform">
        <TextField style={{margin: "20px"}}
                    hintText="React.js"
                    floatingLabelText="Name"/>
        <TextField style={inputStyles}
          hintText="discuss.reactjs.org/tos"
          floatingLabelText="URL"/>
        <FlatButton label="Submit" />
      </Card>
    );
  }
}

export default TrackerForm;
