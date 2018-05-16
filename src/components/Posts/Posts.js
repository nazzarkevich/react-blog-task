import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Grid, Row, Col, Button } from 'react-bootstrap';
import Post from '../Post/Post';
import CustomNavbar from '../CustomNavbar/CustomNavbar';
import CreatePost from '../CreatePost/CreatePost';
import './Posts.css';

export default class Posts extends Component{
  state = {
    modalShow: false,
    posts: []
  }

  componentDidMount() {
    axios.get(`http://localhost:2000/posts`)
      .then(res => {
        this.setState({posts: res.data});
      })
  }
  
  render() {
    return (
      <div>
        <CustomNavbar 
          modalClose={this.modalClose} 
          modalShow={this.modalShow}
        />
        <ul>
          { this.state.posts.map(post => (
            <li key={post.id}> 
              <Post 
                id={post.id} 
                title={post.title} 
                text={post.text}
                match={this.props.match}
                handleDelete={this.handleDelete}
              />
            </li>))}
        </ul>
      </div>
    );
  }
}