import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

type loginType = {
  username: string;
  nombre: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: loginType };

const authReduder = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: "",
      };
    case "login":
      const { nombre, username } = action.payload;
      return {
        ...state,
        token: " ADC123",
        nombre: nombre,
        username: username,
      };

    default:
      return state;
  }
};

const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReduder,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: { nombre: "Angel De La Cruz", username: "angel" },
    });
  };

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">Autenticado como: {nombre}.</div>
      ) : (
        <div className="alert alert-danger">No autenticado.</div>
      )}

      {token ? (
        <button onClick={logout} className="btn btn-danger">
          Log Out
        </button>
      ) : (
        <button onClick={login} className="btn btn-primary">
          Log In
        </button>
      )}
    </>
  );
};

export default Login;
