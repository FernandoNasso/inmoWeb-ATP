// redux/reducer/reducer.js
const initialState = {
    // Define tu estado inicial aquí
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      // Agrega casos para manejar las diferentes acciones
      // case 'ALGUNA_ACCION':
      //   return { ...state, algo: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  