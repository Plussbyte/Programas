export function noLetters(variable, iterator){
    let string = variable.value.toString() // <- <- Cambia el tipo de dato a string ya que split solo admite string
    let array = string.split('') // <- <- Convierte la variable en un arreglo, lo separa cada que halla una letra

    for(let i = 0;i < string.length;i++){
        for(let a = 0;a < 10;a++){
            if(array[i] == a){
                iterator += 1
            } else {}
        }
    }

    return iterator
}

export function oneNumberAndOneLetter(variable){
    let string = variable.value.toString()
    let array = string.split('')
    let IteratorLetter = 0; let letter = 0; let number = 0

    for(let i = 0;i < string.length;i++){
        for(let a = 0;a < 10;a++){
            if(array[i] == a){
                number = 1
                IteratorLetter += 1
            }
        }
    }
    if(IteratorLetter !== string.length){
        letter = 1
    }

    if(letter === 1 && number === 1){
        return true
    } else {
        return false
    }
}