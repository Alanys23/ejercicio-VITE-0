let nombre
let apellido
const mivalorinalterable="cualquiercosa"

nombre = "noelia"
apellido = "valverde"

console.log(nombre + " " +apellido)

let num1 = 10
let num2 = 15
let resultado = num1 + num2

console.log(resultado)

//const boton = document.getElementById('boton') Esta es manera ANTIGUA

const boton = document.querySelector('#botonID')

//Ojo, Esa function la puedo externalizar si la usara en otras elementos,urls
//Pero si laddEventListenera usara puntualmente se describiria esa funcion ahi mismo...
//boton.addEventListener('click',function(){
  //  console.log('Has hecho click')
    //boton.style.backgroundColor="pink"
    //boton.style.color="green"

//funcion bormal
boton.forEach(function(boton){
    boton.addEventListener("Click", function(){
        boton.style.background="pink"
        boton.style.color="green"
    })
})


//funcion con lambda    

boton.forEach((item) => {
    item.addEventListener("click",()=>{
        item.style.background = "pink"
        item.style.color="green"
    })
})


