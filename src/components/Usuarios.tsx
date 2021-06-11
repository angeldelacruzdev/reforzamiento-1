import { Usuario } from "../interfaces/reqRest";
import { useUsuarios } from "../hooks/useUsuarios";
import React from "react";

const Usuarios = React.memo(() => {
  const {
    usuarios,
    btnNextEnable,
    btnLastEnable,
    nextPage,
    lastPage,
  } = useUsuarios();

  const renderItem = (usuario: Usuario) => {
    const { id, first_name, email, avatar } = usuario;

    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            style={{ width: 30, borderRadius: 100 }}
            alt={first_name}
          />
        </td>
        <td>{first_name}</td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios:</h3>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>

            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((item) => renderItem(item))}</tbody>
      </table>
      <button
        className="btn btn-primary "
        style={{ marginBottom: 20 }}
        disabled={btnLastEnable}
        onClick={lastPage}
      >
        Last page
      </button>
      <button
        className="btn btn-primary "
        style={{ marginBottom: 20 }}
        disabled={btnNextEnable}
        onClick={nextPage}
      >
        Next Page
      </button>
    </>
  );
});

export default Usuarios;
