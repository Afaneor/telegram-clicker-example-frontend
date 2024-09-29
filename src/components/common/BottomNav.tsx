// src/components/common/BottomNav.tsx
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Home, ShoppingCart } from '@mui/icons-material';

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-around;
  padding: ${({ theme }) => theme.spacing(1)} 0;
`;

const NavIcon = styled.div`
  color: #fff;
  font-size: 1.5rem;
`;

const BottomNav: React.FC = () => {
    return (
        <Nav>
            <NavLink to="/" className="active">
                <NavIcon>
                    <Home />
                </NavIcon>
            </NavLink>
            <NavLink to="/shop" className="active">
                <NavIcon>
                    <ShoppingCart />
                </NavIcon>
            </NavLink>
        </Nav>
    );
};

export default BottomNav;
