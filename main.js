console.log('desde main js 123')


const persona = {
    nombre: 'pascual',
    apellido: 'villa',
    edad: 39,
    skills: ['js','python','react'],
    'lugar de nacimiento': 'Madrid',
    programar: function(){
        console.log('estoy programando')
    } 
}


const arrayejemplo = ['pascual','villa',39]



// Objeto Perro nombre, raza, ladrar 'Wow'
let perro = {
    nombre: 'gines',
    raza: 'chiguaua',
    ladrar: function(){
        console.log('Wow')
    }

}


document.querySelectorAll('.text')[1].textContent = 'text 4'


function changeTitle(){
    console.log('changeTitle')
    const names = ['Mario','Luigi','Toad','Bowser','Peach']
    const colors = ['red','green','blue','violet']
    
    let nombre = names[Math.floor(Math.random() * names.length)]
    let color = colors[Math.floor(Math.random() * colors.length)]
    // let color = getRandomColor();
    console.log(colorsgetRandomColor())
    document.getElementById('title').innerText = 'Hola ' + nombre
    document.getElementById('title').style.backgroundColor = color


}

// changeTitle()



// Pseudo codigoo algorimot
// DONE: crear la funcion lanzarDados()
function lanzarDados(){
    console.log('lanzarDados')
    console.log(Math.ceil(Math.random() * 6))
    console.log(Math.ceil(Math.random() * 6))
    document.getElementById('dado1').innerHTML = Math.ceil(Math.random() * 6)
    document.getElementById('dado2').innerHTML = Math.ceil(Math.random() * 6)
}
// lanzarDados()
// DONE:  generar dos numeros aleatorio del 1 al 6
// console.log(Math.ceil(Math.random() * 6))
// console.log(Math.ceil(Math.random() * 6))
// Mostrar el resultado en el html, vinvular js con html y con cada dado 
// DONE: vincular html con js con el boton, cuando le de click al boton ejecutar una funcion
