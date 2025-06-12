import { useState } from 'react';
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

export default function Dashboard() {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const paginatedRows = puestos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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
