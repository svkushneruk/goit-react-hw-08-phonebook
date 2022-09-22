import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
`;

export const NotFoundLink = styled(Link)`
  text-decoration: none;
  color: lightseagreen;
  &:hover,
  &:focus {
    color: darkgrey;
  }
`;
