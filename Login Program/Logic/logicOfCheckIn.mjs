import { noLetters } from './utils.mjs'

const interfaceCheckIn = document.getElementById('checkInInterfaceLogic')
const interfaceLogin = document.getElementById('loginInterfaceLogic')

const buttonCheckIn = document.getElementById('checkInLognLogic')
const acceptButtonCheckIn = document.getElementById('acceptCheckinLogic')
const cancelButtonCheckIn = document.getElementById('cancelCheckinLogic')
export function enterCheckIn(){

    /* ↓ Manejo del evento click del boton registrarse del login */
    buttonCheckIn.addEventListener('click',()=>{
        interfaceLogin.style.display = 'none'

        interfaceCheckIn.style.display = 'flex'
    })

    /* ↑ Manejo del evento click del boton registrarse del login */

    
    /* ↓ Manejo del evento click del boton validar de registrarse */
    acceptButtonCheckIn.addEventListener('click',()=>{
        let iteratorNoLettersCheckIn
        noLetters(iteratorNoLettersCheckIn)
    })

    /* ↑ Manejo del evento click del boton validar de registrarse */


    /* ↓ Manejo del evento click del boton Cancelar de registrarse */
    cancelButtonCheckIn.addEventListener('click',()=>{
        interfaceLogin.style.display = 'flex'

        interfaceCheckIn.style.display = 'none'
    })

    /* ↑ Manejo del evento click del boton Cancelar de registrarse */
}