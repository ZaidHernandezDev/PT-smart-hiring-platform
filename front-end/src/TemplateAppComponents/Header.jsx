import { styled } from 'styled-components';
import { AuthContext } from '../Auth/AuthContext';
import { FaUser } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import GreenLinkButton from '../styledElements/GreenLinkButton';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 75px;
`;

const UserWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Userlabel = styled.div`
  display: flex;
  background-color: #87a17e;
  border-radius: 2.5rem;
`;

const UserName = styled.p`
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

const LogOut = styled.button`
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
    <HeaderWrapper>
      <h1 className="fs-4">
        <Link to='/'>
          <Logo src="/img/logo.png" alt="Wudertec logo" />
        </Link>
      </h1>
      {button === 'login' && <GreenLinkButton to="/login">Iniciar sesión</GreenLinkButton>}

      {button === 'username' && (
        <UserWrapper>
          <Userlabel>
            <UserName>{user}</UserName>
            <UserIcon>
              <FaUser />
            </UserIcon>
          </Userlabel>
          <LogOut onClick={logout}>
            <IoLogOutOutline />
          </LogOut>
        </UserWrapper>
      )}
    </HeaderWrapper>
  );
}
