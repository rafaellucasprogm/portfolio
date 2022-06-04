 export function valida(input) {

    if (input.validity.valid) {
        input.parentElement.classList.remove('input--erro')
           
    } else {
        input.parentElement.classList.add('input--erro')
        
    }
}




