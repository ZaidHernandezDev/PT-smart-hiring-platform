import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import styled from 'styled-components';

const Title = styled.h5`
  font-size: 1.125rem;
  text-align: center;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export default function DetailsCard({ name, mail, phone, salario, onClick }) {
  return (
    <Card sx={{ bgcolor: '#e0e0e0', border: 1 }}>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Title>{name}</Title>
          <List>
            <li>
              <b>E-mail: </b>
              {mail}
            </li>
            <li>
              <b>Teléfono: </b>
              {phone}
            </li>
            <li>
              <b>Salario: </b>
              {salario}
            </li>
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
