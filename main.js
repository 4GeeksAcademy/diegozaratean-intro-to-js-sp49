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
const frutas = ['pera','manzana','piña', 'sandia','melon','kiwi','platano','mandarina']
//   posotion     0.       1.       2    3.         4.      5.      6.        7
// console.log(frutas)
// console.log(frutas[1])
console.log('plural sencillo')
console.log(frutas[0] + 's')
console.log(frutas[1] + 's')
console.log(frutas[2] + 's')


console.log('plural con for')
for(i=frutas.length -1 ; i >= 0; i--){
    console.log(frutas[i] + 's');
}

