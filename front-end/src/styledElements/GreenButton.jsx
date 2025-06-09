import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
  background-image: linear-gradient(90deg, #3a603f, #b3d168);
  max-height: 2.25rem;
  text-transform: uppercase;
  color: white;
  border: none;
  font-weight: 600;
`;

export default function GreenButton({ children, className, ...props }) {
  return (
    <Button {...props} className={`btn rounded-4 ${className ?? ''}`.trim()}>
      {children}
    </Button>
  );
}
