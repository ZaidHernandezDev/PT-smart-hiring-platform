import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import styled from 'styled-components';
import { FiMenu, FiUser, FiSettings } from 'react-icons/fi';

// Contenedor principal con degradado
const GradientAppBar = styled(AppBar)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgb(47 0 56 / 80%) 0%,
      rgb(72 94 140 / 80%) 100%);
    z-index: 1;
  }
`;
// Contenido que va sobre el degradado
const AppBarContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`;

const HeaderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
`;

// Texto con efecto especial
const LogoText = styled(Typography)`
  font-weight: 700 !important;
  letter-spacing: 1.2px;
  margin-left: 1rem !important;
  color: white !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;

`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconButtonStyled = styled(IconButton)`
  color: white !important;
  transition: all 0.3s ease !important;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.15) !important;
    transform: scale(1.1);
  }
`;

const Header = ({ onMenuClick }) => {
  return (
    <GradientAppBar position="static">
      <AppBarContent>
        <Toolbar>
          <HeaderContainer>
            <Box display="flex" alignItems="center">
              <IconButtonStyled 
                edge="start" 
                aria-label="menu"
                onClick={onMenuClick}
              >
                <FiMenu size={24} />
              </IconButtonStyled>
              <LogoText variant="h5">
                Solicitud de aplicación Front End
              </LogoText>
            </Box>
            
            <IconContainer>
              <IconButtonStyled aria-label="user">
                <FiUser size={20} />
              </IconButtonStyled>
              <IconButtonStyled aria-label="settings">
                <FiSettings size={20} />
              </IconButtonStyled>
            </IconContainer>
          </HeaderContainer>
        </Toolbar>
      </AppBarContent>
    </GradientAppBar>
  );
};

export default Header;