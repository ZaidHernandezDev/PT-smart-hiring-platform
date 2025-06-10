import { useParams } from 'react-router-dom';
import Title from '../styledElements/Title';
import MainCard from '../TemplateAppComponents/MainCard';
import BreadCrumb from '../styledElements/BreadCrumb';
import DetailsCard from '../styledElements/DetailsCard';
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 0.5rem;
  border: 0.125rem solid ${({ border }) => border};
  border-radius: 1rem;
`;

const SectionTitle = styled.h4`
  grid-column: 1/-1;
  max-height: 2.5rem;
  padding: 0.5rem;
  margin: 0;
  background-color: ${({ background }) => background};
  border-radius: 1rem;
  font-size: 1.25rem;
  text-align: center;
`;

const puestos = [
  {
    id: 1,
    puesto: 'Desarrollador Frontend',
    area: 'Tecnología',
    total: 20,
    recomendadas: 12,
    noRecomendadas: 8,
  },
  {
    id: 2,
    puesto: 'Diseñador UX',
    area: 'Diseño',
    total: 10,
    recomendadas: 7,
    noRecomendadas: 3,
  },
  {
    id: 3,
    puesto: 'Reclutador',
    area: 'Recursos Humanos',
    total: 15,
    recomendadas: 10,
    noRecomendadas: 5,
  },
];

const userData = [
  { name: 'Zaid Alberto Ramírez Hernández', mail: 'zaid@gmail.com', phone: '5620073976', salario: '20,000' },
  { name: 'Zaid Alberto Ramírez Hernández', mail: 'zaid@gmail.com', phone: '5620073976', salario: '20,000' },
  { name: 'Zaid Alberto Ramírez Hernández', mail: 'zaid@gmail.com', phone: '5620073976', salario: '20,000' },
  { name: 'Zaid Alberto Ramírez Hernández', mail: 'zaid@gmail.com', phone: '5620073976', salario: '20,000' },
  { name: 'Zaid Alberto Ramírez Hernández', mail: 'zaid@gmail.com', phone: '5620073976', salario: '20,000' },
  { name: 'Zaid Alberto Ramírez Hernández', mail: 'zaid@gmail.com', phone: '5620073976', salario: '20,000' },
  { name: 'Zaid Alberto Ramírez Hernández', mail: 'zaid@gmail.com', phone: '5620073976', salario: '20,000' },
  { name: 'Zaid Alberto Ramírez Hernández', mail: 'zaid@gmail.com', phone: '5620073976', salario: '20,000' },
];

export default function Details() {
  const { id } = useParams();
  const pages = [
    { label: 'Home', url: '/', icon: <FaHome /> },
    { label: 'Dashboard', url: '/dashboard' },
    { label: `Detalles / ${id}`, url: `dashboard/detalles/${id}` },
  ];

  return (
    <>
      <Title>Solicitudes del puesto</Title>
      <BreadCrumb items={pages} />
      <MainCard title={'Solicitudes para ' + puestos.find((puesto) => puesto.id === Number(id))?.puesto} cols={2}>
        <SectionWrapper border="#87a17e">
          <SectionTitle background="#87a17e80">Recomendados</SectionTitle>
          {userData.map((element, index) => (
            <DetailsCard {...element} key={index}></DetailsCard>
          ))}
        </SectionWrapper>
        <SectionWrapper border="#be1e2d">
          <SectionTitle background="#be1e2d80">No recomendados</SectionTitle>
        </SectionWrapper>
      </MainCard>
    </>
  );
}
