console.log('desde main js')

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

//for(incialización;condicion;actualizción)
// for(i = 30; i <= 100; i+= 5){
//     console.log(i)
// }


// i = i + 5.  => i+= 5
// i = i + 1.  => i++

//    length.     1.      2.        3        4          5     6.    7.        8
// const frutas = ['pera','manzana','piña', 'sandia','melon','kiwi','platano','mandarina']
// //   posotion     0.       1.       2    3.         4.      5.      6.        7
// // console.log(frutas)
// // console.log(frutas[1])
// console.log('plural sencillo')
// console.log(frutas[0] + 's')
// console.log(frutas[1] + 's')
// console.log(frutas[2] + 's')


// console.log('plural con for')
// for(i=frutas.length -1 ; i >= 0; i--){
//     console.log(frutas[i] + 's');
// }



// console.log('hola')
// let nombre = 'diego'
// console.log('antes de la funcion ' + nombre)
// function saludoAlumno(nombre){
//     console.log('demtro de la funcion ' + nombre)
//     console.log('hola ' + nombre)
// }
// console.log('despues de la funcion ' + nombre)
// saludoAlumno('ziyad');
// saludoAlumno('cristina');
// saludoAlumno('emilio');


// // esta funcion se encarga de hace rel transporte de un origen a un destino
// function transporte(origen, destino){
//     console.log('saliendo de ' + origen)
//     console.log('moviendome')
//     console.log('llegnado a ' + destino)
// }

// transporte('casa','centro comercial')
// transporte('centro comercial','oficina')
// transporte('oficina','casa')
// transporte()
// transporte()


// function sum(num1,num2){
//     console.log('haciendo calculo')
//     return 4
// }


// console.log(sum(2,2)) // 4
// console.log(sum(1,4)) // 5
// console.log(sum(0,5)) // 7

// function caculoIRPF(ingresos_netos){    
//     console.log('antes del calculo')
//     return ingresos_netos * 0.2
//     console.log('despues del calculo')
//     ingresos_netos =  0.2
// }

// caculoIRPF(30000)

// // asignar a resutlado 'desde js'
// document.getElementById('resultado').innerHTML = caculoIRPF(30000)


// console.log('ANTES se ejecuto window onload');
// window.onload = function() {

//     console.log('se ejecuto window onload');

// }
// console.log('DESPUES se ejecuto window onload');

// function admitido(edad){
//     if(edad >= 21){
//         return 'Si puedes entrar'
//         console.log('se ejecuto window onload');

//     }else{
//         console.log('se ejecuto window onload');
//         return 'Tienes que espera'
//         console.log('se ejecuto window onload');
//     }
// }
// console.log(admitido(21)) // 'Si puedes entrar'
// console.log(admitido(15)) // 'Tienes que espera'


// Funciones declarativas
// saludar()
// function saludar(){
//     console.log('hola declarativa')
// }

// // Funciones de expresión
// const saludarExpresion = function(){
//     console.log('hola expresión')
// }
// saludarExpresion()

// // Funciones Flecha Arrow
// const saludarFlecha = () => {
//     console.log('hola Flecha')
// }
// saludarFlecha()



// hacer un generador de excusas a partir de unos arrays de Quien, Acción, Que, Cuando
// 1. Modificar texto de html desde js
// 2. Tomar una array de Quien y obtener un elemento aleatorio de este array
// 3. Tomar una array de Acción y obtener un elemento aleatorio de este array
// 4. Tomar una array de Que y obtener un elemento aleatorio de este array
// 5. Tomar una array de Cuando y obtener un elemento aleatorio de este array



