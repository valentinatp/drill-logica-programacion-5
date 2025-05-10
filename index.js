

let counter = 0;
function attemptCount(){
    //Debe crear un contador para validar que realice la accion hasta un limite
    //inicializamos el contador
    //Establecemos el limite
    const LIMIT_MAX_ATTEMPTS = 3;
    //Ciclo para validar los intentos
    if ( counter != LIMIT_MAX_ATTEMPTS ){
        mysteriousNumber();
    }
    else {
        document.querySelector('#btnAttempt').setAttribute('disabled', 'disabled');
        alert('Se acabaron los intentos :(')
    }
    counter++;
}


function mysteriousNumber(){
    //Pedirle un numero al usuario.
    let numberUserInput = document.getElementById('numberUser').value;
    let parseNumberUser = parseInt(numberUserInput);
    
    //Debe validar que el dato ingresado por el usuario sea de tipo Number.
    if ( Number.isInteger(parseNumberUser) ) {
        validationNumberRange(parseNumberUser);
    } else {
        alert('Por favor ingresa un numero.');
    }
}

let listAttempts = [];
function validationNumberRange(number){
    //Debe ser entre 1 y 100.
    if ( number > 0 && number <= 100 ) {
        let elCurrentNumber = document.getElementById('currentNumber');
        elCurrentNumber.textContent = number;
        listAttempts.push(number);
        //Insertamos el dato en el elemento
        elFirstAttempt = document.querySelector('#firstAttempt');
        elFirstAttempt.textContent = listAttempts[0];
        elSecondAttempt = document.querySelector('#secondAttempt');
        elSecondAttempt.textContent = listAttempts[1];
        elThirdAttempt = document.querySelector('#thirdAttempt');
        elThirdAttempt.textContent = listAttempts[2];
        //Invocamos a la funcion para comprobar el numero.
        validationMysteriousNumber(number);
    } else {
        alert('Por favor ingresa un numero entre 1 y 100');
    } 
    console.log(listAttempts);
}

//Definir un numero secreto.
// Puede ser aleatorio
const SECRET_NUMBER = 12;
function validationMysteriousNumber(number){
    if( number == SECRET_NUMBER ) {
        //Si el usuario adivina el numero se debe mostrar un mensaje felicitando
        // 'Felicidades, adivinaste el numero secreto.'
        const messageSuccess = 'Felicidades, adivinaste el numero secreto.';
        alert(messageSuccess);
        const BLOCK_BTN_ATTEMPT = document.querySelector('#btnAttempt').setAttribute('disabled', 'disabled');
        return BLOCK_BTN_ATTEMPT;
    } else {
        //Si el usuario no se adivina el numero se debe mostra un mensaje de error
        // 'Ups, el numero secreto es incorrecto, vuelve a intentarlo.'
        const mesaggeError = 'Ups, el numero secreto es incorrecto, vuelve a intentarlo.';
        return alert(mesaggeError);

    }
}

document.querySelector('#btnAttempt').addEventListener('click', () => {
    attemptCount();
});