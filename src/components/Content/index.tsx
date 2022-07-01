import { TabBar } from 'components';
import Nav from './nav';

const Content = ({
  showNav = true,
  navType = 'default',
  navStyle = {},
  navColor = 'white',
  showTabBar = false,
  style = {},
  children,
  ...props
}) => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', position: 'relative', ...style }} {...props}>
      <Nav show={showNav} type={navType} style={navStyle} color={navColor} />
      {children}
      {showTabBar && <TabBar />}
    </div>
  );
};

export default Content;
