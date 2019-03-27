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
  input {
    border: none;
    border-bottom: 1px solid lightgrey;
    margin-top: 0.75rem;
    padding-top: 0.25rem;
    font-size: 0.75rem;
    width: 100%;
    :placeholder-shown {
      text-align: center;
      border-radius: 3px;
    }
    :focus,
    :active {
    }
  }
`;

export default Theme;
