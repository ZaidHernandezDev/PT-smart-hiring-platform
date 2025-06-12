import styled from 'styled-components';

const TitleContainer = styled.h2`
  margin: 1rem auto;
  padding: 0.5rem 1.5rem;
  background-color: white;
  border-radius: 1rem;
  border: 1px solid #88b87660;
  text-transform: uppercase;
  font-size: 1.75rem;
  box-shadow: 0.35rem 0.35rem 0.375rem #ccc;
`;

export default function Title({ children }) {
  return <TitleContainer>{children}</TitleContainer>;
}
