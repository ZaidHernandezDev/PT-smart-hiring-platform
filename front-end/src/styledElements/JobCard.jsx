import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`

  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-height: Calc(100% - 3.5rem);
  /* 100% menos el alto del botón*/
  margin-bottom: 0.5rem;
  background-color: white;
  border-radius: 1rem;
`;

const MainImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const JobName = styled.h4`
  position: absolute;
  margin-top: -3rem;
  margin-left: -.5rem;
  width: fit-content;
  padding: 0.375rem 0.75rem;
  background-color: #d3e1ce;
  border-radius: 0.625rem;
  color: white;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const BtnApply = styled(Link)`
  background-color: #fff;
  width: fit-content;
  margin: auto;
  padding: 0.1rem 1rem;
  font-weight: 600;
  color: #294919;
  letter-spacing: .025rem;
  font-size: 1.2rem;
`;

export default function JobCard({ title, image, link }) {
  return (
    <Card>
      <ImageContainer>
        <MainImage src={image} alt="Puesto disponible" />
        <JobName>{title}</JobName>
      </ImageContainer>
      <BtnApply className="btn" to={link}>Aplicar</BtnApply>
    </Card>
  );
}
