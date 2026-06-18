import Publicacion from './Publicacion';

function Feed({ imagenes, seleccionarPublicacion }) {
  return (
    <div className="feed">
      <h2>Feed</h2>

      {imagenes.map((imagen, index) => {
        const usuario = 'Persona'+ (index +1);
        const descripcion = 'Publicacion del feed' + (index + 1);
        return(
<Publicacion
          key={imagen.id}
          usuario={usuario}
          descripcion={descripcion}
          imagen={imagen.url}
          seleccionarPublicacion={() => 
            seleccionarPublicacion({
              id: imagen.id,
              url:imagen.url,
              usuario:usuario,
              descripcion:descripcion

            })}
        />
      
        );
        
      })}
            </div>

  );
}

export default Feed;