# Notas

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

En la terminal:

1. Instalar los paquetes con: npm install
2. Crear .env : cp .env.example .env
3. Arrancar el servidor de pruebas: npm run start

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

React Context [docs](https://es.reactjs.org/docs/context.html)

El `Provider` ya está configurado.
Puede consumir desde cualquier componente usando el enlace useContext para obtener la `tienda` y las `acciones` del Contexto.
Consulte `/views/demo.js` para ver una demostración.

Ejemplo de uso en cualquier componente:

```jsx
import { Context } from "../services/appContext";
const MyComponentSuper = () => {
  //here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>
}
```

## Publicar tu proyecto

1. **Vercel:** El proveedor de alojamiento recomendado GRATIS es [vercel.com](https://vercel.com/),
puede implementar su proyecto en 1 minuto escribiendo los siguientes 2 comandos en el terminal:

* Instalar e iniciar sesión (es necesario tener una cuenta):  sudo npm i vercel -g && vercel login
* Implementar proyecto: vercel --prod
  * Hay un ejemplo de como hacerlo en el archivo  `/docs/deploy.png`
