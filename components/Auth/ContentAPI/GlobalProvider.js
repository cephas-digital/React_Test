import React, { createContext, useReducer } from 'react'
import auth from './reducer'

export const GlobalContext= createContext();

export default GlobalProvider = React.memo(({ children }) => {
  const authstate = {
    isLogged: true,
    data: {},
    error: null,
    loading: false,
  };

  const [authState, authDispatch] = useReducer(auth, authstate);
  return (
    <GlobalContext.Provider value={{ authState, authDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
});
