import { styled } from 'styled-components';
import { motion } from 'motion/react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const FooterContainer = styled(motion.footer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.625rem;
  border-radius: 2rem 2rem 0 0;
  background-color: #18300c;
  color: white;
  text-align: center;
  padding: 1rem;
`;

const TextList = styled.ul`
  padding: 0;
  margin: 0;
`;

const GeneralLi = styled.li`
  list-style-type: none;
  margin: 0.5rem 0;

  & a {
    color: white;
    text-decoration: none;
  }
`;

const IconList = styled.ul`
  display: flex;
  padding: 0;
  justify-content: center;
`;

const IconLi = styled.li`
  font-size: 3em;
  margin: 0 2%;
  list-style-type: none;

  & a {
    color: white;
    display: block;
  }

  & a:hover {
    color: linear-gradient(225deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  }
`;

export default function Footer() {
  return (
    <FooterContainer initial={{ y: 100, opacity: 0 }} animate={{ y: 10, opacity: 1 }} transition={{ type: 'spring', stiffness: 75 }}>
      <div>
        <h5>Información de contacto</h5>
        <TextList>
          <GeneralLi>info@wundertec.com</GeneralLi>
          <GeneralLi>+52 55 4431 4216</GeneralLi>
          <GeneralLi>
            José María Ibarrarán 47, 8A. San José Insurgentes, C.P.
            <br />
            03900, Ciudad de México
          </GeneralLi>
          <GeneralLi>
            <a href="https://www.wundertec.com/es/">https://www.wundertec.com/es/</a>
          </GeneralLi>
        </TextList>
      </div>
      <div>
        <h5>Enlaces importantes</h5>
        <TextList>
          <GeneralLi>Sobre nosotros</GeneralLi>
          <GeneralLi>Terminos y condiciones</GeneralLi>
          <GeneralLi>Politicas de privacidad</GeneralLi>
          <GeneralLi>Aviso de cookies</GeneralLi>
          <GeneralLi>Preguntas frecuentes</GeneralLi>
        </TextList>
      </div>
      <div>
        <div>
          <h5>Redes sociales</h5>
          <IconList>
            <IconLi>
              <motion.a href="https://www.facebook.com/wundertec" whileHover={{ scale: 1.2, color: '#1877f2' }}>
                <FaFacebook />
              </motion.a>
            </IconLi>
            <IconLi>
              <motion.a href="https://www.instagram.com/wundertec/" whileHover={{ scale: 1.2, color: '#E1306C' }}>
                <FaInstagram />
              </motion.a>
            </IconLi>
            <IconLi>
              <motion.a href="https://x.com/wundertec" whileHover={{ scale: 1.2, color: '#000' }}>
                <FaSquareXTwitter />
              </motion.a>
            </IconLi>
            <IconLi>
              <motion.a href="https://www.youtube.com/@wundertec4262" whileHover={{ scale: 1.2, color: '#c4302b' }}>
                <FaYoutube />
              </motion.a>
            </IconLi>
          </IconList>
        </div>
        <div>
          <h5>Créditos</h5>
          <TextList>
            <GeneralLi>García Cortes Erick Gabriel</GeneralLi>
            <GeneralLi>Guarneros Solano Denice</GeneralLi>
            <GeneralLi>Guevara Samperio Kylie Yael</GeneralLi>
            <GeneralLi>Ramírez Hernández Zaid Alberto</GeneralLi>
            <GeneralLi>Ramos Sánchez Ilian Xóchitl</GeneralLi>
            <GeneralLi>Velázquez Corona David</GeneralLi>
          </TextList>
        </div>
      </div>
    </FooterContainer>
  );
}
