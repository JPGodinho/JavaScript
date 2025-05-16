// const btnClicar = document.getElementById("btnClicar")
// const paragrafo = document.getElementById("paragrafo")

// btnClicar.addEventListener("click", function (){
//     paragrafo.textContent = "Matheus Bidu"
// })

const form = document.getElementById('form')
const inputNome = document.getElementById('nome')
const inputEmail = document.getElementById('email')
const inputAssunto = document.getElementById('assunto')
const inputMensagem = document.getElementById('mensagem')
const btnEnviar = document.getElementById('btnEnviar')
const mensagemErro = document.getElementById('mensagemErro')
const cadastroUsuarios = document.getElementById('cadastro')

btnEnviar.addEventListener("click", function (event){
    event.preventDefault()

    let nome = inputNome.value
    let email = inputEmail.value
    let assunto = inputAssunto.value
    let mensagem = inputMensagem.value

    if(nome === "" || email === "" || assunto === "" || mensagem === ""){
        mensagemErro.textContent = "Preencha os campos vazio!"
        mensagemErro.style.color = "#ff0000"
        return
    }

    // alert(`Nome: ${nome}\n Email: ${email}\n Assunto: ${assunto}\n Mensagem: ${mensagem}`)

    const cardusuario = document.createElement("div")
    cardusuario.innerHTML = `
    <h3> Nome: ${nome} </h3>
    <h3> E=mail: ${email} </h3>
    <h3> Assunto: ${assunto} </h3>
    <h3> Mensagem: ${mensagem} </h3>
    `

    form.reset()
})