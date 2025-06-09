import Breadcrumbs from '@mui/material/Breadcrumbs';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 0.5rem 2rem;
`;

const BreadCrumbItem = styled.a`
  color: #294919;
  text-decoration: none;
`;

export default function BreadCrumb({ items }) {
  return (
    <Wrapper>
      <Breadcrumbs>
        {items.map((item, index) =>
          index === items.length - 1 ? (
            <BreadCrumbItem as="span" key={index} style={{ textDecoration: 'underline', fontWeight: 'bold', cursor: 'default' }}>
              {item.label}
            </BreadCrumbItem>
          ) : (
            <BreadCrumbItem href={item.url} key={index}>
              {item.label}
            </BreadCrumbItem>
          )
        )}
      </Breadcrumbs>
    </Wrapper>
  );
}
