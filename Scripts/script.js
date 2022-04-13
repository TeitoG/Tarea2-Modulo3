let btnSuma = document.getElementById('suma');
btnSuma.addEventListener('click', Suma);

let btnMenor = document.getElementById('menor');
btnMenor.addEventListener('click', Menor)

let btnIgual = document.getElementById('igual');
btnIgual.addEventListener('click', Igual)

let btnIntercambiar = document.getElementById('intercambiar');
btnIntercambiar.addEventListener('click', Intercambiar)


function Suma(){
    let Num1 = document.getElementById("num1").value;
    let Num2 = document.getElementById("num2").value;
    let num1Pos = -Math.abs(Num1);
    let suma = num1Pos - Num2
    let resultado = Math.abs(suma)
    alert ("La suma de los dos números es: "+resultado)
} 



function Menor(){
    let Num1 = document.getElementById("num1").value;
    let Num2 = document.getElementById("num2").value;
    let menor = Math.min (Num1, Num2);
    alert (menor)
}

function Igual(){
    let Num1 = document.getElementById("num1").value;
    let Num2 = document.getElementById("num2").value;
    if (Object.is(Num1, Num2)) {
        alert("los números son iguales")
    }
    else {
        alert("los números ingresados no son iguales")
    }
}

function Intercambiar(){
    let Num1 = document.getElementById("num2").value;
    let Num2 = document.getElementById("num1").value;
    document.getElementById('num1').value = Num1;
    document.getElementById('num2').value = Num2;
    alert("el número 1 ahora es: " + Num1 + " El número 2 ahora es: " + Num2)
}



let form = document.getElementById('form');
form.addEventListener('submit', formSumbit);
function formSumbit(e) {
    e.preventDefault();
}