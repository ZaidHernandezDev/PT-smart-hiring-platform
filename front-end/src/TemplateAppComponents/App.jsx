import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import { styled } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { motion } from 'motion/react';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(180deg, #fff, #a6bf9d);
`;

const MainContent = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export default function App() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  let headerButton;

  if (!isLoginPage) {
    headerButton = user ? 'username' : 'login';
  }

  return (
    <AppContainer>
      <Header button={headerButton} />
      <MainContent initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 75 }}>
        <Outlet />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}
