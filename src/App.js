import { Provider } from 'react-redux';
import './App.css';

import store from './Store/index';
import SignIn from './Components/Views/SignIn';
import Posts from './Components/Views/Posts';

function App() {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  );
}

export default App;
