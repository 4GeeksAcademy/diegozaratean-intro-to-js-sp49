console.log('desde main js 123')


const persona = {
    nombre: 'pascual',
    apellido: 'villa',
    edad: 39,
    skills: ['js','python','react'],
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
    document.getElementById('title').innerText = 'Titulo desde botón'
    document.getElementById('title').style.backgroundColor = 'blue'


}

// changeTitle()