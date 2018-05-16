import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Modal, Button, FieldGroup, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';

export default class CreatePost extends Component{
  state = {
    title: '',
    text: ''
  };

  handleChange = e => {
    this.setState({
      title: e.target.value,
    });
  }

  handleChangeArea = e => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    
    const post = {
      title: this.state.title,
      text: this.state.text
    }

    axios.post(`http://localhost:2000/posts`, post)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  render() {
    return (
      <Grid>
        <form onSubmit={this.handleSubmit}>
          <FormControl
            type="text"
            value={this.state.title}
            placeholder="Enter title"
            onChange={this.handleChange}
          />
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Textarea</ControlLabel>
            <FormControl 
              componentClass="textarea" 
              placeholder="textarea" 
              onChange={this.handleChangeArea}
              value={this.state.text}              
            />
          </FormGroup>
          <Button type="submit" bsStyle="success">Add post</Button>
        </form>
        <Link to="/posts">
          <Button bsStyle="primary">All posts</Button>
        </Link>
      </Grid>
    );
  }
}