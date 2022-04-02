import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import store from './Store/index';
import LogIn from './Components/Views/LogIn';
import Posts from './Components/Views/Posts';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LogIn/>}></Route>
        <Route path="/home" element={<Posts/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
