// ejercicio1
let nombre = "priscila";
function saludar(nombre) {
    console.log("Hola priscila");
}
saludar(nombre)

//ejercicio2
let numero1 = 5
let numero2 = 6
function multiplicar(numero1, numero2) {
    let resultado = numero1 * numero2
    return resultado
}
let retornoDelafuncion = multiplicar(numero1, numero2)
console.log(retornoDelafuncion);

//ejercicio3
let numeroUno = 2
let numeroDos = 2
let numeroTres = 2
let numeroCuatro = 2
function sumar(numeroUno, numeroDos, numeroTres, numeroCuatro) {
    let resultado = numeroUno + numeroDos + numeroTres + numeroCuatro
    return resultado
}
let retornodelaFuncion = sumar(numeroUno, numeroDos, numeroTres, numeroCuatro)
console.log(retornodelaFuncion);

//ejercicio4
let number1 = 20
let number2 = 5
let number3 = 4
let number4 = 1
function restar(number1, number2, number3, number4) {
    let resultado = number1 - number2 - number3 - number4
    return resultado
}
let returnfuction = restar(number1, number2, number3, number4)
console.log(returnfuction);

//ejercicio5
let base = 5
let altura = 3
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log(areaTriangulo(5, 3));

let lado1 = 4
let lado2 = 5
let lado3 = 6
function perimetroTriangulo(lado1, lado2, lado3) {
    return (lado1 + lado2 + lado3)
}
console.log(perimetroTriangulo(4, 5, 6))

//ejercicio6

function calcularPrecio(precio, cantidad) {
    let precioTotal = precio * cantidad;
    if (cantidad >= 10 && cantidad < 20) {
        let descuento1 = (precioTotal * 10) / 100;
        return descuento1
    }
    else if (cantidad >= 20) {
        let descuento2 = (precio * 20) / 100;
        return descuento2
    }
    else {
        return `No aplica descuento, el precio es ${precioTotal}`
    }
}
console.log(calcularPrecio(500, 2));

//ejercicio 7
function calcularDescuento(precio, cantidad) {
    let precioTotal = precio * cantidad;
    switch (true) {
      case cantidad >= 20:
        precioTotal = precioTotal - (precioTotal * 20) / 100;
        break;
      case cantidad >= 10:
        precioTotal = precioTotal - (precioTotal * 10) / 100;
        break;
    }
    return precioTotal;
}
console.log(calcularDescuento(100,20))

//ejercicio8
function esMayorDeEdad(edadPersona) {
    if (edadPersona >= 18) {
        console.log("Eres mayor de edad");
    }
    else if (edadPersona < 18) {
        console.log("Eres menor de edad");
    }
}
esMayorDeEdad(25)

function calcularImpuesto(ingresoAnual) {
    if (ingresoAnual <= 10000) {
        console.log(`el impuesto es de ${(ingresoAnual * 10) / 100}`);
    }
    else if (ingresoAnual > 10000 && ingresoAnual <= 20000) {
        console.log(`el impuesto es de ${(ingresoAnual * 15) / 100}`);
    }
    else if (ingresoAnual > 20000) {
        console.log(`el impuesto es de ${(ingresoAnual * 20) /100}`);
    }
}
calcularImpuesto(9000)
function verificarDia(diaDeLaSemana) {
    switch (diaDeLaSemana) {
        case 1: console.log("es un dia laboral");
        break;
        case 2: console.log("es un dia laboral");
        break;
        case 3: console.log("es un dia laboral");
        break;
        case 4: console.log("es un dia laboral");
        break;
        case 5: console.log("es un dia laboral");
        break;
        case 6: console.log("es fin de semana");
        break;
        case 7: console.log("es fin de semana");
        break;
    }
}
verificarDia(3)

