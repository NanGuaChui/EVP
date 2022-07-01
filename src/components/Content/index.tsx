import { TabBar } from 'components';
import Nav from './nav';

const Content = ({
  showNav = true,
  navType = 'default',
  navStyle = {},
  showTabBar = false,
  style = {},
  children,
  ...props
}) => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', ...style }} {...props}>
      <Nav show={showNav} type={navType} style={navStyle} />
      {children}
      {showTabBar && <TabBar />}
    </div>
  );
};

export default Content;
