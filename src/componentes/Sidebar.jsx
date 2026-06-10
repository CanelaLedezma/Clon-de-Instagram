import TarjetaPerfil from './TarjetaPerfil';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>

      <TarjetaPerfil //agregue informacion de ejemplo para simular un usuario y su informacion
        nombre="Canela Ledezma"
        usuario="@canela"
        seguidores="1200"
        seguidos="350"
      />
    </div>
  );
}

export default Sidebar;