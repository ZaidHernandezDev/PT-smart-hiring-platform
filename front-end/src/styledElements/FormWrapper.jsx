import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 5rem;
  gap: 1rem;
`;

export default function FormWrapper({ children }) {
  return <Wrapper>
    {children}
  </Wrapper>;
}
