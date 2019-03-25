import React from 'react';
import styled from 'styled-components';

const Theme = {
  font: "'Roboto', sans-serif;",
};

export const ThemeProvider = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,600');
  font-family: ${Theme.font};
`;

export const Input = styled.input`
  border: none;
`;

export default Theme;
