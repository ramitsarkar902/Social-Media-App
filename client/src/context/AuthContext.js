import { INITIAL_STATE } from "./InitialState";
import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

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
