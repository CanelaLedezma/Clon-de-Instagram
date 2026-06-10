function TarjetaPerfil({ nombre, usuario, seguidores, seguidos }) {
  return (
    <div className="tarjeta-perfil">
      <h3>{nombre}</h3>
      <p>{usuario}</p>
      <p>Seguidores: {seguidores}</p>
      <p>Seguidos: {seguidos}</p>
      <button>Editar perfil</button>
    </div>
  );
}

export default TarjetaPerfil;