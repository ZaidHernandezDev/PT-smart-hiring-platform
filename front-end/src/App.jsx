import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Title from './styledElements/Title';
import MainCard from './MainCard';

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

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Title>Vacantes por área</Title>
        <MainCard title={'Tecnologías de la información'}></MainCard>
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
