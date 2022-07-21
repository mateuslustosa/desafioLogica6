
//Crie um objeto que receba ao menos tres propriedades sobre voce
let dado = {
   nome: "Mateus",
   idade: 31,
   signo: "libra"
}

//Adiccione uma nova proipriedade sem alterar seu objeto inicial
dado.comida = "strogonoff";

//Remova uma propŕiedade desse objeto
delete dado.idade;

//Mostre no console todas as propriedades
console.log(dado);

//Crie um array chamado "cadastro" contendo ao menos 5 objetos. Cada obejeto deve recebver as seguintes propriedades:
// nome, idade, telefone, amigos. Na pripriedade amigos, adicione ao menos 4 itens

let cadastro = [
   {
      nome: "Jorge",
      idade: "22",
      telefone: "55552525",
      amigos: ["Maria", "João", "Ricardo", "Jessica"]
   },
   {
      nome: "Rodrigo",
      idade: "34",
      telefone: "44444444",
      amigos: ["Maria", "João", "Alex", "Julia"]
   },
   {
      nome: "Wagner",
      idade: "32",
      telefone: "99999999",
      amigos: ["Jefferson", "Gabriela", "Mariana", "Jessica", ]
   },
   {
      nome: "Elias",
      idade: "20",
      telefone: "22222222",
      amigos: ["Marlon", "Gustavo", "Pedro", "Camila", ]
   },
]

//Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[2])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[3])
console.log(cadastro[3].amigos[1])
console.log(cadastro[4].amigos[2])
