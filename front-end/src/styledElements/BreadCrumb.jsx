import Breadcrumbs from '@mui/material/Breadcrumbs';

export default function BreadCrumb({ items }) {
  return (
    <Breadcrumbs>
      {items.map((item, index) => (
        <a href={item.url} key={index}>
          {item.label}
        </a>
      ))}
    </Breadcrumbs>
  );
}
