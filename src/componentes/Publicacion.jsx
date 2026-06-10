import { useState } from 'react';

function Publicacion({ usuario, descripcion, imagen, seleccionarPublicacion }) {
  // useState crea un estado para guardar si esta publicación tiene "Me gusta"
  const [meGusta, setMeGusta] = useState(false);

  return (
    <div className="publicacion" onClick={seleccionarPublicacion}>
      <h3>{usuario}</h3> {/* acá va el nombre del usuario */}

      <img src={imagen} alt="Publicación" /> {/* acá va la imagen */}

      <p>{descripcion}</p> {/* acá va la descripción */}

      <button
        onClick={(evento) => {
          // evita que el clic en "Me gusta" también seleccione la publicación
          evento.stopPropagation();

          // cambia el estado de "Me gusta" al valor contrario
          setMeGusta(!meGusta);
        }}
      >
        {meGusta ? '❤️ Te gusta' : '🤍 Me gusta'}
      </button>
    </div>
  );
}

export default Publicacion;