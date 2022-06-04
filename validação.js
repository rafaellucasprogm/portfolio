 export function valida(input) {

    const tipoDeInput = input.dataset.tipo

    if (input.validity.valid) {
        input.parentElement.classList.remove('input--erro')
        input.parentElement.querySelector('.escondeMensagemErro').innerHTML = ''
           
    } else {
        input.parentElement.classList.add('input--erro')
        input.parentElement.querySelector('.escondeMensagemErro').innerHTML = motraMensagemDeErro(tipoDeInput, input)

        
    }
}

const tiposDeErro = [

    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'

]

const mensagensDeErro = {
    nome: {
        
        valueMissing: 'O campo de nome não pode estar vazio.'
    },

    email: {

        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },

    assunto: {

        valueMissing: 'O campo de assunto não pode estar vazio.',
        
    },

}

function motraMensagemDeErro(tipoDeInput, input) {

    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }   

    })

    return mensagem   
}


