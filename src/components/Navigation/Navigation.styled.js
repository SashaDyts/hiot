import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #0004ff;

  font-size: 18px;
  font-weight: bold;

  :not(:last-child) {
    margin-right: 10px;
  }
`;
