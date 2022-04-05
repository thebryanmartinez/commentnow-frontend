
import Page from "../UX/Page/Page";
import Posts from '../UX/Posts/Posts'
import '../UX/DataUsuario/DataUsuario.css';
import Header from '../UX/Header/Header'

import { PrimaryButton, SecondaryButton } from '../UX/Button/Button'

const Usuario = (usuario,publicaciones)=>{
  console.log(publicaciones);
  return (
    <Page header={<Header/>}>    
      <div className="info-user">
      <div className="username-container">
        <div className="User-names">{usuario.usuario[0].names}<pre ></pre> <p className='username'>@{usuario.usuario[0].username}</p> </div>
        <div className="User-But"><PrimaryButton>+ Seguir</PrimaryButton><pre className="espacio"></pre><SecondaryButton>Editar</SecondaryButton></div>
      </div>
      <div >
        <p className="Des-User">{usuario.usuario[0].description}</p>
      </div>
      <p className="Birth-date">Cumpleaños: {usuario.usuario[0].birthdate}</p>
     
    </div> 
    <Posts/>
        
    </Page>
  );
}



export default Usuario;
