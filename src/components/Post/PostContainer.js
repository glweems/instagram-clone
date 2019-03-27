import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'reset-css/reset.css';
import Comments from './Comments';
import { Likes } from './Likes';
import '@fortawesome/fontawesome-free/css/all.css';

const LikePost = ({ click, isLiked }) => {
  const iconClass = isLiked ? 'fas' : 'far';
  const iconStyle = {
    color: isLiked ? 'red' : 'black',
    marginBottom: '0.5rem',
  };
  return (
    <i
      style={iconStyle}
      className={`${iconClass} fa-heart`}
      type="button"
      onClick={click}
    />
  );
};

LikePost.propTypes = {
  click: PropTypes.func,
  isLiked: PropTypes.bool,
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
    const { comments, likes } = this.props;
    this.setState({
      newComment: '',
      placeholder: 'Add Comment..',
      comments,
      likes,
      isLiked: false,
    });
    this.likePost = this.likePost;
  }

  likePost = () => {
    const { likes, isLiked } = this.state;
    let stateObj;
    isLiked
      ? (stateObj = { isLiked: !isLiked, likes: likes - 1 })
      : (stateObj = { isLiked: !isLiked, likes: likes + 1 });

    this.setState(stateObj);
  };

  onKeyDown = e => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      this.onSubmit();
    }
  };

  onSubmit = e => {
    console.log(e);
    const { comments, newComment } = this.state;
    e.preventDefault();
    const commentObj = {
      username: localStorage.getItem('user'),
      text: newComment,
    };
    if (newComment !== '')
      this.setState({
        comments: [...comments, commentObj],
      });
    else
      this.setState({
        placeholder: 'Comment cannot be Blank',
      });
    this.setState({ newComment: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, thumbnailUrl, imageUrl, timestamp } = this.props;
    return this.state ? (
      <StyledPost>
        <div className="header">
          <img type="button" src={thumbnailUrl} alt="thumbnail" />
          <p className="username">{username}</p>
        </div>
        <div className="image-wrapper">
          <img src={imageUrl} alt="post src" />
        </div>
        <div className="post-info">
          <LikePost click={this.likePost} isLiked={this.state.isLiked} />
          <Likes likes={this.state.likes} />
          <Comments comments={this.state.comments} />
          <div className="timestamp">{timestamp}</div>
          <AddComment onSubmit={this.onSubmit}>
            <CommentInput
              name="newComment"
              value={this.state.newComment}
              onChange={this.onChange}
              placeholder={this.state.placeholder}
            />
          </AddComment>
        </div>
      </StyledPost>
    ) : (
        'loading'
      );
  }
}

const CommentInput = styled.input`
  border: none;
`;
const AddComment = styled.form`
  input {
    border-top: 1px solid lightgrey;
    margin-top: 0.75rem;
    padding-top: 0.25rem;
    font-size: 0.75rem;
    width: 100%;
    :focus,
    :active {
    }
  }
`;

const StyledPost = styled.div`
  width: 100%;
  max-width: 512px;
  margin: 0.5rem auto;
  border-bottom: 1px solid lightgray;
  @media screen and (min-width: 500px) {
    border-radius: 3px;
    border: 1px solid lightgray;
  }
  .image-wrapper {
    max-width: 100%;
    img {
      max-width: 100%;
      min-width: 100%;
    }
  }
  .post-info {
    padding: 0.75rem;
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
    margin-top: 0.5rem;
    font-size: 0.65rem;
    font-weight: 300;
    color: gray;
  }
`;
