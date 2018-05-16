import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Post = props => {
  return (
    <Grid>
      <h2>{props.title}</h2>
      {props.text && <p>{props.text}</p>}
      {props.match.path === '/posts' 
        ? <Link to={`/posts/` + props.id}>
            <Button bsStyle="warning">View post</Button>            
          </Link>
        : <Link to='/posts'>
            <Button bsStyle="primary">Back to posts</Button>
          </Link>
      }
    </Grid>
  );
}

export default Post;