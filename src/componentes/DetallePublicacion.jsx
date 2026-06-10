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
        alt="Publicación seleccionada"
      />

      <h3>Persona</h3>
      <p>Descripción de la publicación</p>
      <p>100 Me gusta</p>

      <button onClick={cambiarMeGusta}>
        {mostrarCorazon()}
      </button>
    </div>
  );
}

export default DetallePublicacion;