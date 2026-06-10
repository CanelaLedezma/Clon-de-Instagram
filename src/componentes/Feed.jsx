import Publicacion from './Publicacion';

function Feed() {
  const publicaciones = [
    {
      id: 1,
      usuario: 'Persona1',
      descripcion: 'publicación del feed 1',
      imagen: 'https://placekitten.com/400/400',
    },
    {
      id: 2,
      usuario: 'Persona2',
      descripcion: 'publicación del feed 2',
      imagen: 'https://placekitten.com/401/400',
    },
    {
      id: 3,
      usuario: 'Persona3',
      descripcion: 'publicación del feed 3',
      imagen: 'https://placekitten.com/400/401',
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
          imagen={publicacion.imagen}
        />
      ))}
    </div>
  );
}

export default Feed;