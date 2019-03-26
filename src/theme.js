import styled from 'styled-components';

const Theme = {
  font: "'Roboto', sans-serif;",
  colors: {
    light: '#EEEEEE',
  },
};

export const ThemeProvider = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,600');
  font-family: ${Theme.font};
`;

export default Theme;
