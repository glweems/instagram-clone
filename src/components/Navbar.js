import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <p>instagra-clone</p>
        <input type="text" placeholder="Search..." />
        <div>hi</div>
      </StyledNavbar>
    );
  }
}
