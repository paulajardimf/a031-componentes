import React from "react";
import InfosUsuario from "./InfosUsuario";

function CardVideo() {
  const reproduzVideo = () => {
    alert("O vídeo está sendo reproduzido");
  };

  const titulo = "Título do vídeo";

  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <img src="https://picsum.photos/400/400?a=1 " alt="" />
      <h4>{titulo}</h4>
      <InfosUsuario />
    </div>
  );
}

export default CardVideo;
