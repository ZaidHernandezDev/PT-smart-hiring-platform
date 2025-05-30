import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import styled from 'styled-components';
import { FiMenu, FiUser, FiSettings } from 'react-icons/fi';

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(135deg, #3f51b5 0%, #2196f3 100%);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.12);
  padding: 0.5rem 0;
`;

const HeaderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoText = styled(Typography)`
  font-weight: 700 !important;
  letter-spacing: 1px;
  margin-left: 1rem !important;
  background: linear-gradient(to right, #ffffff, #e0f7fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 1rem;
`;

const Header = ({ onMenuClick }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <HeaderContainer>
          <Box display="flex" alignItems="center">
            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="menu"
              onClick={onMenuClick}
            >
              <FiMenu size={24} />
            </IconButton>
            <LogoText variant="h5">
              Mi Formulario
            </LogoText>
          </Box>
          
          <IconContainer>
            <IconButton color="inherit" aria-label="user">
              <FiUser size={20} />
            </IconButton>
            <IconButton color="inherit" aria-label="settings">
              <FiSettings size={20} />
            </IconButton>
          </IconContainer>
        </HeaderContainer>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;