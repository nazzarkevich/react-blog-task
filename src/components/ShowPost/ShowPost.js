import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ShowPost extends Component {
  state = {
    post: {}
  }

  handleDelete = () => {
    //const id = this.props.match.params.id;
    axios.delete(`http://localhost:2000/posts/` + this.state.id)
      .then(res => {
        console.log(res);
      });
  }

  componentWillMount() {
    this.setState({id: this.props.match.params.id});        
  }

  componentDidMount() {
    //const id = this.props.match.params.id;
    axios.get(`http://localhost:2000/posts/` + this.state.id)
      .then(res => {
        this.setState({ post: res.data });
      })
  }

  render() {
    return (
      <div>
        <h1>{this.state.post.title}</h1>
        {this.state.post.text && <p>{this.state.post.text}</p>}
        <Link to="/posts">
          <Button bsStyle="primary">All posts</Button>
        </Link>
        <Link to="/posts">
          <Button bsStyle="danger" onClick={this.handleDelete}>Delete</Button>
        </Link>
        <Link to={`/posts/` + this.state.id + `/edit`}>
          <Button bsStyle="warning">Edit</Button>
        </Link>
      </div>
    );
  }
};