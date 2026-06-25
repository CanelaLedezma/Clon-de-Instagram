import Perfil from './componentes/Perfil';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // lo conecto con su css

// lo conecto con los componentes:
import Sidebar from './componentes/Sidebar';
import Header from './componentes/Header';
import Historias from './componentes/Historias';
import Feed from './componentes/Feed';
import DetallePublicacion from './componentes/DetallePublicacion';

function App() {
  //setVistaActual: función q actualiza vistaActual
  const [vistaActual, setVistaActual] = useState('feed'); // feed valor inicial
  const [imagenes, setImagenes] = useState([]);//para recibir theCat api imagenes
  const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null);

  useEffect(() => {
    async function obtenerImagenes() { //declaro
      const respuesta = await axios.get(
        'https://api.thecatapi.com/v1/images/search?limit=10'
      );

      setImagenes(respuesta.data);
    }

    obtenerImagenes();//uso
  }, []);// no dependas de nada para volver a ejecutarlo
  function mostrarContenido() {
  if (publicacionSeleccionada) {
    return (
      <DetallePublicacion
        publicacion={publicacionSeleccionada}
        cerrarDetalle={() => setPublicacionSeleccionada(null)}
      />
    );
  }
    
if (vistaActual === 'perfil') {
  return (
  <Perfil
   imagenes={imagenes} 
   />
  );
}

  return (
    <Feed
      imagenes={imagenes}
      seleccionarPublicacion={setPublicacionSeleccionada}
    />
  );
}
return ( // lo que se va a ver en la pantalla
  <div className="app">
    <Sidebar
    //le paso a sidebar funcion q muestra feed y perfil
    //dsp sidebar la coloca en onClick
      mostrarFeed={() => {
        setPublicacionSeleccionada(null);
        setVistaActual('feed');
      }}
      mostrarPerfil={() => {
        setPublicacionSeleccionada(null);
        setVistaActual('perfil');
      }}
    />

    {/* Agrupo el contenido que va a estar a la derecha del Sidebar */}
    <div className="contenido-principal">
      <h1>Clon de Instagram</h1>

      <Header />
      <Historias imagenes={imagenes} />

      {/* Muestro el feed, el perfil o el detalle */}
      {mostrarContenido()}
    </div>
  </div>
);}
export default App;
