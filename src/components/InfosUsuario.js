import React from "react";
import imgUsuario from "./img/anonimo.png";

function InfosUsuario() {
  const nomeUsuario = "Nome do Usuário";

  return (
    <div className="container-usuario">
      <img src={imgUsuario} className="imagem-usuario" alt="imagem do usuário"/>
      <h4>{nomeUsuario}</h4>
    </div>
  );
}

export default InfosUsuario;
