Recomendaciones para la entrega de esta semana:

 No olviden que los readme deben claramente especificar las versiones del sistema bajo pruebas, y las versiones de las herramientas y dependencias, puertos, usuarios, etc. Si al seguir el readme las pruebas no se ejecutan no podemos calificar los casos de prueba ni las implementaciones de regresión visual. Hagan los readme como una receta, para alguien que nunca ha ejecutado los pasos. Hagan el readme para que no sea propenso a errores, por ejemplo que no nos toque modificar varios archivo

No vamos a revisar ramas de desarrollo ni repositorios diferentes. La entrega de la semana debe estar en la rama principal de un solo repositorio

Recuerden que la toma de screenshots debe ser para cada paso de los escenarios, es decir se deben ejecutar después de cada paso- La regresión visual se debe hacer solo sobre 10 escenarios

Esperamos que el reporte HTML permita ver las imágenes de ambas versiones, y la imagen de comparación (generada por resemble o backstop) por cada uno de los escenarios seleccionados

Esta entrega está basada en la entrega anterior

## Escenarios contemplados para las pruebas:
* Iniciar sesión, entrar al perfil y cambiar el nombre guardando cambios
* Iniciar sesión, entrar al perfil y cambiar el nombre sin guardar cambios
* iniciar sesión, entrar al perfil e intentar cambiar la contraseña con menos de 10 caracteres
* Iniciar sesión, entrar al perfil e intentar cambiar la bio con más de 200 caracteres
* Iniciar sesión, entrar al perfil y cambiar la bio con menos de 200 caracteres, verificar que quedó guardada
* Agregar boletin, indicar nombre, decripción y crear
* Agregar boletin, indicar nombre, decripción y cancelar
* Nueva pagina, insertar titulo, descripcion, publicar ahora mismo
* Nueva pagina, insertar titulo, descripcion y cancelar
* Editar pagina, publicar
* Cambiar el titulo de la página
* Crear un menú en la página
* Eliminar último menú en la página
* Invitación y eliminación de invitación al staff
* Invitación al staff de un usuario registrado
* Crear un post con titulo y descripción en pagina y verificar que quedó guardado
* Editar un post que ha sido creado y verificar que se editó
* Crear Tag con descripcion y verificar que quedó guardado
* Edita un Tag creado y verificar que se editó
* Crear y eliminar un Tag y verificar que no existe



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

## Pasos para ejecutar Kraken
1. Clonar repositorio en una máquina local
2. Correr en la consola npm install
3. Correr en la consola npm run kraken


## Pasos para ejecutar Cypress
1. Clonar repositorio en una máquina local
2. Correr en la consola npm install
3. Correr en la consola npm run cypress
4. Seleccionar pruebas e2e y seleccionar en el navegador el archivo a correr.