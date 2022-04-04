import './DataUsuario.css';
import React, { useState, useEffect } from 'react'
import { PrimaryButton, SecondaryButton } from '../Button/Button'


export const DataUsuario = (props) => {
  if(props.usuario==null){
    console.log("nulo");
  }
console.log(props.usuario.names);
  return (
    <div className="info-user">
      <div className="username-container">
        <div className="User-names">{props.names}<pre ></pre> <p className='username'>@thebryanmartinez</p> </div>
        <div className="User-But"><PrimaryButton>+ Seguir</PrimaryButton><pre className="espacio"></pre><SecondaryButton>Editar</SecondaryButton></div>
      </div>
      <div >
        <p className="Des-User">Lorem ipsum dolor ssssit ? Dolorem modi maxime veritatis? Aliquam, molestiae. asdfe asldkkfj als;dkfj asdlk asd;fsli isdafke sadf ;laskdjf brya nadlksjd</p>
      </div>
      <p className="Birth-date">Cumpleaños: 01/04/2001</p>
     
    </div>
  )
}


export default DataUsuario;
