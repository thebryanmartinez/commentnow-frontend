import { Provider } from 'react-redux';
import './App.css';

import store from './Store/index';
import { Page } from './Components/Views/Page'

function App() {
  return (
    <Provider store={store}>
      <Page/>
    </Provider>
  );
}

export default App;
