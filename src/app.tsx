import { Provider } from 'react-redux';
import configStore from './store';
import './app.scss';
import './i18n';

const store = configStore();

const App = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default App;
