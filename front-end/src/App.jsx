import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Title from './styledElements/Title';
import MainCard from './MainCard';
import JobCard from './styledElements/JobCard';
import BreadCrumb from './styledElements/BreadCrumb';

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
  const pages = [{ label: 'Home', url: '#' },{ label: '1', url: '#' },{ label: '2', url: '#' },];

  return (
    <AppContainer>
      <Header button='login' />
      <MainContent>
        <Title>Vacantes por área</Title>
        <BreadCrumb items={pages} />
        <MainCard title={'Tecnologías de la información'}>
          <JobCard title="Front-end" image="https://picsum.photos/500/500"></JobCard>
          <JobCard title="Front-end" image="https://picsum.photos/500/500"></JobCard>
          <JobCard title="Front-end" image="https://picsum.photos/500/500"></JobCard>
          <JobCard title="Front-end" image="https://picsum.photos/500/500"></JobCard>
          <JobCard title="Front-end" image="https://picsum.photos/500/500"></JobCard>
          <JobCard title="Front-end" image="https://picsum.photos/500/500"></JobCard>
        </MainCard>
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
