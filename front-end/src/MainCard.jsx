import styled from 'styled-components';

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 1rem;
  background-color: #ffffff50;
  border: 1px solid #88b87660;
  border-radius: 2rem;
  `;

const CardTitle = styled.h3`
font-size: 1.5rem;
`

const Divider = styled.hr`
    width: 40%;
`

export default function MainCard({ title, children }) {
  return (
    <Wrapper>
      <CardTitle>{title}</CardTitle>
      <Divider />
      {children}
    </Wrapper>
  );
}
