## Descripción de las funcionalidades de GHOST que se incluyen en las pruebas de esta semana.
1. Cambios asociados al perfil como:
    - Nombre
    - Bio
    - Contraseña
    
2. Cambios asociados a la funcianlidad de Post (publicaciones) en la aplicación:
    - Crear un nuevo post
    - Editar un post existente que se encunetre publicado
    
3. Cambios asociados a la funcianlidad de Tags(Etiquetas) que permite clasificar publicaciones por categoria:
    - Crear un nuevo Tag
    - Editar un tag Existente
    - Eliminar un tag luego de crearlo

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
    
### Como ejecutar el Visual Regression Testing con Resemble
    1. Es importante tener todos los paquetes del proyecto para esto ejecute "npm install"
    2. Se crearon varios scripts en el packaje.json para automatizar el proceso **que se ejecutan desde la carpeta principal del repo**
        1. npm run resemble -> Ejecuta la comparación de las imagenes y crear un reporte en la carpeta results_resemble 
        2. npm run resemble_results -> Abre el reporte generado en HTMl (se probo en Mac posiblemente no funcione en windows)
        3. npm run resemble_all -> combina los dos anterioes, hace la comparación, crear el reporte y lo abre. (se probo en Mac posiblemente no funcione en windows)
    3. Ejecute los comandos segun su conveniencia si esta en mac se recomienda ejecutar 'npm run resemble_all' ya que mostrara el proceso puede que en windows toque ejecutar 'npm run resemble' y luego abrir el reporte manualmente con el explorador de archivos 
    

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
