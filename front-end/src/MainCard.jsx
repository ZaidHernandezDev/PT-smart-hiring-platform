import styled from 'styled-components';

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto 5rem auto;
  padding: 1.5rem;
  background-color: #ffffff50;
  border: 1px solid #88b87660;
  border-radius: 2rem;
`;

const CardTitle = styled.h3`
  width: fit-content;
  padding: 0 0.5rem 0.75rem 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  border-bottom: 3px solid #d3e1ce;
  color: #294919;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 31.3%);
  grid-auto-rows: 17.5rem;
  gap: 2rem 3%;
  width: 100%;
`;

export default function MainCard({ title, children }) {
  return (
    <Wrapper>
      <CardTitle>{title}</CardTitle>
      <CardContainer>{children}</CardContainer>
    </Wrapper>
  );
}
