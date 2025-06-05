import { styled } from "styled-components";

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-columns-gap: 10px;
  background-color: #222;
  color: white;
  text-align: center;
  padding: 15px;
`;

const Li = styled.li`
  list-style-type: none;
`

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <h5>Información de contacto</h5>
        <ul>
          <Li>Correo electrónico</Li>
          <Li>Teléfono</Li>
          <Li>Dirección</Li>
          <Li>Enlace</Li>
        </ul>
      </div>
      <div>
        <h5>Enlaces importantes</h5>
        <ul>
          <Li>Sobre nosotros</Li>
          <Li>Terminos y condiciones</Li>
          <Li>Politicas de privacidad</Li>
          <Li>Aviso de cookies</Li>
          <Li>Preguntas frecuentes</Li>
        </ul>
      </div>
      <div>
        <div>
          <h5>Redes sociales</h5>
          <ul>
            <Li>Facebook</Li>
            <Li>Instagram</Li>
            <Li>Youtube</Li>
            <Li>TikTok</Li>
          </ul>
        </div>
        <div>
          <h5>Créditos</h5>
          <ul>
            <Li>García Cortes Erick Gabriel</Li>
            <Li>Guarneros Solano Denice</Li>
            <Li>Guevara Samperio Kylie Yael</Li>
            <Li>Ramírez Hernández Zaid Alberto</Li>
            <Li>Ramos Sánchez Ilian Xóchitl</Li>
            <Li>Velázquez Corona David</Li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
}
