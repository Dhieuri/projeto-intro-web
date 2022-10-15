const time1 = {
    nome:"Flamengo",
    nomeCompleto: 'Clube de Regatas do Flamengo',
    idade: 126,
    possuiEstadio: true,
    libertadores: [1981, 2018], //anos das conquistas
    img: "https://diariodofla.com.br/wp-content/uploads/2021/05/fla-capa.jpg"
}

 //console.log(`${time1.toUpperCase()}\n Nome Copleto: ${nomeCompleto1} \n Idade = ${idade1} anos\n Possui estádio? ${possuiEstadio1}\n Conquistas na Libertadores = ${libertadores1}`)  //semana 2

   
const time2 = {
    nome: 'Palmeiras',
    nomeCompleto: 'Sociedade Esportiva Palmeiras',
    idade: 107,
    possuiEstadio: true,
    libertadores: [1999, 2020, 2021],
    img: "https://i.pinimg.com/564x/49/ce/25/49ce259a44c02bb4deb037dac8b9a54a.jpg"
}
// console.log(`${time2.toUpperCase()}\n Nome Copleto: ${nomeCompleto2} \n Idade = ${idade2} anos\n Possui estádio? ${possuiEstadio2}\n Conquistas na Libertadores = ${libertadores2}`) //semana 2

const time3 = {
   nome: 'Grêmio',
   nomeCompleto: 'Grêmio Foot-Ball Porto Alegrense',
   idade: 118,
   possuiEstadio: true,
   libertadores: [1983, 1995, 2017],
   img: "https://static3.tcdn.com.br/img/img_prod/311840/camiseta_gremio_escudo_feminina_azul_18893_3_20210806221614.jpg"
}
// console.log(`${time3.toUpperCase()}\n Nome Copleto: ${nomeCompleto3} \n Idade = ${idade3} anos\n Possui estádio? ${possuiEstadio3}\n Conquistas na Libertadores = ${libertadores3}`) //semana 2

// const medIdade = (idade1+idade2+idade3)/3
// console.log('Media das idades -', medIdade)

// const estadio = (possuiEstadio1 && possuiEstadio2 && possuiEstadio3)
// console.log(estadio)

// const timesTodos = []
// timesTodos.push(time1,time2,time3)
// console.log('Informações dos times',timesTodos)

let times = []
if(time1.possuiEstadio === true){
    times.push(time1)}
else{
    alert(`${time1.nome} Não adicionado pois não possui estádio`)
}

if(time2.possuiEstadio === true){
    times.push(time2)}
else{
    alert(`${time2.nome} Não adicionado pois não possui estádio`)
}

if(time3.possuiEstadio === true){
    times.push(time3)}
else{
    alert(`${time3.nome} Não adicionado pois não possui estádio`)
}

console.log('Informações dos times com estádio',times)

// semana 5/6

function imprimirTimes (times){
    for (const time of times) {
        console.log(`
        Nome: ${time.nome} 
        Nome Completo: ${time.nomeCompleto}
        Idade: ${time.idade} anos
        Possui estádio? ${time.possuiEstadio ? 'Sim': 'Não'}
        Conquistas na Libertadores: ${time.libertadores.join(", ")}
        ${'='.repeat(45)}`)  //semana 20
    }
}
imprimirTimes(times)

function arrayTimes(times, nome) {
    const resultado = times.filter(time => {
        return time.nome.toUpperCase().includes(nome.toUpperCase())
    })
    if (resultado.length === 0) {
        alert("Time não encontrado!")
    } else {
        return resultado
    }
}

// const time = prompt('Pesquise um time')
// console.log(arrayTimes(times, time))

// const filtroTimes = arrayTimes(times, time)
// imprimirTimes(filtroTimes)
function buscarTime() {

    let container;

    const search = document.querySelector("#pesquisaTime").value;
    if (!search) {
        alert("Digite algo para que a busca aconteça");
    } else {
        const timeSelecionado = arrayTimes(times, search);
      
    criaCard(timeSelecionado)
    }
}


function criaCard(times) {
    let itens = document.getElementById("times");
    itens.innerHTML = ""

    let container

    for (const time of times) {
        container = `<section class="time">
        <img src= ${time.img}>
        <ul>
            <li><p>Nome :</p> ${time.nome}</li>
            <li><p>Nome completo:</p> ${time.nomeCompleto}</li>
            <li><p>Idade</p> ${time.idade}</li>
            <li><p>Possui Estádio?</p> ${time.possuiEstadio ? 'Sim': 'Não'}</li>
            <li><p>Consquistas na Libertadores:</p> ${time.libertadores}</li>
        </ul>
    </section>`;
 
     itens.innerHTML += container;
    }

}

criaCard(times)
