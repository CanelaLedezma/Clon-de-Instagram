import { useState } from 'react';

function Publicacion({ usuario, descripcion, imagen }) {
  // useState crea un estado para guardar si esta publicación tiene "Me gusta"
const [meGusta, setMeGusta] = useState(false);

  return (
    <div className="publicacion">
      <h3>{usuario}</h3> {/* aca va el nombre del usuario de la publicación */}

      <img src={imagen} alt="Publicación" /> {/* aca va la imagen de la publicación */}

      <p>{descripcion}</p> {/* aca va la descripción de la publicación */}
   
   <button onClick={() => setMeGusta(!meGusta)}>
  {meGusta ? '❤️ Te gusta' : '🤍 Me gusta'}
</button>

    </div>
    
  );
}

export default Publicacion;