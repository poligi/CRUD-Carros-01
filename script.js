/*
Deve ser desenvolvido um programa que realize um CRUD de carros.
Os inputs devem ser feitos através do PROMPT do HTML. O
funcionamento deve ser o seguinte: 

1 - Crie uma função para Criar veículo
-> Seu carro deve ter os seguintes dados : modelo, marca,
ano, cor e preço.
-> O veículo deve ser adicionado na lista de veículos que
armazena todos os veículos cadastrados
-> Todo veículo deve ter um identificador único. Este
identificador deve ser gerado de forma automática 
*/

let cars = [];
let id = 1;

function createCar() {
  const modelo = prompt("Modelo do carro:");
  const marca = prompt("Marca do carro:");
  const ano = parseInt(prompt("Ano do carro:"));
  const cor = prompt("Cor do carro:");
  const preco = parseFloat(prompt("Preço do carro:"));

  const car = { id: id++, modelo, marca, ano, cor, preco};
  cars.push(car);
}
createCar()
createCar()
createCar()

/*
2 - Crie uma função para ler todos os veículos
->O sistema deve listar os veículos com o seguinte layout:
ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
Preço: R$40.000
ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
Preço: R$40.000 
*/

function readCars() {
  console.log("Carros cadastrados:");
  cars.forEach((car) => {
    console.log(`ID: ${car.id} | Modelo: ${car.modelo} | Marca: ${car.marca} | Ano: ${car.ano} | Cor: ${car.cor} | Preço: ${car.preco.toFixed(2)}`)
  })
}
readCars()

/*
3 - Crie uma função para filtrar veículos por marca
-> O sistema deve pedir para o usuário digitar a marca que
quer filtrar
-> Deve ser listado os veículos que forem da mesma marca
-> A lista deve ter o seguinte layout:
ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000 
*/

function filteredCars() {
   let marcaFiltrada = prompt("Digite a marca que você procura:")

   let carrosFiltrados = cars.filter((car) => car.marca.toLowerCase() === marcaFiltrada.toLowerCase())

   if (carrosFiltrados.length > 0) {
     console.log("Carros encontrados:")

     carrosFiltrados.forEach((car) => {
       console.log(`ID: ${car.id} | Modelo: ${car.modelo} | Cor: ${car.cor} | Preço: R$ ${car.preco.toFixed(3)}`)
     })
   } else {
     console.log(`Nenhum carro da marca "${marcaFiltrada}" foi encontrado.`)
   }
}
filteredCars()
