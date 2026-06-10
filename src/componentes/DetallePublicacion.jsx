function DetallePublicacion({ publicacion, cerrarDetalle }) {
  return (
    <div className="detalle-publicacion">
      <button onClick={cerrarDetalle}>Cerrar</button>

      <h2>Publicación seleccionada</h2>

      <img
        src={publicacion.url}
        alt="Publicación seleccionada"
      />

      <h3>Persona</h3>
      <p>Descripción de la publicación</p>
      <p>100 Me gusta</p>
    </div>
  );
}

export default DetallePublicacion;