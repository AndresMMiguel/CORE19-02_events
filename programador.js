// Clase Programador
// Programa temperaturas ideales a determinadas horas preestablecidas
//Metodos:
// encender
//Eventos:
// ideal
const later = require ('./later');
const EventEmitter = require('./events');

class Programador extends EventEmitter{

constructor(configuracion){
super();
this.configuracion = configuracion;
console.log("Programador encendido");
later.date.localTime();
var i = 0;
for(i=0;i<configuracion.length;i++){
const sched = later.parse.text('at ' + configuracion[i].hora);
later.setInterval(()=> this.emit('ideal',configuracion[i].temperatura),sched);
}
}
}
exports = module.exports = Programador;
