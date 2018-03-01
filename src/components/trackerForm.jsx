import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const inputStyles = {
  margin: "10px",
  width: "500px"
};

const cardStyles = {
  width: "1364px",
  height: "80px",
  margin: "30px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-end"
};


class TrackerForm extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Card style={cardStyles}>

        <TextField style={{margin: "10px"}}
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
