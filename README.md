# Cómo probar lo que llevo

Descargar todo de forma que el html pueda acceder a los js estáticos.
Abrir demos/fixed/index2.html (debe ser el 2, no el 3)

## Ejemplos de juegos educativos con blockly

[Juego de frozen](https://studio.code.org/s/frozen/stage/1/puzzle/2)
[Juego de angry birds](https://studio.code.org/hoc/5)

[API de Blockly](https://developers.google.com/blockly/)

## Aplicación de heroku

La idea era probar esto en heroku en el siguiente [link](http://hourofcodechile.herokuapp.com/), pero aunque logré poner el custom buildpack para python y setear una app con flask, heroku no permite obtener los js estáticos a menos que se usen trucherías como una app php según vi por ahí.

## Funcionamiento de blockly y conexión con el juego

Blockly es una api de google que permite abstraer la parte de programar en bloques permitiendo al usuario de la página programar en bloques (es posible crear bloques como un bloque avanzar con la fábrica de bloques (demos/blockfactory/index.html)), y luego la api permite transformar el programa en código javascript (con llamadas a funciones como avanzar();) que será ejecutado por el juego con eval.
Luego el juego debe tener funciones como avanzar(), girar_antihorario(), girar_horario(), etc. y la conexión con los bloques está lista.