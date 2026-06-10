function TarjetaPerfil({ nombre, usuario, seguidores, seguidos, foto }) {
    return (
    <div className="tarjeta-perfil">
      <img
  className="foto-perfil"
  src={foto}
  alt="Foto del perfil"
/>
      <h3>{nombre}</h3>
      <p>{usuario}</p>
      <p>Seguidores: {seguidores}</p>
      <p>Seguidos: {seguidos}</p>
      <button>Editar perfil</button>
    </div>
  );
}

export default TarjetaPerfil;