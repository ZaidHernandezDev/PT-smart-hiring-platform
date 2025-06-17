import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { AuthContext } from '../Auth/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoLogOutOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import Tooltip from '@mui/material/Tooltip';
import brandImage from '/img/logo.png';
import useResponsiveValues from '../Hooks/useResponsiveValues';

const HeaderWrapper = styled(motion.header)`
  display: flex;
  flex-direction: ${({$direction}) => $direction};
  justify-content: space-between;
  align-items: center;
  padding: 20px 75px;
`;

const Brand = styled(motion.h1)`
  height: 4.5rem;
  width: 18rem;
`;

const ImageContainer = styled(Link)``;

const BrandImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const LogInButton = styled(motion.create(Link))`
  background-image: linear-gradient(90deg, #3a603f, #b3d168);
  padding: 0.375rem 1rem;
  text-transform: uppercase;
  border: 2px solid;
  border-radius: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: white;

  &:hover {
    background-image: linear-gradient(90deg, white, white);
    color: #294919;
    border: 2px solid #294919;
  }
`;

const UserWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Userlabel = styled(motion.div)`
  display: flex;
  background-color: #87a17e;
  border-radius: 2.5rem;
  box-shadow: 0.35rem 0.35rem 0.375rem #ccc;
`;

const UserName = styled(motion.p)`
  margin: 0 1rem 0 1.5rem;
  font-size: 1.375rem;
  line-height: 3rem;
  font-weight: 500;
  color: white;
`;

const UserIcon = styled.span`
  background-color: white;
  margin: 0.125rem;
  padding: 0.375rem;
  border: 0.125rem solid #87a17e;
  border-radius: 100%;
  font-size: 2rem;
  line-height: 0;
  color: #294919;
  overflow: hidden;
`;

const LogOut = styled(motion.button)`
  margin: 0;
  padding: 0;
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-radius: 100%;
  border: 0.125rem solid #294919;
  font-size: 2rem;
  line-height: 0;
  color: #294919;
  box-shadow: 0.35rem 0.35rem 0.375rem #ccc;
`;
const Logo = styled.img`
  height: 60px;
  width: auto;
`;

export default function Header({ button }) {
  const direction = useResponsiveValues([{ width: 715, value: 'column' }], 'row');
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const redirectDashboard = () => {
    navigate('/dashboard');
    handleClose();
  };

  return (
    <HeaderWrapper
      $direction={direction}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 75 }}
    >
      <Tooltip title="Ir a inicio">
        <Brand className="fs-4" whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
          <ImageContainer to="/">
            <BrandImage src={brandImage} alt="Wudertec logo" />
          </ImageContainer>
        </Brand>
      </Tooltip>
      {button === 'login' && (
        <LogInButton to="/login" whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
          Iniciar sesión
        </LogInButton>
      )}

      {button === 'username' && (
        <UserWrapper>
          <Userlabel whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }} onClick={handleClick}>
            <UserName whileHover={{ cursor: 'default' }}>{user}</UserName>
            <UserIcon>
              <FaUser />
            </UserIcon>
          </Userlabel>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                'aria-labelledby': 'basic-button',
              },
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={redirectDashboard}>Ir a dashboard</MenuItem>
          </Menu>
          <Tooltip title="Cerrar sesión">
            <LogOut onClick={logout} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1, rotate: 10 }}>
              <IoLogOutOutline />
            </LogOut>
          </Tooltip>
        </UserWrapper>
      )}
    </HeaderWrapper>
  );
}
