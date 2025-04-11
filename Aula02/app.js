// Teoria

// console.log(0 === 0)
// console.log("0" === 0)

// console.log("uva" > "banana")
// console.log("Uva" > "banana")



// let nome = "João"

// if(nome === "João" || nome === null){
//     console.log("É você!")
// }
// else if(nome === "Fulano"){
//     console.log("Você não é joão e sim fulano :)")
// }
// else{
//     console.log("Não é você")
// }

// let nome = "João"

// if(nome === "João" && nome === null){
//     console.log("É você!")
// }
// else if(nome === "Fulano"){
//     console.log("Você não é joão e sim fulano :)")
// }
// else{
//     console.log("Não é você")
// }


// nome === "João"? console.log("É você"): console.log("Sai daqui")


// let nome = "João"
// let sobrenome = "Godinho"
// let apelido = "JP"

// let nomeFinal = apelido || sobrenome || nome || "visitante"

let nome = "João"
let sobrenome = "Godinho"
let apelido = "JP"

switch(nome){
    case "João":
        console.log("É você!")
        break
    case "Fulano":
        console.log("É fulano")
        break
    default:
        console.log("Não te conheço")
}

//Exercício

let login = prompt("Insira seu login:")
let senha = prompt("Insira a sua senha")

if(
    (login === "admin" && senha === "1234") || 
    (login === "user" && senha === "123") || 
    (login === "joao" && senha === "12")
){
    alert("Login efetuado com sucesso!")
}
else{
    alert("Usuário ou senha incorretos")
}