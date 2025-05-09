//Definir un numero secreto.
// Puede ser aleatorio
let secretNumber = 12;

function mysteriousNumber(number){
    //Pedirle un numero al usuario.
    let numberUserInput = document.getElementById('numberUser').value;
    let parseNumberUser = parseInt(numberUserInput);
    //Debe validar que el dato ingresado por el usuario sea de tipo Number.
    if ( Number.isInteger(parseNumberUser) ) {
        //Debe ser entre 1 y 100.
        if ( numberUserInput > 0 && numberUserInput <= 100 ) {
            let elCurrentNumber = document.getElementById('currentNumber');
            elCurrentNumber.textContent = numberUserInput;
            validationMysteriousNumber(numberUserInput);
            //Mostrar los intentos anteriores
            // let attemptList = [];
            
            // const LIMIT_MAX_ATTEMPTS = 3;
            // for ( let i = 1; i <= LIMIT_MAX_ATTEMPTS; i++ ) {
            //     //
            //     attemptList.push(numberUserInput);
            // }
            
            //console.log(attemptList);
        } else {
            alert('Por favor ingresa un numero entre 1 y 100');
        }
    } else {
        alert('Por favor ingresa un numero.');
    }
}

function validationMysteriousNumber(number){
    if( number == secretNumber ) {
        //Si el usuario adivina el numero se debe mostrar un mensaje felicitando
        // 'Felicidades, adivinaste el numero secreto.'
        let messageSuccess = 'Felicidades, adivinaste el numero secreto.';
        return alert(messageSuccess);
    } else {
        //Si el usuario no se adivina el numero se debe mostra un mensaje de error
        // 'Ups, el numero secreto es incorrecto, vuelve a intentarlo.'
        let mesaggeError = 'Ups, el numero secreto es incorrecto, vuelve a intentarlo.';
        return alert(mesaggeError);
    }
}

/*
let elAttempts = document.querySelectorAll('h4 > span');
console.log(elAttempts);
let attemptList = [];
elAttempts.forEach((element) => {
    attemptList.push(numberUserInput);
    element.textContent = numberUserInput;
});
*/