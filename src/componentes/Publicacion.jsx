function Publicacion({ usuario, descripcion, imagen }) {
  return (
    <div className="publicacion">
      <h3>{usuario}</h3> {/* aca va el nombre del usuario de la publicación */}

      <img src={imagen} alt="Publicación" /> {/* aca va la imagen de la publicación */}

      <p>{descripcion}</p> {/* aca va la descripción de la publicación */}
    </div>
  );
}

export default Publicacion;