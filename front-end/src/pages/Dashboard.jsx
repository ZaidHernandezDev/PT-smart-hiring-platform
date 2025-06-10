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
                <TableCell align='center'>Puesto</TableCell>
                <TableCell align='center'>Área</TableCell>
                <TableCell align='center'>Total de solicitudes</TableCell>
                <TableCell align='center'>Solicitudes recomendadas</TableCell>
                <TableCell align='center'>Solicitudes no recomendadas</TableCell>
                <TableCell align='center'>Detalles</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align='center'>{row.puesto}</TableCell>
                  <TableCell align='center'>{row.area}</TableCell>
                  <TableCell align='center'>{row.total}</TableCell>
                  <TableCell align='center'>{row.recomendadas}</TableCell>
                  <TableCell align='center'>{row.noRecomendadas}</TableCell>
                  <TableCell align='center'>
                    <Link href={`dashboard/detalles/${row.id}`} underline="hover" color='#294919'>
                      Ver más
                    </Link>
                  </TableCell>
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
