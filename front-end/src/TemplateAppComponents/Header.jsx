import { styled } from 'styled-components';
import { AuthContext } from '../Auth/AuthContext';
import { FaUser } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { color, motion } from 'motion/react';

const HeaderWrapper = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 75px;
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
`;
const Logo = styled.img`
  height: 60px;
  width: auto;
`;


export default function Header({ button }) {
  const { logout, user } = useContext(AuthContext);

  return (
    <HeaderWrapper initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 75 }}>
      <motion.h1 className="fs-4" whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
        <Link to="/">
          <img src="/img/logo.png" alt="Wudertec logo" />
        </Link>
      </motion.h1>
      {button === 'login' && (
        <LogInButton to="/login" whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
          Iniciar sesión
        </LogInButton>
      )}

      {button === 'username' && (
        <UserWrapper>
          <Userlabel whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
            <UserName whileHover={{cursor: 'default'}}>{user}</UserName>
            <UserIcon>
              <FaUser />
            </UserIcon>
          </Userlabel>
          <LogOut onClick={logout} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1, rotate: 10 }}>
            <IoLogOutOutline />
          </LogOut>
        </UserWrapper>
      )}
    </HeaderWrapper>
  );
}
