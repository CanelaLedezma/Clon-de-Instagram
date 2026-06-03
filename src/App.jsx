import './App.css'; // lo conecto con su css
import Sidebar from './componentes/Sidebar';
import Header from './componentes/Header';
function App() {
  return ( //lo q se va a ver en la pantalla
    <div className="app">
      <h1>Clon de Instagram</h1>
     
     <Sidebar />  
     <Header />

        <div className="historias">
         <h2>Historias</h2> 
        </div>

        <div className="feed">
          <h2>Feed</h2>
          
        </div>
      </div>
    </div>
  );
}


export default App;