import Title from '../styledElements/Title';
import MainCard from '../TemplateAppComponents/MainCard';
import JobCard from '../styledElements/JobCard';
import BreadCrumb from '../styledElements/BreadCrumb';
import useResponsiveValues from '../Hooks/useResponsiveValues';
import { FaHome } from 'react-icons/fa';
import frontEndImage from '../assets/interfaz.png';

const pages = [{ label: 'Home', url: '/', icon: <FaHome /> }];

export default function Home() {
  const cols = useResponsiveValues(
    [
      { width: 500, value: 1 },
      { width: 700, value: 2 },
    ],
    3
  );
  const size = useResponsiveValues([{ width: 650, value: 'large' }], 'medium');

  return (
    <>
      <Title>Vacantes por área</Title>
      <BreadCrumb items={pages} size={size} />
      <MainCard title={'Tecnologías de la información'} rowsheight="17.5rem" cols={cols} size={size}>
        <JobCard title="Front-end" image={frontEndImage} link="/front-end"></JobCard>
        <JobCard title="Front-end" image={frontEndImage} link="/front-end"></JobCard>
      </MainCard>
    </>
  );
}
