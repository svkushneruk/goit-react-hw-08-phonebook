import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-content: center;
  font-size: 20px;
  color: rgb(65, 135, 216);
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: rgb(65, 135, 216);
  &:not(:last-child) {
    margin-right: 15px;
  }
  &:not(:first-child) {
    margin-left: 15px;
  }
  &:hover,
  &:focus {
    color: rgb(118, 177, 229);
  }
`;
