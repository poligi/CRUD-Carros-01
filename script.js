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

function menu() {
  let action = prompt('O que deseja fazer? 1 - Adicionar veículo / 2 - Ver veículos / 3 - Procurar pela marca / 4 - Atualizar veículo / 5 - Sair')

  switch (action) {
    case '1':
      createCar()
      break
    case '2':
      readCars()
      break
    case '3':
      filteredCars()
      break
    case '4':
      updateCars()
      break
    case '5':
      console.log('Saindo..')
      break
    default:
      console.log('Opção inválida!')
      menu()
  }
}
menu()

function createCar() {
  const modelo = prompt("Modelo do carro:")
  const marca = prompt("Marca do carro:")
  const ano = parseInt(prompt("Ano do carro:"))
  const cor = prompt("Cor do carro:")
  const preco = parseFloat(prompt("Preço do carro:"))

  const car = { id: id++, modelo, marca, ano, cor, preco}
  cars.push(car)
  menu()
}


/*
2 - Crie uma função para ler todos os veículos
->O sistema deve listar os veículos com o seguinte layout:
ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
Preço: R$40.000
ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
Preço: R$40.000 
*/

function readCars() {
  if (cars.length === 0) {
    document.write('Nenhum carro cadastrado.')
  } else {
    document.write('Carros cadastrados:')
    cars.forEach((car) => {
      document.write(`ID: ${car.id} | Modelo: ${car.modelo} | Marca: ${car.marca} | Ano: ${car.ano} | Cor: ${car.cor} | Preço: ${car.preco.toFixed(3)}`)
    })
  }
  menu()
}
  


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
     document.write("Carros encontrados:")

     carrosFiltrados.forEach((car) => {
       document.write(`ID: ${car.id} | Modelo: ${car.modelo} | Cor: ${car.cor} | Preço: R$ ${car.preco.toFixed(3)}`)
     })
   } else {
     document.write(`Nenhum carro da marca "${marcaFiltrada}" foi encontrado.`)
   }
   menu()
}

/*
4 - Crie uma função para Atualizar veículo
-> O sistema deve pedir para o usuário digitar o
IDENTIFICADOR do veículo
-> O Sistema deve verificar se o veículo existe ou não e
mostrar a seguinte mensagem caso o veículo não exista:
"Veículo, não encontrado. O usuário deve voltar para o menu
inicial depois"
-> Se o veículo existir, o sistema deve permitir que o usuário
atualize somente a cor e o preço. 
*/

function updateCars () {
  let identifier = parseInt(prompt('Informe o id do carro que deseja atualizar:'))

  if (isNaN(identifier)) {
    document.write('ID inválido. Voltando para o menu inicial..')
    menu()
    return
  }

  let findedCar = cars.find((car) => car.id === identifier)

  if (!findedCar) {
    document.write('Veículo não encontardo. Voltando para o menu inicial..')
    menu()
    return
  }

  const updateColor = prompt('Informe a nova cor do veículo:')
  const updatePrice = parseFloat(prompt('Informe o novo preço do veículo:'))

  if (updateColor) findedCar.cor = updateColor
  if (!isNaN(updatePrice) && updatePrice > 0) {
    findedCar.preco = updatePrice
  } else {                                           //atualização dos dados
    document.write('Preço inválido, tente novamente')
    menu()
    return
  }

  document.write('Atualização concluída!')
  document.write(`ID: ${findedCar.id} | Modelo: ${findedCar.modelo} | Cor: ${findedCar.cor} | Preço: R$ ${findedCar.preco.toFixed(3)}`)

  menu()
}

/*5 - Crie uma função Remover veículo
->O usuário digitar o IDENTIFICADOR do veículo
-> O Sistema deve verificar se o veículo existe ou não e
mostrar a seguinte mensagem caso o veículo não exista:
"Veículo, não encontrado. O usuário deve voltar para o menu
inicial depois"
-> Se o veículo existir, o sistema deve remover o veículo 
*/

function remove() {
  let idToRemove = parseInt(prompt('Informe o id do carro que deseja deletar:'))

  if (isNaN(identifier)) {
    document.write('ID inválido. Voltando para o menu inicial..')
    menu()
    return
  }

  let carToRemove = cars.find((car) => car.id === idToRemove)

  if (!carToRemove) {
    document.write('Veículo não encontrado.')
  }
}
