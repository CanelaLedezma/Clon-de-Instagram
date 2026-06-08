import Publicacion from './Publicacion';

function Feed (){
    return (
    <div className="feed">
      <h2>Feed</h2>
      {/* Muestro una publicación del feed */}
      <Publicacion/>
    </div>
    );
}
export default Feed;