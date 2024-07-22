import { noLetters } from './utils.mjs'
import { oneNumberAndOneLetter } from './utils.mjs'

const interfaceCheckIn = document.getElementById('checkInInterfaceLogic')
const interfaceLogin = document.getElementById('loginInterfaceLogic')


// ↓ Inputs del login
const inputDocument = document.getElementById('documentLognLogic')
// ↓ Inputs del registro
const documentCheckIn = document.getElementById('documentCheckInLogic')
const newPasswordCheckIn = document.getElementById('newPasswordCheckInLogic')
const repeatPasswordCheckIn = document.getElementById('repeatPasswordCheckInLogic')


// ↓ Errores del login
const errorTextLetters = document.getElementById('errorNumberLognLogic')
const errorFiveNum = document.getElementById('errorFiveNumLognLogic')
const errorEmptySpaces = document.getElementById('errorEmptySpacesLogic')
// ↓ Errores del registro
const errorNumbersDocument = document.getElementById('numbersErrorCheckInLogic')
const errorCharactersDocument = document.getElementById('charactersErrorCheckInLogic')
const errorCharactersPassword = document.getElementById('passwordErrorCheckInLogic')
const errorNewPassword = document.getElementById('ErrorNewPasswordCheckInLogic')
const errorOneLetterAndNumber = document.getElementById('oneLetterAndNumberErrorCheckInLogic')
const errorPasswordRepeat = document.getElementById('repeatPasswordErrorCheckInLogic')


const buttonCheckIn = document.getElementById('checkInLognLogic')
const acceptButtonCheckIn = document.getElementById('acceptCheckinLogic')
const cancelButtonCheckIn = document.getElementById('cancelCheckinLogic')


export function enterCheckIn(){

    /* ↓ Manejo del evento click del boton registrarse del login */
    buttonCheckIn.addEventListener('click',()=>{
        interfaceLogin.style.display = 'none'
        interfaceCheckIn.style.display = 'flex'
        errorTextLetters.style.display = 'none'
        errorFiveNum.style.display = 'none'
        errorEmptySpaces.style.display = 'none'
        inputDocument.value = ''
    })

    /* ↑ Manejo del evento click del boton registrarse del login */

    
    /* ↓ Manejo del evento click del boton validar de registrarse */
    acceptButtonCheckIn.addEventListener('click',()=>{
        let iteratorNoLettersCheckIn = 0
        let iteradorPasswordErrors = 0

        /* ↓ Manejo de errores del input documento */
        iteratorNoLettersCheckIn = noLetters(documentCheckIn,iteratorNoLettersCheckIn)

        if(documentCheckIn.value.length < 6){
            errorCharactersDocument.style.display = 'flex'
            errorNumbersDocument.style.display = 'none'
            errorCharactersPassword.style.display = 'none'
            errorNewPassword.style.display = 'none'

        } else if(iteratorNoLettersCheckIn !== documentCheckIn.value.length){
            errorNumbersDocument.style.display = 'flex'
            errorCharactersDocument.style.display = 'none'
            errorCharactersPassword.style.display = 'none'
            errorNewPassword.style.display = 'none'
            
        } else{
            errorCharactersDocument.style.display = 'none'
            errorNumbersDocument.style.display = 'none'
            iteradorPasswordErrors = 1
        }
        //NOTA: Para usar el valor final (Return) de una funcion por fuera de la función hay que encerrarla en una variable
        /* ↑ Manejo de errores del input documento */


        /* ↓ Manejo de errores de los inputs de contraseñas */
        let iteradorTwoCharactersErrors = oneNumberAndOneLetter(newPasswordCheckIn)
        let save = 0

        console.log(iteradorTwoCharactersErrors,newPasswordCheckIn.value.length)

        if(iteradorPasswordErrors === 1){

            if(newPasswordCheckIn.value === ''){
                errorNewPassword.style.display = 'flex'
                errorCharactersPassword.style.display = 'none'
                errorOneLetterAndNumber.style.display = 'none'
                errorPasswordRepeat.style.display = 'none'

            }else if(newPasswordCheckIn.value.length < 5){
                errorCharactersPassword.style.display = 'flex'
                errorNewPassword.style.display = 'none'
                errorOneLetterAndNumber.style.display = 'none'
                errorPasswordRepeat.style.display = 'none'

            }else if(iteradorTwoCharactersErrors === false){
                errorOneLetterAndNumber.style.display = 'flex'
                errorNewPassword.style.display = 'none'
                errorCharactersPassword.style.display = 'none'
                errorPasswordRepeat.style.display = 'none'

            }else if(newPasswordCheckIn.value !== repeatPasswordCheckIn.value){
                errorPasswordRepeat.style.display = 'flex'
                errorNewPassword.style.display = 'none'
                errorCharactersPassword.style.display = 'none'
                errorOneLetterAndNumber.style.display = 'none'

            }else{
                errorNewPassword.style.display = 'none'
                errorCharactersPassword.style.display = 'none'
                errorOneLetterAndNumber.style.display = 'none'
                errorPasswordRepeat.style.display = 'none'                
                save = 1
                console.log('Registro exitoso',' save =',save)
            }
        }

        if(save === 1){
            documentCheckIn.value = ''
            newPasswordCheckIn.value = ''
            repeatPasswordCheckIn.value = ''
        }
        /* ↑ Manejo de errores de los inputs de contraseñas */

    })  

    /* ↑ Manejo del evento click del boton validar de registrarse */


    /* ↓ Manejo del evento click del boton Cancelar de registrarse */
    cancelButtonCheckIn.addEventListener('click',()=>{
        interfaceLogin.style.display = 'flex'
        interfaceCheckIn.style.display = 'none'

        errorCharactersDocument.style.display = 'none'
        errorNumbersDocument.style.display = 'none'
        errorCharactersPassword.style.display = 'none'
        errorNewPassword.style.display = 'none'

        documentCheckIn.value = ''
        newPasswordCheckIn.value = ''
        repeatPasswordCheckIn.value = ''

        iteradorPasswordErrors = 0
    })

    /* ↑ Manejo del evento click del boton Cancelar de registrarse */
}