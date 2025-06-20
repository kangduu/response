import { Grid } from 'antd';

const { useBreakpoint } = Grid;
export default function HomePage() {
  const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
  return (
    <div style={{ fontSize: 40 }}>
      <ul>
        <li>xs: {xs + ' <  576px'}</li>
        <li>sm: {sm + ' >= 576px'}</li>
        <li>md: {md + ' >= 768px'}</li>
        <li>lg: {lg + ' >= 992px'}</li>
        <li>xl: {xl + ' >= 1200px'}</li>
        <li>xxl: {xxl + ' >= 1600px'}</li>
      </ul>
    </div>
  );
}
