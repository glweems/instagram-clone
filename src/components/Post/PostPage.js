import React, { Component } from 'react';
import styled from 'styled-components';
import postData from '../../dummy-data';
import PostContainer from './PostContainer';
import Theme, { ThemeProvider } from '../../theme';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot';

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 0.5rem 1rem;
  * {
    margin: 0;
    padding: 0;
  }
  .logo {
    span {
      margin-right: 0.5rem;
    }
  }
  .fontAwesome {
    font-family: 'Roboto', FontAwesome, sans-serif;
    font-size: 0.75rem;
    padding: 0.25rem;
    vertical-align: middle;
  }
  input {
    max-width: 200px;
    margin: .5rem 1rem;
    background: ${Theme.colors.light};
    border: none;
    :placeholder-shown {
      text-align: center;
      border-radius: 3px;
    }
  }
`;

export default class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filter: '',
    };
  }

  componentWillMount() {
    this.setState({
      posts: postData,
      filter: '',
    });
  }

  handleChange = e => {
    this.setState({
      filter: e.target.value,
    });
    const filteredArray = postData.filter(
      post => post.username.indexOf(this.state.filter.toLowerCase()) !== -1
    );
    this.state.filter !== ''
      ? this.setState({
        posts: filteredArray,
      })
      : this.setState({
        posts: postData,
      });
    console.table(filteredArray);
  };

  render() {
    const PostList = () =>
      this.state.posts.map((post, index) => (
        <PostContainer key={index} {...post} />
      ));

    return (
      <ThemeProvider className="App">
        <div />
        <Navbar>
          <div className="logo">
            <span>not</span>
            <i className="fab fa-instagram" />
          </div>
          <input
            className="fontAwesome"
            type="text"
            id="filter"
            name="filter"
            value={this.state.filter}
            onChange={this.handleChange}
            placeholder="&#xF002; Search"
          />
          <div>
            <i className="fas fa-bars" />
          </div>
        </Navbar>
        {this.state ? <PostList /> : 'loading...'}
      </ThemeProvider>
    );
  }
}
