function Publicacion({usuario, descripcion}) {
  return (
    <div className="publicacion">
        
      <h3>{usuario}</h3> {/* aca va  el nombre del usuario de la publicación */}
      <p>{descripcion}</p> {/* aca va  la imagen de la publicación */}
    </div>
  );
}

export default Publicacion;