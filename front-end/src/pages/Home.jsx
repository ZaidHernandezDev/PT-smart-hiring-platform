import Title from '../styledElements/Title';
import MainCard from '../TemplateAppComponents/MainCard';
import JobCard from '../styledElements/JobCard';
import BreadCrumb from '../styledElements/BreadCrumb';
import { FaHome } from 'react-icons/fa';
import frontEndImage from '../assets/interfaz.png';

const pages = [{ label: 'Home', url: '/', icon: <FaHome /> }];

export default function Home() {
  return (
    <>
      <Title>Vacantes por área</Title>
      <BreadCrumb items={pages} />
      <MainCard title={'Tecnologías de la información'} RowsHeight='17.5rem'>
        {/* <JobCard title="Front-end" image="https://picsum.photos/500/500" link='/front-end'></JobCard> */}
        <JobCard title="Front-end" image={frontEndImage} link='/front-end' />
      </MainCard>
    </>
  );
}
