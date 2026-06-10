import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // lo conecto con su css
//lo conecto con lpos componentes:
import Sidebar from './componentes/Sidebar';
import Header from './componentes/Header';
import Historias from './componentes/Historias';
import Feed from './componentes/Feed';

function App() {
  const [imagenes, setImagenes] = useState([]);
  return ( // lo q se va a ver en la pantalla
    <div className="app">
      <h1>Clon de Instagram</h1>

      <Sidebar/>
      <Header/>
      <Historias/>
      <Feed/>
    </div>
  );
}

export default App;