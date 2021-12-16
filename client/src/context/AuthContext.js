import INITIAL_STATE from "./InitialState";
import { createContext, useReducer } from "react";

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = () => {
  const [state, dispatch] = useReducer(AuthContext, INITIAL_STATE);

  return (
    <AuthContextProvider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContextProvider>
  );
};
