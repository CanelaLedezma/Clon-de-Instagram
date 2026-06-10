import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // lo conecto con su css

// lo conecto con los componentes:
import Sidebar from './componentes/Sidebar';
import Header from './componentes/Header';
import Historias from './componentes/Historias';
import Feed from './componentes/Feed';

function App() {
  const [imagenes, setImagenes] = useState([]);
  const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null);
  useEffect(() => {
  async function obtenerImagenes() {
    const respuesta = await axios.get(
      'https://api.thecatapi.com/v1/images/search?limit=10'
    );

    setImagenes(respuesta.data);
  }

  obtenerImagenes();
}, []);

  return ( // lo que se va a ver en la pantalla
    <div className="app">
      <h1>Clon de Instagram</h1>
      <Sidebar />
      <Header />
      <Historias />
     <Feed
  imagenes={imagenes}
  seleccionarPublicacion={setPublicacionSeleccionada}
/>


<Feed
  imagenes={imagenes}
  seleccionarPublicacion={setPublicacionSeleccionada}
/>
      </div>
  );
}

export default App;