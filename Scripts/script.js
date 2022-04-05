let btnSuma = document.getElementById('suma');
btnSuma.addEventListener('click', Suma);


let btnMenor = document.getElementById('menor');
btnMenor.addEventListener('click', Menor)

let btnIgual = document.getElementById('igual');
btnIgual.addEventListener('click', Igual)

let btnIntercambiar = document.getElementById('intercambiar');
btnIntercambiar.addEventListener('click', Intercambiar)

function Suma(nums) {
    let Num1 = document.getElementById("num1").value;
    let Num2 = document.getElementById("num2").value;
    if (Num1 >= 0 && Num2 >= 0) {
        var Nume1 = parseInt(Num1);
        var Nume2 = parseInt(Num2);
        if (nums instanceof Array) {
            let suma = nums.reduce((Nume1, Nume2) => Nume1 + Nume2);
            alert("La suma de los dos números es: " + suma)
            return suma;
        } else {}
        Suma([Nume1, Nume2])
    } else {
        alert("Debe ingresar números que sean positivos")
    }
}
function Menor() {
    let Num1 = document.getElementById("num1").value;
    let Num2 = document.getElementById("num2").value;
    if (Num1 >= 0 && Num2 >= 0) {
        let menor = Math.min(Num1, Num2);
        alert("El número menor de los dos ingresados es: " + menor)
    } else {
        alert("Debe ingresar números que sean positivos")
    }
}
function Igual() {
    let Num1 = document.getElementById("num1").value;
    let Num2 = document.getElementById("num2").value;
    if (Num1 >= 0 && Num2 >= 0) {
        if (Object.is(Num1, Num2)) {
            alert("los números que ingresó son iguales")
        } else {
            alert("los números ingresados no son iguales")
        }
    } else {
        alert("Debe ingresar números que sean positivos")
    }
}
function Intercambiar() {
    let Num1 = document.getElementById("num1").value;
    let Num2 = document.getElementById("num2").value;
    if (Num1 >= 0 && Num2 >= 0) {
        let intercambio = Num1;
        Num1 = Num2
        Num2 = intercambio
        document.getElementById('num1').value = Num1;
        document.getElementById('num2').value = Num2;
        alert("El número 1 ahora es: " + Num1  + "\nEl número 2 ahora es: " + Num2)
    } else {
        alert("Debe ingresar números que sean positivos")
    }
}
let form = document.getElementById('form');
form.addEventListener('submit', formSumbit);
function formSumbit(e) {
    e.preventDefault();
}