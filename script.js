const enviar = document.querySelector('#enviar')
const nome = document.querySelector('#i_nome')
const sobrenome = document.querySelector('#i_sobrenome')
const nascimento = [
    document.querySelector('#i_dia'), 
    document.querySelector('#i_mes'), 
    document.querySelector('#i_dia')
] 
const rg = document.querySelector('#i_rg')
const cpf = document.querySelector('#i_cpf')

const rua = document.querySelector('#i_rua')
const numeroRua = document.querySelector('#i_numeroRua')
const bairro = document.querySelector('#i_bairro')
const estado = document.querySelector('#i_cidade')
const cidade = document.querySelector('#i_cidade')
const cep = document.querySelector('#i_cep')

const email = document.querySelector('#email')
const perfilImg = document.querySelector('#i_perfilImg')
const login = document.querySelector('#i_login')
const senha = document.querySelector('#i_senha')
const confirmaSenha = document.querySelector('#i_confirmaSenha')

const esporte = document.querySelector('#i_esporte')
const arquivo = document.querySelector('#i_arquivo')
const recursos = document.querySelector('#i_recursos')
const corFundo = document.querySelector('#i_corFundo')
const corFonte = document.querySelector('#i_corFonte')
const aniversario = document.querySelector('#i_aniversario')
const data = document.querySelector('#i_data')
const dataHora = document.querySelector('#i_dataHora')
const mesAno = document.querySelector('#i_mesAno')
const semana = document.querySelector('#i_semana')
const numero = document.querySelector('#i_numero')
const numero_7_14 = document.querySelector('#i_numero_7_14')
const pagina = document.querySelector('#i_pagina')




document.addEventListener('click', (e) => {
    const ele = e.target
    if(ele.id == 'enviar') {
        e.preventDefault()

        checaDadosPessoais()
        checaEndereco()
        checaDadosLogin()
        checaComplementos()
    }


})

function checaDadosPessoais () {
    const resultado = true
    
}

function checaEndereco () {

}

function checaDadosLogin () {

}

function checaComplementos () {

}
