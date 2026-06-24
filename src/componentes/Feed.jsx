import Publicacion from './Publicacion';

function Feed({ imagenes, seleccionarPublicacion }) {
  return (
    <div className="feed">
      <h2>Feed</h2>

      {imagenes.map((imagen, index) => { 
      //crea variables de c/elemento
        const usuario = 'Persona'+ (index +1);
        const descripcion = 'Publicacion del feed' + (index + 1);
        const comentarios = [
          {
            id: 1,
            usuario: '@usuario1',
            texto: 'Que linda publicacion!!'
          }
          ,
          {
            id: 2,
            usuario: '@usuario2',
            texto: 'Es igual a mi gatoo'
          }
        ];
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
              descripcion:descripcion,
              comentarios: comentarios

            })}
        />
      
        );
        
      })}
            </div>

  );
}

export default Feed;
