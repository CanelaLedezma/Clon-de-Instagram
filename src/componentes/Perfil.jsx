function Perfil({ imagenes }) {
  return (
    <div className="perfil">
      <div className="perfil-encabezado">
        <img
          className="foto-perfil-completa"
          src="https://cdn2.thecatapi.com/images/Z5Wd0A-r_.jpg"
          alt="Foto de perfil de Canela"
        />

        <div>
          <h2>@canela</h2>

          <p>
            Amante de los gatos y de compartir sus mejores momentos.
          </p>

          <div className="perfil-estadisticas">
            <p>Publicaciones: {imagenes.length}</p>
            <p>Seguidores: 1200</p>
            <p>Seguidos: 350</p>
          </div>

          <button>Editar perfil</button>
        </div>
      </div>

      <h3>Publicaciones</h3>

      <div className="publicaciones-perfil">
        {imagenes.map((imagen) => (
          <img
            key={imagen.id}
            src={imagen.url}
            alt="Publicación de @canela"
          />
        ))}
      </div>
    </div>
  );
}

export default Perfil;