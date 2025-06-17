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

export default function DetailsCard({ full_name, age, email, phone, onClick }) {
  return (
    <Card sx={{ bgcolor: '#e0e0e0', border: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea onClick={onClick} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Title>{full_name}</Title>
          <List>
            <li>
              <b>Edad: </b>
              {age}
            </li>
            <li>
              <b>E-mail: </b>
              {email}
            </li>
            <li>
              <b>Teléfono: </b>
              {phone}
            </li>
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
