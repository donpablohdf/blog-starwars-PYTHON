# Starwars Blog

_La fuerza es fuerte en este ejercicio...._

Vamos a construir una versión minimalista del [Banco de datos de Star Wars](https://www.starwars.com/databank) con una función React o lista de favoritos.
Con Python SQLalchemy y más

## !Aquí hay un Demo!

![Starwars Demo](https://github.com/breatheco-de/exercise-starwars-blog-reading-list/blob/master/preview.gif?raw=true)

## EJERCICIO

1. Utiliza los componentes de bootstrap 5.2.2 (Card, Buttons, etc.), prácticamente no necesitarás casi CSS propio.
2. Tomate un tiempo para entender [SWAPI.tech](https://www.swapi.tech/documentation), esta será el API que vamos a utilizar para obtener la información.
3. Utiliza la función Fetch para consumir SWAPI.tech y obtener los Personajes (people), vehículos y Planetas y mostrarlos en tu web.
4. Deberás tener un array centralizado con tu información (planetas, personajes...).
5. Para resolver la funcionalidad de "favoritos" te recomendamos declarar un array `favorites` en el array y tener alli la lista de todos los planetas o personajes que se van marcando como favoritos.

### Instrucciones para el ejercicio

* Crear una aplicación web React que enumera personas, vehiculos y planetas entidades proporcionado por el SWAPI.
Nota: por favor utiliza swapi.tech y no swapi.dev porque la segunda esta dando problemas útimamente.

<p align="center">
   <img width="100%" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data.png" />
</p>

* Construyendo una vista de detalles para el personaje o el planeta
Cada entidad debe tener una breve descripción (Tarjeta Bootstrap) y una vista de detalles (Componentes Bootstrap):

<p align="center">
   <img width="100%" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data_details.png" />
</p>

**Importante**: El SWAPI no proporciona las imágenes, puedes usar marcadores de posición o evitar las imágenes por completo.
El enfoque de este ejercicio es practicar fetch, router y context; puedes enfocarte en un tema del color y diseño simple para que se vea bien.

* Usa toda la información que entrega el SWAPI (verifica los documentos y / o las respuestas de json).

* Leer más tarde o la funcionalidad de favoritos:
Implementa una funcionalidad de lectura posterior, es decir, un botón que permita al usuario "guardar" el elemento (personaje, vehículo o planeta) en una lista especial.
Esta lista se mostrará en la parte inferior de la página de inicio, se asemeja a la lista principal, pero solo muestra los elementos "guardados".

* Uso de Context
Para asegurarse de que el usuario pueda "guardar" el elemento, debe implementar una acción a la que se pueda acceder desde cualquier lugar dentro de la aplicación.

#### 😎 ¿Te sientes seguro?

Las siguientes funciones NO son necesarias para la solución final, pero puede desarrollarlas si te sientes lo suficientemente seguro:

1. Evita que el sitio web haga Fetch a la API de Startwars nuevamente si se actualiza (puedes usar el array local para guardar los datos).
2. Implementa una barra de búsqueda con "autocompletar" para Personajes y Planetas. Cuando haces clic en autocompletar, debería llevarte a la página Personaje o Planeta.

## Instrucciones de instalación

**Instalado:**

* Se usa node version 19
* Se usa react y react-dom version 18.2.0
* Se usa uuidv4 para crear ids únicos
* Se usa react-snippers para crear snippers de carga
* Se usa react-router y react-router-dom version 6.4.2
* Se usa Vercel para publicar website

En forma de CDN:

* Se usa bootstrap 5.2.2
* Se usa poppersjs 2.10.2
* Fontawesome 5.2.0

**En la terminal:**

* Instalar los paquetes

```sh
npm install
```

* Crear .env

```sh
cp .env.example .env
```

* Arrancar el servidor de pruebas

```sh
npm run start
```

## Estilos css

Puede actualizar `styles/index.css` o crear nuevos archivos `.css` dentro de `styles/` e importarlos a sus archivos según sus necesidades.

## Components

Agregue más archivos a su carpeta `./src/js/components` según los necesite e impórtelos a sus archivos según sea necesario.

💡Note: Hay un ejemplo de como usar Context API en `views/demo.js`;

## Views (Components)

Agregue más archivos a su `./src/js/views` e impórtelos en `./src/js/layout.jsx`.

## Context

Este modelo viene con una Context API de contexto general centralizada.
El archivo `./src/js/store/flux.js` tiene una estructura base para una tienda, te animamos a cambiarla y adaptarla a tus necesidades.

React Context [documentación](https://es.reactjs.org/docs/context.html)

El `Provider` ya está configurado.
Puede consumir desde cualquier componente usando el enlace useContext para obtener `store` y `actions` del Contexto.
Consulte `/views/demo.js` para ver una demostración.

Ejemplo de uso en cualquier componente:

```jsx
import { Context } from "../services/appContext";
const MiComponente = () => {
  //aqui usas useContext para recuperar el array de datos "store" 
  //y las funciones contenidas en "action"
  const { store, actions } = useContext(Context);
  return <div>{/* aquí puedes usarlas */}</div>
}
```

## Publicar tu proyecto

1. **Vercel:** El proveedor de alojamiento recomendado GRATIS es [vercel.com](https://vercel.com/),
puede implementar su proyecto en 1 minuto escribiendo los siguientes 2 comandos en el terminal:

* Instalar e iniciar sesión (es necesario tener una cuenta):  sudo npm i vercel -g && vercel login
* Implementar proyecto: vercel --prod
  * Hay un ejemplo de como hacerlo en el archivo  `/docs/deploy.png`
