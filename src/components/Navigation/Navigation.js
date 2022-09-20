import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: #e84a5f;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const Navigation = () => (
  <nav>
    <NavList>
      <li>
        <StyledLink to="/">Головна</StyledLink>
      </li>
      <li>
        <StyledLink to="/contacts">Контакти</StyledLink>
      </li>
    </NavList>
  </nav>
);

export default Navigation;
