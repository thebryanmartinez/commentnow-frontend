const defaultPublicaciones = {
    publicaciones: [],
    errors: [],
    totalPages: 0, 
    currentPage: 0,
    itemsPerPage: 10, 
    totalItems:0
}

export const publicacionesReducer = (state = defaultPublicaciones, action) =>{
  const {type, payload} = action;
  switch(type){
    case 'PUBLICACIONES_SUCCESS':
      return {...state, publicaciones:[...payload.publicaciones], errors:[]}
    case 'WRITE_POST_SUCCESS':
      return {...state, publicaciones:[...payload.publicaciones], errors:[]}
    case 'PUBLICACIONES_FAILED':
      return {...state, errors: ['Error al cargar las publicaciones']}
    case 'WRITE_POST_FAILED':
      return {...state, errors: ['Error al hacer la publicacion']}
    case 'PUBLICACIONES_CLEAR':
      return {...state, publicaciones:[], errors:[]}
    default:
      return state;
  }
}