import Publicacion from './Publicacion';

function Feed({ imagenes, seleccionarPublicacion }) {
  return (
    <div className="feed">
      <h2>Feed</h2>

      {imagenes.map((imagen, index) => (
        <Publicacion
          key={imagen.id}
          usuario={'Persona' + (index + 1)}
          descripcion={'Publicación del feed ' + (index + 1)}
          imagen={imagen.url}
          seleccionarPublicacion={() => seleccionarPublicacion(imagen)}
        />
      ))}
    </div>
  );
}

export default Feed;