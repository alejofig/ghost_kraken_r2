## Descripción de las funcionalidades de GHOST que se incluyen en las pruebas de esta semana.
1. Cambios asociados al perfil como:
    - Nombre
    - Bio
    - Contraseña

## Cómo ejecutar las pruebas:
    1. Cabe aclarar que tenemos dos versiones de ghost en una instancia en internet para correrlo desde cualquier navegador.
        - Endpoint primera versión: http://uniandes.ingenio.com.co:2368/ghost
        - Endpoint segunda versión: http://uniandes.ingenio.com.co:2367/ghost
    2. Hacer npm install dentro de una carpeta vacia. (versión de node v14.15.1)
    3. Ejecutar el comando npm run kraken para iniciar pruebas de kraken.
    4. Ejecutar el comando npm run cypress para inciar pruebas de cypress.
        - Nota: Si se quieren ejecutar las pruebas de cypress con la primera versión de ghost, se debe usar el puerto: 2368
                Si se quieren ejecutar las pruebas de cypress con la segunda versión de ghost, se debe usar el puerto: 2367
                Cambiando la variable en cada archivo de cypress ghost versión old/new según corresponda.
    5. Seleccionar pruebas e2e y seleccionar en el navegador el archivo a correr.


## Funcionalidades contempladas
* Iniciar sesión
* Entrar al perfil
* Cambiar nombre 
* Cambiar contraseña
* Cambiar biografia
* Cambiar el titulo de la página
* Crear un menú en la página
* Eliminar último menú en la página
* Invitación y eliminación de invitación al staff
* Invitación al staff de un usuario registrado
* Crear boletin
* Cancelar creacion de boletin
* Crear pagina
* Cancelar creacion de pagina
* Editar pagina
* Crear Post
* Editar Post 
* Crear Tag
* Editar Tag
* Eliminar Tag
