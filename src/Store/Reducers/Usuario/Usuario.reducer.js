const defaultUsuario = {
  usuario: null,
  isLoading: false,
  errors: [],
  totalPages:0,
  currentPage:0,
  itemXPage:10,
  totalItems:0
}

export const usuarioReducer = (state = defaultUsuario, action)=>{
  const {type, payload} = action;
  switch(type){
    case 'USUARIO_LOADING':
      return {...state, isLoading: true};
    case 'USUARIO_FAILED':
      return {...state, isLoading: false, errors:['Error al cargar usuarios']};
    case 'USUARIO_SUCCESS':
      return {
        ...state,
        usuario:[...payload.usuario],
        isLoading: false,
        errors:[]
      };
    case 'USUARIO_CLEAR':
      return {
        ...state,
        usuario: [],
        isLoading: false,
        errors: []
      };
    default:
      return state;
  }
}
