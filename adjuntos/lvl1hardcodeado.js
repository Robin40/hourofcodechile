var nivel = 1;
var grid = [
	['#', '#', '#', '#', '#', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#', '#'],
	['#', '#', '#', '.', '#', '#', '#', '#'],
	['#', '#', '#', '.', '#', '#', '#', '#'], 
	['#', '#', '#', '.', '#', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#', '#']
];
var personaje = new Pajaro(1, 2);
var meta = new Cerdo(4, 3);
var mensaje = "Ay&uacute;dame a llegar a la meta";
var minimoBloques = 3;
var xmlBloquesDisponibles = '\
<xml id="toolbox" style="display: none">\
	<block type="avanzar"></block>\
	<block type="girar">\
		<field name="sentido">antihorario<field>\
	</block>\
	<block type="girar">\
		<field name="sentido">horario<field>\
	</block>\
</xml>\
';
var xmlBloquesIniciales = '\
<xml id="toolbox" style="display: none">\
	<block type="al_ejecutar_imborrable"></block>\
	<block type="avanzar"></block>\
</xml>\
';