# 🎬 Aplicación de Películas

Aplicación creada con **React Native** v0.79.2, la cual consume la API de **OMDb**.

## 🚀 Primeros pasos

Para comenzar a utilizar la aplicación, es necesario copiar el repositorio de forma local, para esto debes hacer lo siguiente:

```sh
git clone https://github.com/LuisFuentesDev/OMDb.git
```
Una vez clonado el proyecto, ábrelo en Visual Studio Code y ejecuta los siguientes comandos en la raíz del proyecto:

```sh
# Con npm
npm install

#Con yarn
yarn install

```
Luego, instala los pods necesarios para iOS:

```sh
cd ios
pod install
cd ..

```
# Levantar la aplicación

Una vez completada la configuración, puedes emular la aplicación en Android o iOS con los siguientes comandos:

```sh
# Con npm
npm run android

# Con Yarn
yarn android
```

```sh
# Con npm
npm run ios

# Con Yarn
yarn ios
```

¡Felicidades! Ya estás ejecutando la aplicación de películas. Aquí algunas capturas de pantalla:


<img width="329" alt="Captura de pantalla 2025-05-05 a la(s) 8 48 16 a m" src="https://github.com/user-attachments/assets/e20cad84-c280-4d8c-a073-60a97531f07b" />

<img width="334" alt="Captura de pantalla 2025-05-05 a la(s) 8 48 52 a m" src="https://github.com/user-attachments/assets/1544a58d-94fe-432c-8f60-53274a60db4d" />

<img width="338" alt="Captura de pantalla 2025-05-05 a la(s) 8 49 25 a m" src="https://github.com/user-attachments/assets/f1169f3d-7e9f-4d17-a0c3-1fdf8e4884ad" />

<img width="331" alt="Captura de pantalla 2025-05-05 a la(s) 8 50 11 a m" src="https://github.com/user-attachments/assets/3316c2cb-94b2-46c8-b032-5a6684929a37" />

# 🛠️ Funcionalidades

La aplicación tiene distintas caracteristicas y funcionalidades, te las menciono a continuación:

- Pantalla de buscar:
  -  Buscador en la parte superior.
  -  Botón para iniciar la búsqueda después de ingresar el nombre de la película.
  -  Botones de **Anterior** y **Siguiente** para navegar entre páginas de resultados.

- Pantalla de detalle
  -  Visualización del póster de la película seleccionada.
  -  Información sobre nombre, año, director, actores y descripción.
  -  Botón dinámico para agregar o eliminar la película de favoritos.
  -  Botón para compartir por correo electrónico.

- Pantalla de favoritos
  -  Listado de películas guardadas como favoritas.
  -  Botón para eliminarlas de favoritos.
  -  Redirección a la pantalla de detalle al presionar el nombre de la película.
 

