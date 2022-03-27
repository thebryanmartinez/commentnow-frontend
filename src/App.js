import { Provider } from 'react-redux';
import './App.css';

import store from './Store/index';
import SignIn from './Components/Views/SignIn';

function App() {
  return (
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
}

export default App;
