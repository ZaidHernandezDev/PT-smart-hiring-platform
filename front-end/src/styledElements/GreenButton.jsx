import styled from 'styled-components';

const Button = styled.a`
  background-image: linear-gradient(90deg, #3a603f, #b3d168);
  text-transform: uppercase;
  color: white;
  border: none;
`;

export default function GreenButton({ children, className, ...props }) {
  return (
    <Button {...props} className={`btn rounded-4 ${className ?? ''}`.trim()}>
      {children}
    </Button>
  );
}
