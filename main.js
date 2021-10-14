//     const a=15
//     const b=22
//     const c=a+b
//     console.log ('el resultado de la suma es: ' )
//     const duda=true 
//     console.log (duda)
//     const respuesta="esta es una respuesta"
//     console.log (respuesta)
//     console.log(typeof(duda))
//     const arreglo=[1,3,7,true,"hola",8]
//     console.log(arreglo)
//     console.log (typeof (arreglo))
//     console.log (arreglo[3])
//     const objeto={nombre:'ramon',apellido:'Rua',edad:36,casado:true}
//     console.log(objeto)
//     console.log(objeto.edad)
//     const informacion = [
//   {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   },
//   {
//     "postId": 1,
//     "id": 2,
//     "name": "quo vero reiciendis velit similique earum",
//     "email": "Jayne_Kuhic@sydney.com",
//     "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//   },
//   {
//     "postId": 1,
//     "id": 3,
//     "name": "Ramón",
//     "email": "felipe2220@gmail.com",
//     "body": "Le gusta jugar futbol"
//   },
//   {
//     "postId": 1,
//     "id": 4,
//     "name": "alias odio sit",
//     "email": "Lew@alysha.tv",
//     "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
//   },
//   {
//     "postId": 1,
//     "id": 5,
//     "name": "vero eaque aliquid doloribus et culpa",
//     "email": "Hayden@althea.biz",
//     "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
//   }
// ]
// const informacion=datos[2]
// console.log (informacion.name)
// console.log(datos[2].name)


//¨***************************************************************
// Código del 07 de octubre 2021---- FUNCIONES------
//******************************************************************* */

// // Declaracion de una funcion

// function suma (a,b){
// const respuesta = a+b
// return respuesta
// }

// // llamdo de la funcion
// console.log(suma(7,2), suma(3,8))

// function multiplicar (a,b,c){
//   return a*b*c
// }
// console.log(multiplicar(3,5,6))

// function saludo(a){
//   const mensaje="hola "+a
//   return mensaje
// }
// console.log(saludo('mauricio'))
// console.log(saludo('Estefania'))

// function datos(nombre,edad,trabajo){
//   const mensaje="La persona "+nombre+" tiene "+edad+' años de edad y trabaja en '+trabajo
//   return mensaje
// }
// console.log(datos('Mauricio',40,'docente'))

// function reto(){
//   const mensaje= "Nombre "+informacion[2].name+ ' Correo '+informacion[2].email+' hobbie '+informacion[2].body 
//   return mensaje 
// }
// console.log(reto())

// function situacion(nombre,respuesta){
//   if (respuesta){
//     const mensaje='la persona '+nombre+' si se encuentra casado'
//     return mensaje
//   }else{
//     const mensaje= 'la persona '+nombre+' no se encuentra casado'
//     return mensaje
//   }
// }
// console.log(situacion('diego',true))


//¨***************************************************************
// Código del 09 de octubre 2021---- OPERADORES Y MECANISMOS DE DECISIÍN------
//******************************************************************* *

// Funciones con Fat Arrow function
const despidase=(nombre)=>{
  return nombre+ " hasta luego, fue un placer"
}

/* Si una funcion tiene un solo argumento se puede omitir los 
parentesis
Si la función tiene una sola linea en el cuerpo de la logica, se puede
omitir los corchetes y la palabra return
*/

const despidaseV2=nombre=>nombre+ " hasta luego, fue un placer"

const saludoSimple = ()=> "Este es un saludo simple"

console.log(saludoSimple())

const bienvenido=hola=>hola+ " Bienvenido al sistema del logueo"

console.log(bienvenido('luis'))

//operadores matemáticos
// + suma, - resta, * multiplicación / division, ^ Potencia
// incrementar   ++, operador de decrementar --

// Operadores de comparación, siempre arroja un booleano
// > mayor, < menor, === igual, >= mayor igual, <=menor igual
// !== diferente

// Operadores logicos
// y &&,  o ||, not !

const respuesta = 50>7
console.log(respuesta)

const comparacion = 'lili'
const comparacion2= 'lola'
const res=comparacion===comparacion2
console.log(res)

const xx = 7
const yy = 9
const respuestica = 9!==9
console.log(respuestica)

// Caracteres de escape \n permite hacer una nueva 
const espacio =()=>console.log('\n\n\n')

espacio()

console.log (!true)

/* Operadores logico AND (Y) &&
true and true --> true
true and false--> false
false and true --> false
false and fale--> false

Operador lógico OR (O) ||
true or true --> true
true or false --> true
false or true --> true
false or false --> false
*/
espacio()
console.log (7===7 || 'hola'!=='hola')


console.log('bebe'==='bb' && 2<5 || 32!==32)

//for (i=1;i<=100;i++){
//  console.log (i)
//}

const login=(username,password)=>{
  const usuario="aberracion"
  const clave="demonio"
  let respuesta=""

if (username===usuario && password===clave){
  // console.log('Bienvenido al infierno querido.')
  respuesta= 'Bienvenidos al infierno'
}else {
respuesta='No se aceptan pendejos'
  // console.log('No se acepta pendejos aquí')}
}
return respuesta

}


console.log(login('aberracion','demonio'))
