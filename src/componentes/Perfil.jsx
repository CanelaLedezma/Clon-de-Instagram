function Perfil({imagenes}) {
    // Muestro datos del usuario logueado (ejemplo)
  return (
    <div className="perfil">
      <h2>Perfil de usuario</h2>
      <p>Canela Ledezma</p>
      <p>@canela</p>
      <p>Seguidores: 1200</p>
      <p>Seguidos: 350</p>
      <button>Editar perfil</button>
    </div>
  );
}

export default Perfil;