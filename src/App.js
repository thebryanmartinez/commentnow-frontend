import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import store from './Store/index';
import LogIn from './Components/Views/LogInPage';
import Posts from './Components/Views/Posts';
import Usuario from './Components/Views/UsuarioPage';
import Registrar from './Components/Views/Registrar';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LogIn/>}></Route>
        <Route path="/home" element={<Posts/>}></Route>
        <Route path="/usuario" element={<Usuario/>}></Route>
        <Route path="/registrar" element={<Registrar/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
