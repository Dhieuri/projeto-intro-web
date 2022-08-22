const time1 = 'Flamengo'
const idade1 = 126
const possuiEstadio1 = false
const libertadores1 = [1981, 2018] //anos das conquistas

console.log(`${time1.toUpperCase()}\n Idade = ${idade1} anos\n Possui estádio? ${possuiEstadio1}\n Conquistas na Libertadores = ${libertadores1}`)

const time2 = 'Palmeiras'
const idade2 = 107
const possuiEstadio2 = true
const libertadores2 = [1999, 2020, 2021]

console.log(`${time2.toUpperCase()}\n Idade = ${idade2} anos\n Possui estádio? ${possuiEstadio2}\n Conquistas na Libertadores = ${libertadores2}`)

const time3 = 'Grêmio'
const idade3 = 118
const possuiEstadio3 = true 
const libertadores3 = [1983, 1995, 2017]

console.log(`${time3.toUpperCase()}\n Idade = ${idade3} anos\n Possui estádio? ${possuiEstadio3}\n Conquistas na Libertadores = ${libertadores3}`)

const medIdade = (idade1+idade2+idade3)/3
console.log('Media das idades -', medIdade)

const estadio = (possuiEstadio1 && possuiEstadio2 && possuiEstadio3)
console.log(estadio)

