import { useState } from 'react';

function DetallePublicacion({ publicacion, cerrarDetalle }) {
  // Guardo si la publicación tiene "Me gusta"
  const [meGusta, setMeGusta] = useState(false);

  function cambiarMeGusta() {
    if (meGusta === false) {
      setMeGusta(true);
    } else {
      setMeGusta(false);
    }
  }

  function mostrarCorazon() {
    if (meGusta === true) {
      return '❤️';
    }

    return '🤍';
  }

  return (
    <div className="detalle-publicacion">
      <button onClick={cerrarDetalle}>Cerrar</button>

      <h2>Publicación seleccionada</h2>

      <img
        src={publicacion.url}
        alt={publicacion.descripcion}
      />

      <h3>{publicacion.usuario}</h3>
      <p>{publicacion.descripcion}</p> 
      {/* das like: + 1 like*/}
      <p>{meGusta ? '101 Me gusta' : '100 Me gusta'}</p>

      <button onClick={cambiarMeGusta}>
        {mostrarCorazon()}
      </button>
      
  <div className="comentarios">
  <h3>Comentarios</h3>

  {publicacion.comentarios.map((comentario) => (
    <p key={comentario.id}>
      <strong>{comentario.usuario}</strong> {comentario.texto}
    </p>
  ))}
</div>
    </div>
  );
}

export default DetallePublicacion;