import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 0.5rem 2rem;
`;

const BreadCrumbItem = styled(Link)`
  display: flex;
  align-items: flex-end;
  color: #294919;
  text-decoration: none;

  & span {
    padding-bottom: 0.125rem;
    margin: 0 0.125rem;
  }
`;

export default function BreadCrumb({ items }) {
  return (
    <Wrapper>
      <Breadcrumbs>
        {items.map((item, index) =>
          index === items.length - 1 ? (
            <BreadCrumbItem as="span" key={index} style={{ fontWeight: 'bold', cursor: 'default' }}>
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </BreadCrumbItem>
          ) : (
            <BreadCrumbItem to={item.url} key={index}>
              {item.label}
            </BreadCrumbItem>
          )
        )}
      </Breadcrumbs>
    </Wrapper>
  );
}
