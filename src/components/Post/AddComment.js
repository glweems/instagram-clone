import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: none;
`;
const StyledAddComment = styled.form`
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

const AddComment = props => (
  <StyledAddComment>
    <Input type="text" placeholder="Add a comment..." />
    <button type="submit">submit</button>
  </StyledAddComment>
);
export default AddComment;
