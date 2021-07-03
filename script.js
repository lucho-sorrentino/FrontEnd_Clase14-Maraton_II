//1. Solicitar el nombre del cliente (Guardar en un array)
// 2. informar opciones, solicitar tipo de habitacion, 
//3. Cantidad de dias de estadia 
//4. Preguntar si quiere desayuno (Si es standar).
//5. Evaluar si tiene mas de 5 noches, aplicar 10% de descuento.
//6. Calcular y mostar total del cliente (Guardar en un array)
//7. Calcular y mostar total de todas las reservas del hotel.
//8. Mostrar listado de todos los clientes.
//9. Mostrar el listado de habitaciones ocupadas. (mostrar pociciones del array)

let listaHuespedes = [];
let montoHabitaciones = [];
let habitacionesOcupadas = [];


let nombre;
let monto;
let habitacion;
let dias;
let continuar = true;
let confirmaHabitacion = false;

const costoStandard = 2500;
const costoDoble = 3300;
const costoTriple = 4300;
const costoSuite = 7250;
const costoDesayuno = 90;
const montoDto = 0.9;  


function aplicarDescuento(precio, dto, _days) {
    if (dto) {
        return (precio * _days) * montoDto;
    } else { 
        return precio * _days;
    }
}

function calcularEstadia(_hab, _dias) {
    let descuento = false;
    let opcionDesayuno = false;
    if (_dias >= 5) {
        descuento = true;
    }
    switch(_hab) {
        case 1: 
            opcionDesayuno = confirm("¿Desea agregar desayuno?. Son $90 adicionales por día.");
            if (opcionDesayuno) {
                return aplicarDescuento(costoStandard, descuento, _dias) + (costoDesayuno * _dias);
            } else {
            return aplicarDescuento(costoStandard, descuento, _dias);
            }
            break;
        case 2:
            return aplicarDescuento(costoDoble, descuento, _dias);
            break;
        case 3: 
            return aplicarDescuento(costoTriple, descuento, _dias);
            break;
        case 4:
            return aplicarDescuento(costoSuite, descuento, _dias);
            break;
        default: alert("La opción ingresada no es válida!!");
        break;
    }
}

function asignarHabitacion(funcionConfirm, busyRooms) {
    numeroHabitacion = 0;
    funcionConfirm = confirm("¿Desea asignar una habitación?");
    if (funcionConfirm) {
    numeroHabitacion = busyRooms.length + 1;
    busyRooms.push(numeroHabitacion);
    }
    return busyRooms;
}

while (continuar) {   
    nombre= prompt("Ingrese nombre del huésped:");
    listaHuespedes.push(nombre);   
    
    asignarHabitacion(confirmaHabitacion, habitacionesOcupadas);

    habitacion = parseInt(prompt( "Indique tipo de habitación: \n1. Standard: $2500 \n2. Doble: $3300 \n3. Triple: $4300 \n4. Suite: $7250"));
    
    dias= parseInt(prompt("Ingrese cantidad de días de estadía:"));    
    
    monto = calcularEstadia(habitacion, dias);
    montoHabitaciones.push(monto);

    continuar = confirm("Desea seguir cargando huéspedes?");
}

alert("La facturación total es de $" + monto + ". Los huéspedes son: " + listaHuespedes + " y las habitaciones ocupadas son: " + habitacionesOcupadas + ".");