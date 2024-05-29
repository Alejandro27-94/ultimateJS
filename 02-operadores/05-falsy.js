// short circuit

// Falso   / Falsy

// false
// 0
// ''
// null
//underfined
// NaN

let nombre = '';
let username = nombre || 'Anonimo';
console.log(username);

let nombre1 = 'Alejandro Muñoz';
let username1 = nombre1 || 'Anonimo';
console.log(username1);

function fn1() {
    console.log('soy funcion 1');
    return false;
}

function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2() ;   


