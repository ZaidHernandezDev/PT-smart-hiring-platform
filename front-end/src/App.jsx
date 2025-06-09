import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(180deg, #fff, #a6bf9d);
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export default function App() {

  return (
    <AppContainer>
      <Header button='login' />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}