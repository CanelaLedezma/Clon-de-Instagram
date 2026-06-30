Link de la reflexion:
https://docs.google.com/document/d/13MQRh6AlTyalYG3oQe9G19pbpzaiWjlg2giZ-tFmGSM/edit?usp=sharing


Link del Figma:
https://www.figma.com/design/b0bc7kmqSubCSHb3uXJlnv/%C4%B0nstagram-Modern-Web-Design--Community-?m=auto&t=tRvw8FouuOUrla1a-6

Instrucciones para ejecutar el proyecto:
1. Clonar el repositorio.
2. Entrar a la carpeta del proyecto.
3. Ejecutar npm install.
4. Ejecutar npm run dev.
5. Abrir el link que aparece en la terminal (el de local host).

¿Cómo organice el proyecto? (y componentes)

App es el componente principal. El resto de los componentes estan en la carpeta “componentes”.

La carpeta src está organizada así:

* componentes:

→  DetallePublicacion.jsx

→  Feed.jsx

→  Header.jsx

→  Historias.jsx

→  Perfil.jsx

→  Publicacion.jsx

→  Sidebar.jsx

→  TarjetaPerfil.jsx

* App.css
* App.jsx
* index.css
* main.jsx

Así, separo el componente principal de las partes más específicas de la página. Entonces, cada archivo cumple una función determinada y es más fácil encontrarlo.

----
Responsabilidad de cada componente:

- App.jsx: Es el componente principal. Obtiene las imágenes desde The Cat API usando usando Axios y guarda los estados generales. También organiza los demás componentes y decide si debe mostrar el feed, el perfil o el detalle de una publicación.

- DetallePublicacion.jsx:Muestra el detalle la publicación que seleccionó el usuario. Recibe la imagen, el usuario y la descripción mediante props. También permite cerrar el detalle y poner o sacar el “Me gusta”. Lo separé porque esta vista tiene una presentación y un comportamiento distintos a los de las publicaciones del feed.

- Feed.jsx: Recibe las imágenes desde App y utiliza map() para crear una publicación por cada una. También crea un usuario y una descripción de ejemplo para cada publicación. Cuando el usuario selecciona una, Feed reúne su identificador, URL, usuario y descripción para enviarlos a App.

- Header.jsx: Representa la parte superior de la página. Contiene el buscador y el botón “Nueva publicación”, siguiendo la distribución del diseño de Figma. Por ahora, estos elementos cumplen una función visual.

- Historias.jsx: Representa la fila de historias. Recibe las imágenes mediante props y muestra las primeras cuatro utilizando slice() y map(). Lo separé porque las historias tienen una presentación circular y una distribución diferente a la de las publicaciones.

- Perfil.jsx: Representa la vista completa del perfil del usuario. Muestra su nombre, nombre de usuario, cantidad de seguidores y cantidad de seguidos. Este componente permite mostrar el perfil como una vista diferente al feed.

- Publicacion.jsx: Representa cada publicación dentro del feed. Recibe mediante props el usuario, la descripción, la imagen y la función que permite abrir su detalle. También tiene un estado propio para controlar el botón de “Me gusta”. Este componente se reutiliza para mostrar todas las publicaciones sin tener que repetir la misma estructura.

- Sidebar.jsx: Representa el menú lateral. Contiene la tarjeta del perfil y los botones para ir al feed o al perfil. Recibe desde App las funciones mostrarFeed y mostrarPerfil. Después utiliza esas funciones en el onClick de los botones.

- TarjetaPerfil.jsx: Muestra un resumen del usuario dentro del Sidebar. Recibe mediante props su nombre, usuario, seguidores, seguidos y foto. Lo separé porque su responsabilidad es mostrar los datos del usuario, mientras que Sidebar también se ocupa de la navegación.
----

¿Por qué decidí componentizar de esa manera?

