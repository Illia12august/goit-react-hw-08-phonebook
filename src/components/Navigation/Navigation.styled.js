import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;
  justify-content: end;
  gap:50px;
  padding-top: 20px;
  padding-bottom: 48px;
  font-size: 24px;
  padding-right: 20px;
`;

export const NavigationContainer = styled.div`
  display: block;
  gap: 50px;
  margin-right: 20px;
`;

export const NavigationTextStyle = styled(Link)`
  text-decoration: none;
  color: #ffffff80;
  &:hover,
  :focus,
  :active {
    color: darkgoldenrod;
  }
`;
