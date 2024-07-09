export function noLetters(variable, iterator){
    let string = variable.value.toString() // <- <- Cambia el tipo de dato a string ya que split solo admite string
            let array = string.split('') // <- <- Convierte la variable en un arreglo, lo separa cada que halla una letra

            iterator = 0

            for(let i = 0;i<string.length;i++){
                for(let a = 0;a<10;a++){
                    if(array[i] == a){
                        iterator += 1
                    } else {}
                }
            }
            console.log('Operacion terminada')
}