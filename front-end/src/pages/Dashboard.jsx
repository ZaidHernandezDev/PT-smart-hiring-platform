import { useState, useEffect } from 'react';
import axios from 'axios';
import Title from '../styledElements/Title';
import MainCard from '../TemplateAppComponents/MainCard';
import BreadCrumb from '../styledElements/BreadCrumb';
import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Paper, Link } from '@mui/material';
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';

const StyledTableContainer = styled(TableContainer)`
  grid-column: 1 / -1;
`;

const StyledCell = styled(TableCell)`
  padding: 0.5rem;
`;

const pages = [
  { label: 'Home', url: '/', icon: <FaHome /> },
  { label: 'Dashboard', url: '/dashboard' },
];

export default function Dashboard() {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const [stats, setStats] = useState({
    total: 0,
    recomendadas: 0,
    noRecomendadas: 0,
  });

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

    axios
      .get(`${apiUrl}/candidates/stats`)
      .then((res) => {
        setStats({
          total: res.data.total_candidates,
          recomendadas: res.data.accepted_candidates,
          noRecomendadas: res.data.rejected_candidates,
        });
      })
      .catch((err) => {
        console.error('Error al obtener estadísticas:', err);
        // Opcional: Mostrar notificación al usuario
        Swal.fire({
          title: 'Error',
          text: 'No se pudieron cargar las estadísticas',
          icon: 'error',
        });
      });
  }, []);

  const puestos = [
    {
      id: 1,
      puesto: 'Desarrollador Frontend',
      area: 'Informática',
      total: stats.total,
      recomendadas: stats.recomendadas,
      noRecomendadas: stats.noRecomendadas,
    },
  ];

  const paginatedRows = puestos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Title>Vacantes por área</Title>
      <BreadCrumb items={pages} size="large" />
      <MainCard title={'Filtrar vacantes'} size="large">
        <StyledTableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <StyledCell align="center">Puesto</StyledCell>
                <StyledCell align="center">Área</StyledCell>
                <StyledCell align="center">Total de solicitudes</StyledCell>
                <StyledCell align="center">Solicitudes recomendadas</StyledCell>
                <StyledCell align="center">Solicitudes no recomendadas</StyledCell>
                <StyledCell align="center">Detalles</StyledCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow key={row.id}>
                  <StyledCell align="center">{row.puesto}</StyledCell>
                  <StyledCell align="center">{row.area}</StyledCell>
                  <StyledCell align="center">{row.total}</StyledCell>
                  <StyledCell align="center">{row.recomendadas}</StyledCell>
                  <StyledCell align="center">{row.noRecomendadas}</StyledCell>
                  <StyledCell align="center">
                    <Link href={`dashboard/detalles/${row.id}`} underline="hover" color="#294919">
                      Ver más
                    </Link>
                  </StyledCell>
                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  count={puestos.length}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  rowsPerPageOptions={[]}
                  onPageChange={handleChangePage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </StyledTableContainer>
      </MainCard>
    </>
  );
}
