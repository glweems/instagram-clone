import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Comments = ({ comments }) =>
  comments.map(({ username, text }, index) => (
    <Comment key={index} username={username} text={text} />
  ));

const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  margin: 0.25rem 0;
  p {
    color: darkblue;
    margin-right: 0.5rem;
    font-weight: bold;
  }
  span {
    color: black;
    font-weight: normal;
  }
`;

const Comment = ({ username, text }) => (
  <StyledComment>
    <p>
      {username} <span>{text}</span>
    </p>
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

export default Comments;
