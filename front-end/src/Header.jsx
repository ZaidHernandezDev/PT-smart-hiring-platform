import { styled } from 'styled-components';
import GreenButton from './styledElements/GreenButton';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 20px 75px;
`

export default function () {

  return <Header>
    <h1 className='fs-4'><a><img src="#" alt="Wudertec logo" /></a></h1>
    <GreenButton href='#'>Iniciar sesión</GreenButton>
  </Header>;
}
