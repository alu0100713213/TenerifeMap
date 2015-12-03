![Sin titulo](http://s29.postimg.org/qx6sj4r07/portadagi.jpg)
* * *
#### Autor: Juan Ignacio Hita 
#### Asignatura: Tecnologías y Sistemas Web 

## 1. ¿Qué es RaphaelJS?

RaphaelJS es una librería de JavaScript que simplifica el desarrollo de graficos vectoriales en la web. Mediante esta librería se pueden manipular formas Canvas, imágenes, realizar cortes, rotaciones de forma simple y fácil. 
Raphael usa el formato SVG, recomendado por W3School y VML como creador de gráficos. 
Raphael es soportado en:
*	Firefox 3.0+
*	Safari 3.0+
*	Chrome 5.0+
*	Opera 9.5+
*	Internet Explorer 6.0

## 2. Instalación de RaphaelJS y las herramientas que usaremos

Para usar RaphaelJS sólo es necesario descargar el código fuente de la librería y añadirlo a nuestro proyecto. 
[Link de RaphaelJS](http://github.com/DmitryBaranovskiy/raphael/raw/master/raphael-min.js
 "Link de RaphaelJS")


## 3. Creando el Mapa Interactivo

###### PASO 1: Preparamos la imagen que usaremos para el mapa interactivo de la isla de La Palma.

Mediante un programa vectorial abriremos la imagen del mapa, es importante que tenga unas medidas fijas ya que a la hora de ponerlo en la web es un objeto SVG.
[Link Fichero SVG:]( https://drive.google.com/a/ull.edu.es/file/d/0B18dUNHzQRIRUkdoZGZVSmlwdEE/view?usp=sharing
 "Link Fichero SVG:")


###### PASO 2: Convertimos SVG al formato de RaphaelJS con ReadySetRaphael
Cuando tenemos nuestro fichero SVG listo, usaremos una herramienta online llamada ReadySetRaphael. 
Esta herramienta nos dara un código primitivo de las diferentes áreas de nuestro dibujo vectorial. 
Existen muchas herramientas en la red que realizan el mismo cometido, ReadySetRaphael es la que yo he usado en este proyecto. Tambien cabe destacar Raphael2SVG y Raphael SVG Import.

###### PASO 3: Creamos las diferentes secciones del mapa y las identificamos

Para crear las diferentes secciones del mapa, tenemos que copiar el código que nos devolvió en la página web ReadySetRaphael y añadirlo a nuestro fichero JavaScript.
A partir de aquí tendremos que empezar a construir la estructura de directorios de nuestro proyecto. En primer lugar tendrá 3 directorios principales: css, js, images
También crearemos un primer index.html.

###### PASO 4: Manipulamos las secciones (path’s)
En el fichero JavaScript tendremos cada path, que representa un municipio de la isla. 
Lo único que tenemos que hacer es borrando progresivamente cada municipio para saber cuál es y renombrarlo con el nombre. 
También podemos añadir un vector de información, que usaremos para mostrar en la página html como información extra a través de un evento de ratón. 
Ejemplo
Elpaso.data{(‘region’: ‘El Paso’, ‘poblacion’: ‘Población: xxxx’, ‘altitud’: ‘Altitud: xxxx’)}

###### PASO 5: Eventos de Teclado y Ratón

Por ultimo añadimos los eventos de teclado y raton. En este ejemplo hemos añadido únicamente dos eventos.
-	Mouseover(function(x){ … }
Mediante este evento capturamos el ratón cada vez que entra en una región que está en nuestro vector regions. 
Este evento llama a las diferentes funciones getElementById para mostrar la información en la parte derecha. También cambia la opacidad de la región para crear un efecto de fundido.
-	Mouseout(function(x){ … }
Este evento se ejecuta cuando sale el ratón de la sección. Para el ejemplo se le modifica la opacidad del fondo, dejándola por defecto.

## 4. Links de Interes

- [Página web Personal](http://alu0100713213.github.io "Página web personal")
- [PowerPoint - Creando un mapa Interactivo con RaphaelJS](http://alu0100713213.github.io/TenerifeMap/doc/CreandoMapaInteractivoRaphaelJS.pdf "PowerPoint - Creando un mapa Interactivo con RaphaelJS")
- [Tutorial en PDF - Creando un mapa Interactivo con RaphaelJS](https://drive.google.com/a/ull.edu.es/file/d/0B18dUNHzQRIRXzZyRVhoT3N3VHc/view?usp=sharing "Tutorial en PDF - Creando un mapa Interactivo con RaphaelJS")
- [Demo LaPalmaMap](http://alu0100713213.github.io/LaPalmaMap/ "Link de RaphaelJS")
- [Demo TenerifeMap](http://alu0100713213.github.io/TenerifeMap/ "Link de RaphaelJS")
- [Despliegue en IAAS](http:// "Despliegue en IAAS")

* * *
