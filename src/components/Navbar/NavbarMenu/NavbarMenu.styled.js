import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  color: #000;
  &.active {
    color: rgb(65, 135, 216);
  }
`;
