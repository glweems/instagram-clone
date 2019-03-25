import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from '../theme';
import 'reset-css/reset.css';

const StyledPost = styled.div`
  width: 50%;
  margin: 0.5rem auto;
  border-radius: 3px;
  border: 1px solid lightgray;
  .image-wrapper {
    max-width: 100%;
    img {
      max-width: 100%;
    }
  }
  .post-info {
    padding: 1rem;
  }
  .header {
    display: flex;
    align-content: center;
    align-items: center;
    padding: 1rem;
    .username {
      margin-left: 1rem;
    }
    img {
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
    }
  }
  .timestamp {
    margin-top: 0.25rem;
    font-size: 0.75rem;
    font-weight: bolder;
    color: grey;
  }
`;

const Comments = ({ comments }) =>
  comments.map(({ username, text }, index) => (
    <Comment key={index} username={username} text={text} />
  ));

const StyledComment = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.75rem;
  margin-bottom: 0.125rem;
  *:first-child {
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const Comment = ({ username, text }) => (
  <StyledComment>
    <p>{username}</p>
    <p>{text}</p>
  </StyledComment>
);
Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string,
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string,
    })
  ),
};

const Likes = ({ likes }) => <p>{`Likes: ${likes}`}</p>;
Likes.propTypes = {
  likes: PropTypes.number,
};

export default class PostContainer extends Component {
  static propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
      })
    ),
  };

  componentDidMount() {
    const { comments } = this.props;
    this.setState({
      comments,
    });
  }

  render() {
    const { username, thumbnailUrl, imageUrl, likes, timestamp } = this.props;
    return this.state ? (
      <StyledPost>
        <div className="header">
          <img src={thumbnailUrl} alt="thumbnail" />
          <p className="username">{username}</p>
        </div>
        <div className="image-wrapper">
          <img src={imageUrl} alt="post src" />
        </div>
        <div className="post-info">
          <Likes likes={likes} />
          <Comments comments={this.state.comments} />
          <div className="timestamp">{timestamp}</div>
          <AddComment />
        </div>
      </StyledPost>
    ) : (
      'loading'
    );
  }
}

const StyledAddComment = styled.form`
  border-top: 1px solid lightgrey;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
`;

const AddComment = props => (
  <StyledAddComment>
    <Input type="text" placeholder="Add a comment..." />
  </StyledAddComment>
);
