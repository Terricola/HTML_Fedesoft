var a = 1;
function global(){
    console.log(a)
}
global();
console.log(a);

//var numero1 = 3;
//var numero2 = 5;

//resultado = numero1 + numero2;
//alert("El resultado es: "+ resultado)
var numeroYear = prompt("Ingrese un año:");
function bisiesto(numeroYear){
    resultado = numeroYear % 4;
    
    if (resultado == 0){
        alert("El año es bisiesto")
        
    }
    else{
        alert("El año no es bisiesto")
    }
}

bisiesto(numeroYear)

var x = prompt("Ingrese un numero");
function par_e_impar(x){
    resultado = x % 2;

    if (resultado == 0){
        alert("El numero es par")
    }
    else{
        alert("El numero es impar")
    }
    

}

par_e_impar(x)