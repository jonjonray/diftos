import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

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
    this.state = {
      title: "",
      url: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e, name){
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  onSubmit(e){
    e.preventDefault();
    const { title, url } = this.state;
    const userId = localStorage.getItem('userId');
    axios.post('/sites/new', { title, url, userId });
  }
  render(){
    return (
      <Card style={cardStyles}
            className="trackerform">
        <TextField style={{margin: "20px"}}
                    hintText="React.js"
                    floatingLabelText="Title"
                    value={this.state.title}
                    onChange={this.onChange}
                    name="title"
                    />
        <TextField style={inputStyles}
          hintText="discuss.reactjs.org/tos"
          floatingLabelText="URL"
          value={this.state.url}
          onChange={this.onChange}
          name="url" />
        <FlatButton label="Submit"
                    onClick={this.onSubmit}/>
      </Card>
    );
  }
}

export default TrackerForm;
