import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(180deg, #fff, #a6bf9d);
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent></MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
