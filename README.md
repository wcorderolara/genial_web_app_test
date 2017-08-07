# Aplicación Web de Integración
Esta Aplicación Web está desarrollada principalmente en **Angular 2**, es la parte final de la prueba, la funcion principal de la aplicación es consumir el API desarrollada tambien para el examen (verificar la ultima versión del API)

* ## Ejecucion de la Aplicacion
En el repositorio se encuentran dos formas de poder ejecutar la aplicación:
  * Empleando los archivos de Distribución, o
  * ejecutando la aplicacion desde Angular Cli
  
  ### Empleando Archivos de Distribución
  En el Repositorio encontrará una carpeta llamada **Dist** que contiene los archivos para distribución de la aplicación, para que funcione puede utilizar cualquier servidor web o bien levantar uno propio con *http-server* de NodeJS.
  
  ### Ejecutando la Aplicación desde Angular Cli
  Para llevar a cabo esta acción debera instalar primero [Angular Cli](https://cli.angular.io/), esto le permitirá poder ejecutar la aplicación. 
  
  Finalizada la instalacion de Angular Cli, debe clonar el repositorio (para ello debe tener Git instalado). Después desde una terminal de comandos debera movilizarse hasta donde se encuentre el repositorio clonado, dentro de la carpeta debera ejecutar primero:
 
 ```javascript
  npm install
 ```
 Esto instalará todas las dependencias que necesita la aplicación, finalizada la instalacion de dependencias, escribimos la siguiente linea de comandos:
 
 ```javascript
  ng serve
 ```
 
 Esto compilara toda la aplicación y la podremos ver ejecutando por defecto en http://localhost:4200, cabe mencionar que debera tener ejecutada la aplicacion que crea el API de Paises, si desea ver el procedimiento para instalar y correr esta aplicacion vea el [Manual de Instalacion y Ejecucion del API](https://github.com/wcorderolara/genial_test_api)
