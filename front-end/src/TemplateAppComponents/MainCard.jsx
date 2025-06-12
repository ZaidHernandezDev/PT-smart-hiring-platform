import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${({ size }) => (size === 'small' ? '40%' : size === 'large' ? '80%' : '60%')};
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
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  ${({ rowsheight }) => (rowsheight ? 'grid-auto-rows:' + rowsheight + ';' : '')}
  gap: 2rem 3%;
  width: 100%;
`;

export default function MainCard({ title, children, size = 'medium', cols = 3, rowsheight}) {
  return (
    <Wrapper size={size}>
      {title && <CardTitle>{title}</CardTitle>}
      <CardContainer cols={cols} rowsheight={rowsheight}>
        {children}
      </CardContainer>
    </Wrapper>
  );
}
