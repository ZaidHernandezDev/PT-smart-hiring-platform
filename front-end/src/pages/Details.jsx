import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Title from '../styledElements/Title';
import MainCard from '../TemplateAppComponents/MainCard';
import BreadCrumb from '../styledElements/BreadCrumb';
import DetailsCard from '../styledElements/DetailsCard';
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';
import DialogDetails from '../styledElements/DialogDetails';
import useResponsiveValues from '../Hooks/useResponsiveValues';

const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ $cols }) => `repeat(${$cols}, 1fr)`};
  grid-template-rows: 2.5rem;
  grid-auto-rows: 13rem;
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

export default function Details() {
  const [recomendadas, setRecomendadas] = useState([]);
  const [noRecomendadas, setNoRecomendadas] = useState([]);
  const outerCols = useResponsiveValues([{ width: 800, value: 1 }], 2);
  const containerWidth = useResponsiveValues([{ width: 600, value: 'large' }], 'medium');
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const innerCols = useResponsiveValues(
    [
      { width: 450, value: 1 },
      { width: 800, value: 2 },
      { width: 1100, value: 1 },
    ],
    2
  );

  useEffect(() => {
    axios.get('http://localhost:8000/candidates/summary').then((res) => {
      const data = res.data;
      setRecomendadas(data.filter((d) => d.result === 1));
      setNoRecomendadas(data.filter((d) => d.result === 0));
    });
  }, []);

  const handleOpen = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8000/candidates/${id}`);
      setSelectedUser(res.data);
      setOpen(true);
    } catch (error) {
      console.error('Error al obtener los detalles del candidato', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  const pages = [
    { label: 'Home', url: '/', icon: <FaHome /> },
    { label: 'Dashboard', url: '/dashboard' },
    { label: `Detalles / ${id}`, url: `dashboard/detalles/${id}` },
  ];

  return (
    <>
      <Title>Solicitudes del puesto</Title>
      <BreadCrumb items={pages} size={containerWidth} />
      <MainCard title={'Solicitudes para ' + puestos.find((puesto) => puesto.id === Number(id))?.puesto} cols={outerCols} size={containerWidth}>
        <SectionWrapper $cols={innerCols} border="#87a17e">
          <SectionTitle background="#87a17e80">Recomendados</SectionTitle>
          {recomendadas.length === 0 ? (
            <p>No hay solicitudes recomendadas.</p>
          ) : (
            recomendadas.map((element, index) => <DetailsCard key={index} {...element} onClick={() => handleOpen(element.id)} />)
          )}
        </SectionWrapper>
        <SectionWrapper $cols={innerCols} border="#be1e2d">
          <SectionTitle background="#be1e2d80">No recomendados</SectionTitle>
          {noRecomendadas.length === 0 ? (
            <p>No hay solicitudes no recomendadas.</p>
          ) : (
            noRecomendadas.map((element, index) => <DetailsCard key={index} {...element} onClick={() => handleOpen(element.id)} />)
          )}
        </SectionWrapper>
      </MainCard>
      {/* Modal de más información */}
      <DialogDetails open={open} handleClose={handleClose} selectedUser={selectedUser} />
    </>
  );
}
