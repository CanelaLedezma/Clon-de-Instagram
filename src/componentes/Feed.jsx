import Publicacion from './Publicacion';

function Feed (){
 const publicaciones = [
    {
      id: 1,
      usuario: 'Persona1',
      descripcion: 'publicación del feed 1',
    },
    {
      id: 2,
      usuario: 'Persona2',
      descripcion: 'publicación del feed 2',
    },
    {
      id: 3,
      usuario: 'Persona3',
      descripcion: 'publicación del feed 3',
    },
  ];    
  
 return (
    <div className="feed">
      <h2>Feed</h2>

      {publicaciones.map((publicacion) => (  <Publicacion
          key={publicacion.id}
          usuario={publicacion.usuario}
          descripcion={publicacion.descripcion}
        />
      ))}
    </div>
  );
}
export default Feed;