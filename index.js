// receber o nome da nave
// setar val inicial = 0
// 1 acc 5 km/s
// 2 desacc 5 km/s
// a velocidade não pode ser menor que 0 
// 3 imprimir o nome da nave com a velocidade atual
// 4 sair do programa
// ao escolher número fora da lista o menu deverá ser exibido novamente

let naveName = prompt("Olá, digite o nome da nave")
let velocity = 0
let newVelocity = ""
let option = ""

alert("A velocidade inicial é " + velocity + " km/s")

inicialMenu ()

while (option != 4) {

switch (option) {
    case "1":
        accelerate ();
        break;
    case "2":
        decelerate ();
        break;
    case "3":
        dataBoard ()
        break;
    default:
        alert("Opção inválida");
        inicialMenu ();
    }
}

if (option = 4){
    alert("Programa encerrado, obrigado!")
}
    
// funções abaixo

function inicialMenu () {


    option = prompt("Escolha entre as opções: \n1 - Acelerar nave em 5 km/s\n2 - Desacelerar nave em 5 km/s\n3 - Imprimir dados de navegação\n4 - Sair")
    return option
}


function accelerate () {
    newVelocity = velocity + 5
    velocity = newVelocity
    inicialMenu ();
}

function decelerate () {
    if (velocity > 0) {
    newVelocity = velocity - 5
    velocity = newVelocity
    } else {
    alert("Nave parada, impossível desacelerar")
}
    inicialMenu()
}

function dataBoard () {
    alert("Nave: " + naveName + "\nVelocidade atual: " + velocity + " km/s");
    inicialMenu ()
}