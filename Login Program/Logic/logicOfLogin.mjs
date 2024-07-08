const buttonAccept = document.getElementById('acceptLognLogic')
const inputDocument = document.getElementById('documentLognLogic')
const allLogin = document.getElementById('loginLogic')

const errorTextLetters = document.getElementById('errorNumberLognLogic')
const errorFiveNum = document.getElementById('errorFiveNumLognLogic')
const errorTextPassword = document.getElementById('errorPasswordLognLogic')

export function notLetters(){ // <- <- Funcion la cual hace que el input del documento solo reciba números

    /* ↓ Manejo del evento click del boton ingresar del login */
    buttonAccept.addEventListener('click',()=>{
        let enterIterador = 0

        function errorsOfInputsLogin(){ // <- <- 
            let stringInpDoc = inputDocument.value.toString() // <- <- Cambia el tipo de dato a string ya que split solo admite string
            let arrayInpDoc = stringInpDoc.split('') // <- <- Convierte la variable en un arreglo, lo separa cada que halla una letra
            let errorIndicatorLetters = 0
            for(let i = 0;i<stringInpDoc.length;i++){
                for(let a = 0;a<10;a++){
                    if(arrayInpDoc[i] == a){
                        errorIndicatorLetters += 1
                    } else {}
                }
            }
            console.log(stringInpDoc.length)

            if(stringInpDoc.length < 6){
                errorFiveNum.style.display = 'flex'
                errorTextLetters.style.display = 'none'

            } else if(errorIndicatorLetters < stringInpDoc.length) {
                errorTextLetters.style.display = 'flex'
                errorFiveNum.style.display = 'none'

            } else {
                errorTextLetters.style.display = 'none'
                errorFiveNum.style.display = 'none'
                enterIterador = 1
            }
        }


        function enterLogin(){
            if(enterIterador === 1){
                allLogin.style.display = 'none'
            }
        }

        errorsOfInputsLogin()
        enterLogin()
    })

    /* ↑ Manejo del evento click del boton ingresar del login */


    /**/
}