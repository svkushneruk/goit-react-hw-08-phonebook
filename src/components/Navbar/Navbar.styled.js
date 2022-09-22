import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid grey;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: rgb(65, 135, 216);
  transition: color 0.3s easy-in;
  &:hover,
  &:focus {
    color: rgb(118, 177, 229);
  }
`;
