const nome = document.querySelector('.nome')
const nascimento = document.querySelector('.nascimento')
const cidade = document.querySelector('.cidade')
const passaTempo = document.querySelector('.passaTempo')

const botaoNome = document.querySelector('.editarNome')
const botaoNascimento = document.querySelector('.editarNascimento')
const botaoCidade = document.querySelector('.editarCidade')
const botaoPassaTempo = document.querySelector('.editarPassaTempo')
const botoes = document.querySelectorAll('.editar')

const campoNome = document.querySelector('.campoNome')
const campoNascimento = document.querySelector('.campoNascimento')
const campoCidade = document.querySelector('.campoCidade')
const campoPassaTempo = document.querySelector('.campoPassaTempo')

const editarFoto = document.querySelector('.editarFoto')
const botaoUpload = document.querySelector('.botaoUpload')
const mensagemImagem = document.querySelector('.mensagemImagem')
const imagem = document.querySelector('.imagem')

for(let i = 0; i < botoes.length; i++) {
    botoes[i].setAttribute('hidden', '')
}

botaoUpload.addEventListener('click', () => {
    editarFoto.click()
})

editarFoto.addEventListener('change', function (e) {
    const file = e.target.files[0]

    if(file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
   
        reader.onloadend = function () {
            imagem.style.backgroundImage = `url(${reader.result})`
            imagem.style.backgroundSize = 'cover'
            imagem.style.backgroundPosition = 'center'
        }
        mensagemImagem.innerText = ''
    } else  if(!file) {
        mensagemImagem.innerText = 'Nenhuma imagem selecionada'
    }
})



document.addEventListener('click', function (e) {
    const el = e.target

    if(el.classList.contains('editarPerfil')) {
        for(let i = 0; i < botoes.length; i++) {
            botoes[i].setAttribute('hidden', '')
        }
        el.classList.add('mostrar')
        el.classList.remove('editarPerfil')
    } else if(el.classList.contains('mostrar')) {
        for(let i = 0; i < botoes.length; i++) {
            botoes[i].removeAttribute('hidden')
        }
        editarFoto.setAttribute('hidden', '')
        el.classList.remove('mostrar')
        el.classList.add('editarPerfil')
    }

    if(el.classList.contains('editar')){
        if(el.classList.contains('editarNome')){
            atualizaCampo(botaoNome, 'enviarNome', 'inputNome', campoNome, nome, 'nome')
        } 
        if(el.classList.contains('editarNascimento')){
            atualizaCampo(botaoNascimento, 'enviarNascimento', 'inputNascimento', campoNascimento, nascimento, 'nascimento')
        }
        if(el.classList.contains('editarCidade')){
            atualizaCampo(botaoCidade, 'enviarCidade', 'inputCidade', campoCidade, cidade, 'cidade')
        }
        if(el.classList.contains('editarPassaTempo')){
            atualizaCampo(botaoPassaTempo, 'enviarPassaTempo', 'inputPassaTempo', campoPassaTempo, passaTempo, 'passaTempo')
        }
    }

    if(el.classList.contains('excluirPassaTempo')){
        el.parentElement.parentElement.remove()
    }
})

function atualizaCampo (botao, enviarClasse, inputClasse, campo, dado, tipo) {
    if(!botao.classList.contains(enviarClasse)){
        const input = document.createElement('input')
        input.classList.add(inputClasse)
        input.setAttribute('type', 'text')

        botao.value = `Enviar ${tipo}`
        botao.classList.add(enviarClasse)
        campo.appendChild(input)
        input.focus()

    } else if(botao.classList.contains(enviarClasse)){
        if(botao.classList.contains('editarPassaTempo')){
            if(document.querySelector(`.${inputClasse}`).value) {

                const div = document.createElement('div')
                const li = document.createElement('li')
                const button = document.createElement('input')
                
                li.innerText = document.querySelector(`.${inputClasse}`).value
                button.setAttribute('type', 'button')
                button.value = 'X'
                button.classList.add('excluirPassaTempo')
                div.classList.add('campoItem')
            
                div.appendChild(li)
                li.appendChild(button)
                dado.appendChild(div)
                document.querySelector('.listaMensagem').innerText = ''
            } else {
                document.querySelector('.listaMensagem').innerText = 'Dado inválido'
            }
            
        } else if(!botao.classList.contains('editarPassaTempo')){
            dado.innerText = document.querySelector(`.${inputClasse}`).value? document.querySelector(`.${inputClasse}`).value : 'Dado inválido'
        }
        campo.removeChild(document.querySelector(`.${inputClasse}`))
        botao.classList.remove(enviarClasse)
        botao.value = `Editar ${tipo}`
    }
}
/*

    if(!el.classList.contains('enviarNome')){
        const input = document.createElement('input')
        input.classList.add('inputNome')
        input.setAttribute('type', 'text')

        botaoNome.value = 'Enviar'
        botaoNome.classList.add('enviarNome')
        campoNome.append(input)
        input.focus()
    } else if(el.classList.contains('enviarNome')){
        campoNome.removeChild(document.querySelector('.inputNome'))
        botaoNome.classList.remove('enviarNome')
        botaoNome.value = 'Editar'
    }
*/