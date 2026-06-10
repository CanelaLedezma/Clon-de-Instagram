import TarjetaPerfil from './TarjetaPerfil';

function Sidebar({ mostrarFeed, mostrarPerfil }) {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>

      {/* Agregué información de ejemplo para simular un usuario */}
   <TarjetaPerfil
  nombre="Canela Ledezma"
  usuario="@canela"
  seguidores="1200"
  seguidos="350"
  foto="https://cdn2.thecatapi.com/images/Z5Wd0A-r_.jpg"
/>

      <button onClick={mostrarFeed}>Feed</button>
      <button onClick={mostrarPerfil}>Perfil</button>
    </div>
  );
}

export default Sidebar;