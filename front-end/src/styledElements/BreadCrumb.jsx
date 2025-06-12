import Breadcrumbs from '@mui/material/Breadcrumbs';
import Tooltip from '@mui/material/Tooltip';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${({ size }) => (size === 'small' ? '40%' : size === 'large' ? '80%' : '60%')};
  margin: 0 auto;
  padding: 0.5rem 2rem;
`;

const BreadCrumbItem = styled(motion.create(Link))`
  display: flex;
  align-items: flex-end;
  color: #294919;
  text-decoration: none;
  border-bottom: none;
  transition: all 0.2s;

  &.hover:hover {
    border-bottom: 1px solid #294919;
    transform: scale(1.1);
  }

  & span {
    padding-bottom: 0.125rem;
    margin: 0 0.125rem;
  }
`;

export default function BreadCrumb({ items, size = 'medium' }) {
  return (
    <Wrapper size={size}>
      <Breadcrumbs>
        {items.map((item, index) =>
          index === items.length - 1 ? (
            <BreadCrumbItem as="span" key={index} style={{ fontWeight: 'bold', cursor: 'default' }}>
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </BreadCrumbItem>
          ) : (
            <Tooltip title={`Ir a ${item.label}`}>
              <BreadCrumbItem className='hover' to={item.url} key={index} whileTap={{ scale: 0.95 }}>
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </BreadCrumbItem>
            </Tooltip>
          )
        )}
      </Breadcrumbs>
    </Wrapper>
  );
}
