import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import Private from './Components/UX/Private/Private'

import { store, persistor } from './Store/index';
import LogIn from './Components/Views/LogInPage';
import Posts from './Components/Views/PostsPage';
import Usuario from './Components/Views/UsuarioPage';
import Registrar from './Components/Views/Registrar';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LogIn />}></Route>
            <Route path="/home" element={<Private><Posts /></Private>}></Route>
            <Route path="/usuario" element={<Usuario />}></Route>
            <Route path="/registrar" element={<Registrar />}></Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
