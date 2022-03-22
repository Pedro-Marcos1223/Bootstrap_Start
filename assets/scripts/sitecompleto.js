// var Uso global
// let Se instanceada dentro de um escopo so funcionara ali /E pode ser mutavel
// const global imutavel

let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let contador = document.querySelector('#contador')
contador.innerHTML = "0 / 100"

let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = "100%";
email.style.width = "100%"

function validarNome() {

    if (nome.value.length < 2) {
        nome.style.border = "3px solid red"
    } else {
        nome.style.border = "3px solid green"
        nomeOk = true;
    }
}

function validarEmail() {

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".com") == -1 && email.value.indexOf(".org") == -1) {
        email.style.border = "3px solid red"

    } else {
        email.style.border = "3px solid green"
        emailOk = true;
    }
}

function validarAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    contador.innerHTML = assunto.value.length + "/ 100"

    if (assunto.value.length > 100) {
        txtAssunto.innerHTML =
            "Texto é muito grande, digite no máximo 100 caracteres ❌";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = 'block';
    } else {
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

function enviar() {
    if (emailOk == true || assuntoOk == true || emailOk == true) {
        alert("Formulario enviado com sucesso! ✔️")
    } else {
        alert("Preencha o formulário corretamente antes de enviar... ❌")
    }
}