import React, { Component } from 'react';
import postData from './dummy-data';
import PostContainer from './components/PostContainer';
import { ThemeProvider } from './theme';
import Navbar from './components/Navbar';

class App extends Component {
  componentDidMount() {
    this.setState({
      posts: postData,
    });
  }

  render() {
    const PostList = () =>
      this.state.posts.map((post, index) => (
        <PostContainer key={index} {...post} />
      ));

    return (
      <ThemeProvider className="App">
        <Navbar />
        {this.state ? <PostList /> : 'loading...'}
      </ThemeProvider>
    );
  }
}

export default App;
