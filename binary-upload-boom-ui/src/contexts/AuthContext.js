import {createContext, useContext, useReducer} from 'react';

const AuthContext = createContext(null);

const AuthDispatchContext = createContext(null);

const initialAuth = {
  userName: '',
  email: '',
  firstName: '',
  lastName: '',
  token: '',
};

export const AuthProvider = ({children}) => {
  const [auth, dispatch] = useReducer(authReducer, initialAuth);

  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export const authReducer = (auth, action) => {
  switch (action.type) {
    case 'all': {
      return {
        ...auth,
        ...action.value,
      };
    }
    default: {
      throw new Error(`No matching action ${action.type} found`);
    }
  }
};

export const useAuth = () => useContext(AuthContext);

export const useAuthDispactch = () => useContext(AuthDispatchContext);
