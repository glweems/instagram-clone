import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLikes = styled.p`
  font-size: 0.77rem;
  margin-bottom: 0.5rem;
`;
export const Likes = ({ likes }) => (
  <StyledLikes>{`Likes: ${likes}`}</StyledLikes>
);
Likes.propTypes = {
  likes: PropTypes.number,
};