Me pareció más claro separar el componente principal del resto. App se encarga de organizar la aplicación y manejar sus estados generales, mientras que cada componente se ocupa de una parte específica de la pantalla. También guardé los demás componentes dentro de una carpeta llamada “componentes” para que el proyecto quedara más ordenado y fuera más fácil encontrar cada archivo. Esta organización evita que todo el JSX esté escrito dentro de App.jsx. Además, permite reutilizar componentes. Por ejemplo, Publicacion se utiliza para mostrar cada elemento del feed sin repetir la misma estructura.

---
¿Cómo se comunican los componentes mediante props?

Las props permiten enviar datos o funciones desde un componente padre hacia un componente hijo.

Por ejemplo, App le pasa el array imagenes a Historias y Feed. Después, Feed le pasa a cada Publicacion su usuario, descripción, imagen y la función para seleccionarla.

App también le pasa a Sidebar las funciones mostrarFeed y mostrarPerfil. Sidebar recibe esas funciones y las ejecuta cuando el usuario toca sus botones.

TarjetaPerfil recibe desde Sidebar el nombre, usuario, seguidores, seguidos y foto del usuario simulado.

De esta forma, cada componente recibe solamente la información y las funciones que necesita para cumplir su responsabilidad.

----
¿Qué hooks uso y para qué?

Utilicé useState y useEffect.

UseState permite guardar valores que pueden cambiar y actualizar la pantalla cuando esos valores se modifican.

En App lo utilicé para guardar la vista actual, las imágenes recibidas y la publicación seleccionada. También lo utilicé en Publicacion y DetallePublicacion para controlar el estado del “Me gusta”.

Use UseEffect para hacer la solicitud a The Cat API cuando se carga la pagina. Dentro del efecto llamo a la función obtenerImagenes y guardo la respuesta de la API en el estado imagenes.

El array vacío del useEffect hace que la solicitud se ejecute una sola vez al cargar el componente.

----
¿Cómo resolvi la visualización individual de publicaciones?

Para mostrar una publicación individual use el estado publicacionSeleccionada.

Cuando el usuario selecciona una publicación, Feed crea un objeto con su id, URL, usuario y descripción. Ese objeto se guarda en publicacionSeleccionada.

App revisa si existe una publicación seleccionada. Si existe, muestra DetallePublicacion en lugar del feed. Este componente recibe el objeto mediante una prop y utiliza sus datos para mostrar la publicación correspondiente.

Cuando el usuario toca “Cerrar”, publicacionSeleccionada vuelve a tener el valor null. De esta manera, se cierra el detalle y vuelve a aparecer el contenido anterior.

----
¿Cómo simule el perfil de usuario logueado?

Como el proyecto no tiene un sistema real de registro o inicio de sesión, simulé un usuario utilizando datos fijos.

Escribí esos datos dentro de Sidebar y los envié a TarjetaPerfil mediante props. También creé Perfil para mostrar los datos del usuario en una vista separada.

Esto permite representar un usuario logueado sin necesitar todavía una base de datos ni un sistema de autenticación.

----
¿Qué datos decidi mostrar en el perfil?

Decidí mostrar:

* El nombre.
* El nombre de usuario.
* La foto de perfil.
* La cantidad de seguidores.
* La cantidad de seguidos.
* El botón “Editar perfil”.
Elegí esos datos porque son los principales datos que aparecen en el perfil de cualquier red social y también están en el figma.
----
¿Qué estados usé para seleccionar publicaciones o manejar la vista individual?

Utilicé los siguientes estados:
 
* vistaActual: guarda si se debe mostrar el feed o el perfil. Su valor inicial es “feed”.
* imagenes: guarda el array de imágenes obtenido desde The Cat API. Su valor inicial es un array vacío.
* publicacionSeleccionada: guarda el objeto de la publicación abierta. Su valor inicial es null.
* meGusta: guarda si una publicación tiene o no “Me gusta”. Su valor inicial es false.

Cuando el usuario selecciona una publicación, publicacionSeleccionada guarda sus datos y App muestra DetallePublicacion.

Cuando el usuario va al feed o al perfil, publicacionSeleccionada vuelve a null. Esto cierra cualquier detalle que estuviera abierto antes de cambiar la vista.
