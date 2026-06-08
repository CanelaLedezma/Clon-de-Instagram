import Publicacion from './Publicacion';

function Feed (){
 const publicaciones = [
    {
      id: 1,
      usuario: 'Canela',
      descripcion: 'Primera publicación del clon de Instagram',
    },
    {
      id: 2,
      usuario: 'Mora',
      descripcion: 'Segunda publicación del feed',
    },
    {
      id: 3,
      usuario: 'Luna',
      descripcion: 'Otra publicación de prueba',
    },
  ];    
  
 return (
    <div className="feed">
      <h2>Feed</h2>

      {publicaciones.map((publicacion) => (
        <Publicacion
          key={publicacion.id}
          usuario={publicacion.usuario}
          descripcion={publicacion.descripcion}
        />
      ))}
    </div>
  );
}
export default Feed;