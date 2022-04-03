import React from 'react'
import Page from '../UX/Page/Page'
import Header from '../UX/Header/Header'
import { Usuario } from '../UX/Usuario/Usuario'

export const UsuarioC = ({usuarios}) => {
  return (
    <Page header={<Header/>}>
   
   <Usuario/>
   
    </Page>
  )
}
const UsuariosItem = ({usuario})=>{
  return (
    <section>
      {usuario.name} 
    </section>
  );
}

export default UsuarioC;