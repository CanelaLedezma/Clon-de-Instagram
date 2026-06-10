function Historias({ imagenes }) {  
  return (
    <div className="historias">
      <h2>Gatorias</h2>
{/* Tomo las primeras cuatro imágenes y muestro una por cada elemento */}
     {imagenes.slice(0, 4).map((imagen) => (
        <img
          key={imagen.id}
          src={imagen.url}
          alt="Imagen de gato en una gatoria (gato-historia)"        />
      ))}
    </div>
  );
}

export default Historias;