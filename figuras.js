// Código del cuadrado

console.group("Cuadrado");

// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");

// const perimetroCuadrado = ladoCuadrado * 4;

// console.log("El perimetro del cuadrado es " + perimetroCuadrado + " cm");

function perimetroCuadrado (lado) {
    return lado * 4;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

// console.log("El área del cuadrado es " + areaCuadrado + " cm cuadrados");

function areaCuadrado (lado) {
    return lado * lado;
}

console.groupEnd();

// Código del triángulo

console.group("Triángulo");

// const ladoTriangulo1 = 6;

// const ladoTriangulo2 = 6;

// const baseTriangulo = 4;

// const alturaTriangulo = 5.5;

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

// console.log(
//     "los lados del triágulo miden: " 
//     + ladoTriangulo1 
//     + " cm, " 
//     + ladoTriangulo2 
//     + " cm, " 
//     + baseTriangulo 
//     + " cm,"
// )
//     // Separar de esta manera se llama IDENTAR

// console.log("El perímetro del triágulo mide: " + perimetroTriangulo + " cm")

// console.log("El área del triágulo mide: " + areaTriangulo + " cm")

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

console.groupEnd();

// Código del circulo

console.group ("Círculo");

const radioCirculo = 4;

const diametroCirculo = radioCirculo * 2;

const PI = Math.PI;

const perimetroCiruculo = 2 * PI * radioCirculo;

const areaCirculo = PI * (radioCirculo * radioCirculo);

// vamos a escribir la variable PI

// const PI = 3.1415; esta es la forma mas facil de hacerlo, pero no la que deberiamos usar en JS

// const PI = Math.PI; // esta es la forma correcta usando herramientas que nos provee JS

console.log("El radio del círculo es: " + radioCirculo + " cm" );

console.log("El diámetro del círculo es: " + diametroCirculo + " cm" );

console.log("El perímetro del círculo es: " + perimetroCiruculo + " cm" );

console.log("El área del círculo es: " + areaCirculo + " cm ^2" );

console.groupEnd();



