import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import Posts from '../components/Posts/Posts';
import Post from '../components/Post/Post';
import ShowPost from '../components/ShowPost/ShowPost';
import CreatePost from '../components/CreatePost/CreatePost';

export default () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/posts" />
      <Route exact path="/posts" component={Posts} />
      <Route path="/posts/new" component={CreatePost} />
      <Route path="/posts/:id" render={props => <ShowPost { ...props }/>} />
      <Route path="/posts/:id/edit" render={props => <CreatePost { ...props }/>} />
    </Switch>
  </BrowserRouter>
);