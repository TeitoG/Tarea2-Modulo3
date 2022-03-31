let btnSuma = document.getElementById('suma');
btnSuma.addEventListener('click', Suma);

let btnMenor = document.getElementById('menor');
btnMenor.addEventListener('click', Menor)

let btnIgual = document.getElementById('igual');
btnIgual.addEventListener('click', Igual)

let btnIntercambiar = document.getElementById('intercambiar');
btnIntercambiar.addEventListener('click', Intercambiar)


function Suma(nums){
    let Num1 = document.getElementById("num1").value;
    let Num2 = document.getElementById("num2").value;
    var Nume1 = parseInt(Num1);
    var Nume2 = parseInt(Num2);
    if (nums instanceof Array ){
        let suma = nums.reduce((Nume1, Nume2) => Nume1 + Nume2);
        alert(suma)
        return suma;
        
    }else {
    }
Suma([Nume1, Nume2 ])
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
    let Num1 = document.getElementById("num1").value;
    let Num2 = document.getElementById("num2").value;
    let intercambio = Num1;
    Num1 = Num2
    Num2 = intercambio
    document.getElementById('num1').value = Num1;
    document.getElementById('num2').value = Num2;
    alert("el número 1 ahora es: " + Num1 + " El número 2 ahora es: " + Num2)
}



let form = document.getElementById('form');
form.addEventListener('submit', formSumbit);
function formSumbit(e) {
    e.preventDefault();
}