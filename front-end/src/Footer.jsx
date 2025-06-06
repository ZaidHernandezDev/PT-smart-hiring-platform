import { styled } from 'styled-components';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.625rem;
  border-radius: 2rem 2rem 0 0;
  background-color: #18300c;
  color: white;
  text-align: center;
  padding: 1rem;
`;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`

const Li = styled.li`
  list-style-type: none;
  margin: 0.5rem 0;

  & a {
    color: white;
    text-decoration: none;
  }
`;

const IconLi = styled.li`
  font-size: 3em;
  margin: 0 2%;
  display: inline;

  & a {
    color: white;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <h5>Información de contacto</h5>
        <Ul>
          <Li>info@wundertec.com</Li>
          <Li>+52 55 4431 4216</Li>
          <Li>
            José María Ibarrarán 47, 8A. San José Insurgentes, C.P.
            <br />
            03900, Ciudad de México
          </Li>
          <Li>
            <a href="https://www.wundertec.com/es/">https://www.wundertec.com/es/</a>
          </Li>
        </Ul>
      </div>
      <div>
        <h5>Enlaces importantes</h5>
        <Ul>
          <Li>Sobre nosotros</Li>
          <Li>Terminos y condiciones</Li>
          <Li>Politicas de privacidad</Li>
          <Li>Aviso de cookies</Li>
          <Li>Preguntas frecuentes</Li>
        </Ul>
      </div>
      <div>
        <div>
          <h5>Redes sociales</h5>
          <Ul>
            <IconLi>
              <a href="https://www.facebook.com/wundertec">
                <FaFacebook />
              </a>
            </IconLi>
            <IconLi>
              <a href="https://www.instagram.com/wundertec/">
                <FaInstagram />
              </a>
            </IconLi>
            <IconLi>
              <a href="https://x.com/wundertec">
                <FaSquareXTwitter />
              </a>
            </IconLi>
            <IconLi>
              <a href="https://www.youtube.com/@wundertec4262">
                <FaYoutube />
              </a>
            </IconLi>
          </Ul>
        </div>
        <div>
          <h5>Créditos</h5>
          <Ul>
            <Li>García Cortes Erick Gabriel</Li>
            <Li>Guarneros Solano Denice</Li>
            <Li>Guevara Samperio Kylie Yael</Li>
            <Li>Ramírez Hernández Zaid Alberto</Li>
            <Li>Ramos Sánchez Ilian Xóchitl</Li>
            <Li>Velázquez Corona David</Li>
          </Ul>
        </div>
      </div>
    </FooterContainer>
  );
}
